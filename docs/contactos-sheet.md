# Conectar el formulario de contacto al Google Sheet

Cada consulta del formulario se registra como una fila en el
[Sheet de contactos](https://docs.google.com/spreadsheets/d/1MK7espfDD54J_O_S68vc--9D0sgE-RyHWt2FNuPgmgo/edit)
mediante un Web App de Google Apps Script. El código del sitio ya está listo;
solo falta **un paso único** que debe hacer el dueño del sheet (requiere su
cuenta de Google):

## Instalación (una sola vez, ~2 minutos)

1. Abrir el Sheet de contactos → menú **Extensiones → Apps Script**.
2. Borrar el contenido del editor y pegar TODO el código de
   [`docs/contactos-sheet.gs`](./contactos-sheet.gs). Guardar (Ctrl+S).
3. (Opcional) Ejecutar la función `testAppend` una vez para probar: pedirá
   autorización → **Permitir**. Debe aparecer una fila de prueba en el sheet.
4. Botón **Implementar → Nueva implementación**:
   - Tipo: **Aplicación web**
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier persona**
   - Implementar → autorizar si lo pide → copiar la **URL que termina en `/exec`**.
5. Pegar esa URL en [`lib/site-config.ts`](../lib/site-config.ts), campo
   `contactSheetWebhook`, y hacer commit/push (Vercel redespliega solo).

## Cómo funciona

- Al enviar el formulario, el sitio dispara un POST al Web App
  (`fetch` con `keepalive`, no bloquea el envío del correo por FormSubmit).
- El script agrega la fila: **Fecha, Nombre, Correo, Teléfono, Etapa del
  proyecto, Mensaje, Idioma, Origen** (crea los encabezados la primera vez).
- Si `contactSheetWebhook` está vacío, el sitio funciona igual (solo correo).

## Si se cambia el código del script

Después de editar el `.gs`, hay que crear una **nueva implementación**
(o administrar implementaciones → editar → nueva versión) para que la URL
`/exec` sirva la versión nueva.
