"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Pre-pantalla del inicio: fondo negro sólido con el logo, sin texto.
 * Se muestra 2 segundos y se desvanece. Bloquea el scroll mientras dura.
 */
export default function Preloader() {
  const [phase, setPhase] = useState<"show" | "fade" | "done">("show");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const fadeTimer = setTimeout(() => setPhase("fade"), 2000);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 2650);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-ink transition-opacity duration-[650ms] ease-out ${
        phase === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/images/logo/icono-white.png"
        alt=""
        width={975}
        height={1143}
        priority
        className="preloader-logo h-28 w-auto md:h-36"
      />
    </div>
  );
}
