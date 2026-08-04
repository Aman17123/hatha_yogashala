const brandLogoPaths = {
  facebook: "/images/logo/facebook.svg",
  gmail: "/images/logo/gmail.svg",
  "google-maps": "/images/logo/google-maps.svg",
  instagram: "/images/logo/instagram.svg",
  tripadvisor: "/images/logo/tripadvisor.svg",
  whatsapp: "/images/logo/whatsapp.svg",
  youtube: "/images/logo/youtube.svg",
};

export default function BrandLogo({
  name,
  className = "size-4",
  alt = "",
}) {
  const src = brandLogoPaths[name];
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`${className} object-contain`}
    />
  );
}

export function BrandLogoPath(name) {
  return brandLogoPaths[name] || "";
}