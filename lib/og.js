import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { LOGO_VIEWBOX, MARK_PATHS, WORDMARK_PATHS } from "@/components/logo-paths";

// Shared renderer for every Open Graph image on the site. Images are generated at build time.
// Fonts are static TTF instances (OFL) because the image renderer cannot read WOFF2 or variable fonts.
const [piazzolla, poppins, poppinsSemiBold] = await Promise.all([
  readFile(join(process.cwd(), "assets/fonts/Piazzolla-Medium.ttf")),
  readFile(join(process.cwd(), "assets/fonts/Poppins-Regular.ttf")),
  readFile(join(process.cwd(), "assets/fonts/Poppins-SemiBold.ttf")),
]);

const PURPLE = "#605cf0";
const AZURE = "#88cdf6";
const INK = "#171a18";
const PEARL = "#f7faf8";

export async function renderOgImage({ eyebrow, title, subtitle }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PEARL,
          padding: "60px 72px",
          position: "relative",
          fontFamily: "Poppins",
        }}
      >
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", left: 0, top: 0 }}
        >
          <polygon points="770,630 1200,190 1200,350 930,630" fill={AZURE} />
          <polygon points="930,630 1200,350 1200,630" fill={PURPLE} />
        </svg>

        <svg viewBox={LOGO_VIEWBOX} width="320" height="55" fill={PURPLE}>
          {MARK_PATHS.concat(WORDMARK_PATHS).map((p, i) => (
            <path key={i} transform={p.t} d={p.d} />
          ))}
        </svg>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 840 }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: `2px solid ${PURPLE}`,
                color: PURPLE,
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: 2.4,
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </div>
          </div>
          <div
            style={{
              fontFamily: "Piazzolla",
              fontSize: title.length > 48 ? 58 : 68,
              lineHeight: 1.06,
              letterSpacing: -1.5,
              color: INK,
              marginTop: 28,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div style={{ fontSize: 26, lineHeight: 1.45, color: "#535c57", marginTop: 22, maxWidth: 760 }}>
              {subtitle}
            </div>
          )}
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#535c57" }}>laihealthcaresolutions.com</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Piazzolla", data: piazzolla, weight: 500, style: "normal" },
        { name: "Poppins", data: poppins, weight: 400, style: "normal" },
        { name: "Poppins", data: poppinsSemiBold, weight: 600, style: "normal" },
      ],
    }
  );
}
