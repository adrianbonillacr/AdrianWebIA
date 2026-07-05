"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, select, textarea, label";

/**
 * Cursor de marca: un punto pequeño que sigue el mouse y un aro fino que
 * aparece solo sobre elementos interactivos. Usa mix-blend-difference para
 * garantizar contraste sobre fondos claros y oscuros.
 *
 * Solo se activa con puntero fino (mouse) y sin prefers-reduced-motion;
 * en táctil o con movimiento reducido no se monta y el cursor nativo queda
 * intacto. Sobre campos de texto se conserva el cursor nativo (ver CSS).
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!finePointer || reducedMotion || !dot || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");

    let mouseX = -100;
    let mouseY = -100;
    let dotX = -100;
    let dotY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        dotX = ringX = mouseX;
        dotY = ringY = mouseY;
      }
      const overInteractive = !!(e.target as Element | null)?.closest?.(
        INTERACTIVE_SELECTOR,
      );
      ring.style.opacity = overInteractive ? "1" : "0";
      ring.style.transform = overInteractive ? "scale(1)" : "scale(0.4)";
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const tick = () => {
      // Lerp: el punto sigue de cerca, el aro con un rezago suave
      dotX += (mouseX - dotX) * 0.4;
      dotY += (mouseY - dotY) * 0.4;
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
