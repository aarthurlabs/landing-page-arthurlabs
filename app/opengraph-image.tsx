import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"

export const alt = siteConfig.name
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

// Cores hardcoded: Satori (next/og) não suporta CSS custom properties.
// Os valores espelham styles/tokens.css (ink-975, paper, brand-500).
const OpengraphImage = () => {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#030504",
          color: "#F3F5F1",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#00E676",
            marginBottom: 24,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          {siteConfig.slogan}
        </div>
      </div>
    ),
    { ...size }
  )
}

export default OpengraphImage
