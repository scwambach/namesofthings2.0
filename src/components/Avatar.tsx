import Image from "next/image";
import { accent } from "@styles/palette";

// Some Google accounts (notably Workspace accounts) don't return an
// avatar_url/picture claim at all, so this falls back to an initial
// instead of rendering a broken image.
export const Avatar = ({
  src,
  name,
  size = 30,
  className = "",
}: {
  src?: string | null;
  name?: string | null;
  size?: number;
  className?: string;
}) => {
  if (src) {
    return (
      <Image
        src={src}
        alt={name || "user avatar"}
        width={size}
        height={size}
        className={`rounded-full object-cover ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className={`rounded-full flex items-center justify-center text-white font-bold ${className}`}
      style={{ width: size, height: size, backgroundColor: accent }}
    >
      {name?.trim()?.[0]?.toUpperCase() || "?"}
    </div>
  );
};
