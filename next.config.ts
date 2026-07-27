import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://form.jotform.com https://*.jotform.com",
              "frame-src 'self' https://form.jotform.com https://*.jotform.com",
              "img-src 'self' data: https: blob:",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.jotform.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "connect-src 'self' https://*.jotform.com wss://*.jotform.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
