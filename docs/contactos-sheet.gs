/**
 * 19.89 Arquitectura — Registro de consultas del formulario de contacto.
 *
 * Este script vive DENTRO del Google Sheet de contactos y expone un Web App
 * que recibe cada envío del formulario del sitio y lo agrega como fila.
 * Instrucciones de instalación: ver docs/contactos-sheet.md
 */

var SHEET_NAME = "Contactos"; // si no existe, usa la primera hoja

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000); // evita filas mezcladas si llegan envíos simultáneos
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    // Encabezados (solo la primera vez, si la hoja está vacía)
    if (sheet.getLastRow() === 0) {
      sheet
        .appendRow([
          "Fecha",
          "Nombre",
          "Correo",
          "Teléfono",
          "Etapa del proyecto",
          "Mensaje",
          "Idioma",
          "Origen",
        ]);
      sheet.getRange(1, 1, 1, 8).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    var p = (e && e.parameter) || {};
    sheet.appendRow([
      new Date(),
      p.nombre || "",
      p.correo || "",
      p.telefono || "",
      p.etapa || "",
      p.mensaje || "",
      p.idioma || "",
      p.origen || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/** Prueba rápida desde el editor: Ejecutar > testAppend */
function testAppend() {
  doPost({
    parameter: {
      nombre: "Prueba interna",
      correo: "prueba@1989arquitectura.com",
      telefono: "0000-0000",
      etapa: "Quiero iniciar un proyecto nuevo",
      mensaje: "Fila de prueba generada desde el editor de Apps Script.",
      idioma: "es",
      origen: "editor",
    },
  });
}
