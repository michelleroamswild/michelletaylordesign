import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Michelle Taylor — Product Designer";
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #f5f0eb 0%, #ffffff 50%, hsl(249, 80%, 96%) 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              textTransform: "uppercase" as const,
              letterSpacing: "0.15em",
              color: "hsl(249, 80%, 60%)",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#1a1a1a",
            }}
          >
            Michelle Taylor
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: 1.4,
              color: "#555555",
              maxWidth: "800px",
            }}
          >
            Product Designer with 10+ years turning complexity into clarity across e-commerce, fintech, and enterprise SaaS
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 600,
              backgroundColor: "hsla(249, 80%, 60%, 0.12)",
              color: "hsl(249, 60%, 45%)",
            }}
          >
            Product Strategy
          </div>
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 600,
              backgroundColor: "hsla(214, 100%, 50%, 0.12)",
              color: "hsl(214, 80%, 40%)",
            }}
          >
            UX/UI Design
          </div>
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 600,
              backgroundColor: "hsla(74, 68%, 35%, 0.12)",
              color: "hsl(74, 68%, 30%)",
            }}
          >
            Research & Testing
          </div>
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 600,
              backgroundColor: "hsla(26, 90%, 54%, 0.12)",
              color: "hsl(26, 80%, 40%)",
            }}
          >
            E-Commerce
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
