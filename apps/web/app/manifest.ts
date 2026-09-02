import type { MetadataRoute } from "next";

import { bemaraBrand } from "@bemara/domain";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: bemaraBrand.name,
    short_name: bemaraBrand.name,
    description: bemaraBrand.slogan,
    start_url: "/es-MX",
    display: "standalone",
    background_color: "#F7F1ED",
    theme_color: "#5B3443",
    icons: [
      {
        src: "/brand/bemara-icon.png",
        sizes: "2000x2000",
        type: "image/png",
      },
    ],
  };
}
