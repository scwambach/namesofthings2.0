import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Names of Things — An ongoing catalogue of invented names";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          backgroundColor: "#FFFFFF",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#E8384F",
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          An Ongoing Catalogue of Invented Names
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#0A0A0A",
            display: "flex",
          }}
        >
          Names of Things
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
