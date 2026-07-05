import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

// Imagen Open Graph / Twitter generada en build con la marca tipográfica.
// TODO: cuando exista fotografía oficial de hero, puede reemplazarse por
// una imagen real exportada a /public (y borrar este archivo).

export const alt = "19.89 Arquitectura — Arquitectura e inversión con valor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function Dot({ size: dotSize }: { size: number }) {
  return (
    <div
      style={{
        width: dotSize,
        height: dotSize,
        borderRadius: "50%",
        backgroundColor: "#FFFFFF",
        marginBottom: 52,
        marginLeft: 10,
        marginRight: 10,
      }}
    />
  );
}

export default async function OgImage() {
  const [semiBold, light] = await Promise.all([
    readFile(path.join(process.cwd(), "assets", "fonts", "Poppins-SemiBold.ttf")),
    readFile(path.join(process.cwd(), "assets", "fonts", "Poppins-Light.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(145deg, #2E2E2E 0%, #161616 70%)",
          color: "#FFFFFF",
          fontFamily: "Poppins",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div style={{ fontSize: 120, fontWeight: 600, lineHeight: 1 }}>19</div>
          <Dot size={14} />
          <div style={{ fontSize: 120, fontWeight: 600, lineHeight: 1 }}>89</div>
          <Dot size={14} />
        </div>
        <div
          style={{
            marginTop: 34,
            fontSize: 30,
            fontWeight: 300,
            letterSpacing: "0.52em",
            marginLeft: "0.52em",
          }}
        >
          ARQUITECTURA
        </div>
        <div
          style={{
            marginTop: 60,
            width: 90,
            height: 1,
            backgroundColor: "#A3A093",
          }}
        />
        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            fontWeight: 300,
            letterSpacing: "0.24em",
            color: "#A3A093",
            textTransform: "uppercase",
          }}
        >
          {`${siteConfig.tagline} — Costa Rica`}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Poppins", data: semiBold, weight: 600, style: "normal" },
        { name: "Poppins", data: light, weight: 300, style: "normal" },
      ],
    },
  );
}
