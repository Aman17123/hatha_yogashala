import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const title =
      searchParams.get("title") ||
      "Yoga Teacher Training & Retreats in Goa";
    const desc =
      searchParams.get("desc") ||
      "Yoga Alliance-registered residential school in Querim, North Goa. 100–300 hr courses & wellness retreats.";
    const badge =
      searchParams.get("badge") || "Yoga Alliance USA Certified • North Goa";
    const cta = searchParams.get("cta") || "Explore Dates & Reserve Spot →";
    const bgImage = searchParams.get("image") || "";

    const baseUrl = new URL(request.url).origin;
    const resolvedBgUrl = bgImage
      ? bgImage.startsWith("http")
        ? bgImage
        : `${baseUrl}${bgImage.startsWith("/") ? "" : "/"}${bgImage}`
      : null;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "50px 60px",
            backgroundColor: "#0d1411",
            fontFamily: "system-ui, -apple-system, sans-serif",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background image if provided */}
          {resolvedBgUrl && (
            <img
              src={resolvedBgUrl}
              alt=""
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.35,
              }}
            />
          )}

          {/* Dark luxury gradient overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(13, 20, 17, 0.94) 0%, rgba(20, 32, 27, 0.88) 50%, rgba(13, 20, 17, 0.96) 100%)",
            }}
          />

          {/* Top Brand Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 10,
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#c59b27",
                  color: "#0d1411",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                🕉
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    color: "#f5efe6",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  The Hatha Yogashala
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#c59b27",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Querim Beach • Pernem, Goa
                </span>
              </div>
            </div>

            {/* Yoga Alliance Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(197, 155, 39, 0.18)",
                border: "1.5px solid rgba(197, 155, 39, 0.6)",
                padding: "8px 18px",
                borderRadius: "999px",
                color: "#f3d887",
                fontSize: "15px",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              <span>✦</span>
              <span>{badge}</span>
            </div>
          </div>

          {/* Center Main Headline & Value Prop */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              zIndex: 10,
              maxWidth: "1050px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <h1
              style={{
                fontSize: title.length > 55 ? "44px" : "52px",
                fontWeight: "900",
                color: "#ffffff",
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: "-0.5px",
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              {title}
            </h1>

            <p
              style={{
                fontSize: "22px",
                lineHeight: 1.4,
                color: "#cbd5e1",
                margin: 0,
                fontWeight: "400",
                maxWidth: "980px",
              }}
            >
              {desc.length > 130 ? `${desc.slice(0, 130)}...` : desc}
            </p>
          </div>

          {/* Bottom Bar: Highlights & High-Conversion CTA */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 10,
              width: "100%",
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              paddingTop: "22px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "24px",
                color: "#94a3b8",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <span>✨ Residential Ashram</span>
              <span>🌿 Organic Meals</span>
              <span>🧘 Small Batches</span>
            </div>

            {/* High-Conversion CTA Button */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#c59b27",
                color: "#0d1411",
                padding: "12px 26px",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "800",
                boxShadow: "0 4px 18px rgba(197, 155, 39, 0.4)",
              }}
            >
              {cta}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.error("OG Image generation failed", e);
    return new Response("Failed to generate OG Image", { status: 500 });
  }
}
