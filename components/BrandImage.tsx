import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { ImageTone } from "@/lib/images";

/**
 * Envuelve next/image. Mientras la foto real no exista en /public, renderiza
 * un placeholder tonal de marca (gradiente de paleta + grano sutil + etiqueta
 * letterspaced). Cuando el cliente suba el archivo con el nombre esperado
 * (ver /lib/images.ts), la foto aparece automáticamente.
 */

type BrandImageProps = {
  src: string;
  alt: string;
  tone?: ImageTone;
  /** Etiqueta pequeña centrada en el placeholder (nombre del proyecto/sección). */
  label?: string;
  /** El contenedor padre define tamaño/aspecto: esta clase va al wrapper. */
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Escala 1.035 al hover del card padre (requiere `group` en el padre). */
  hoverZoom?: boolean;
};

// Solo colores oficiales de la paleta en los gradientes tonales.
const toneStyles: Record<ImageTone, { gradient: string; labelClass: string }> =
  {
    earth: {
      gradient: "linear-gradient(145deg, #6f6252 0%, #5c5144 55%, #2e2e2e 100%)",
      labelClass: "text-mist",
    },
    stone: {
      gradient: "linear-gradient(145deg, #a3a093 0%, #a3a093 40%, #6f6252 100%)",
      labelClass: "text-white",
    },
    mist: {
      gradient: "linear-gradient(145deg, #ffffff 0%, #d1cfcb 55%, #a3a093 100%)",
      labelClass: "text-ink",
    },
    charcoal: {
      gradient: "linear-gradient(145deg, #2e2e2e 0%, #2e2e2e 45%, #161616 100%)",
      labelClass: "text-stone",
    },
    ink: {
      gradient: "linear-gradient(145deg, #2e2e2e 0%, #161616 60%, #161616 100%)",
      labelClass: "text-stone",
    },
  };

function imageExists(src: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

export default function BrandImage({
  src,
  alt,
  tone = "earth",
  label,
  className,
  sizes,
  priority,
  hoverZoom,
}: BrandImageProps) {
  const hasImage = imageExists(src);
  const zoomClass = hoverZoom
    ? " transition-transform duration-[600ms] ease-out group-hover:scale-[1.035]"
    : "";

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {hasImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "100vw"}
          priority={priority}
          className={`object-cover${zoomClass}`}
        />
      ) : (
        <div
          role={alt ? "img" : undefined}
          aria-label={alt || undefined}
          aria-hidden={alt ? undefined : true}
          className={`absolute inset-0${zoomClass}`}
          style={{ backgroundImage: toneStyles[tone].gradient }}
        >
          <div aria-hidden="true" className="texture-grain absolute inset-0" />
          {label ? (
            <span
              aria-hidden="true"
              className={`absolute inset-0 flex items-center justify-center px-6 text-center text-[0.68rem] font-normal uppercase tracking-[0.3em] ${toneStyles[tone].labelClass}`}
            >
              {label}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
