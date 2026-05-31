import NextImage, { type ImageProps } from "next/image";

const RASTER_IMAGE_PATTERN = /\.(avif|gif|jpe?g|png|webp)(\?.*)?$/i;
const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJiIiB4PSItMjUlIiB5PSItMjUlIiB3aWR0aD0iMTUwJSIgaGVpZ2h0PSIxNTAlIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0Ii8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjZjFmMGVlIi8+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjZWRlOWU1IiBmaWx0ZXI9InVybCgjYikiLz48L3N2Zz4=";

const HIGH_QUALITY_IMAGE = 100;
const FULL_WIDTH_SIZES = "100vw";
const FILL_IMAGE_SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

function isRasterImage(src: ImageProps["src"]) {
  return typeof src === "string" && RASTER_IMAGE_PATTERN.test(src);
}

function isFullWidth(className: ImageProps["className"]) {
  return typeof className === "string" && /\bw-full\b/.test(className);
}

export default function OptimizedImage({
  src,
  className,
  fill,
  sizes,
  quality,
  placeholder,
  blurDataURL,
  loading,
  priority,
  preload,
  ...props
}: ImageProps) {
  const rasterImage = isRasterImage(src);
  const shouldPreload = preload ?? priority;

  return (
    <NextImage
      {...props}
      src={src}
      className={className}
      fill={fill}
      sizes={sizes ?? (isFullWidth(className) ? FULL_WIDTH_SIZES : fill ? FILL_IMAGE_SIZES : undefined)}
      quality={quality ?? (rasterImage ? HIGH_QUALITY_IMAGE : undefined)}
      placeholder={placeholder ?? (rasterImage ? "blur" : "empty")}
      blurDataURL={blurDataURL ?? (rasterImage ? BLUR_DATA_URL : undefined)}
      loading={shouldPreload ? undefined : loading ?? "lazy"}
      preload={shouldPreload}
      decoding="async"
    />
  );
}
