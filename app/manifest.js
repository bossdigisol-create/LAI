import { site } from "@/lib/site";

export default function manifest() {
  return {
    name: site.name,
    short_name: "LAI",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7faf8",
    theme_color: "#605cf0",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
