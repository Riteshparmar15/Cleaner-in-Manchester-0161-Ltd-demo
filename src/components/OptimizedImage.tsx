import React, { useState, useEffect, useRef } from "react";
import { getAssetUrl } from "../utils/assets";

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string;
  wrapperClassName?: string;
  className?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  webpSrc,
  wrapperClassName = "",
  className = "",
  priority = false,
  width,
  height,
  style,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Compute final URLs
  const resolvedSrc = src.startsWith("http") || src.startsWith(import.meta.env.BASE_URL)
    ? src
    : getAssetUrl(src);

  const resolvedWebp = webpSrc
    ? (webpSrc.startsWith("http") || webpSrc.startsWith(import.meta.env.BASE_URL) ? webpSrc : getAssetUrl(webpSrc))
    : resolvedSrc.replace(/\.(jpe?g|png)$/i, ".webp");

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth > 0) {
        setIsLoaded(true);
      }
    }
  }, [resolvedSrc]);

  return (
    <div
      className={`relative overflow-hidden bg-slate-100 ${wrapperClassName}`}
      style={style}
    >
      {/* Shimmer skeleton placeholder visible until loaded */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse pointer-events-none"
          aria-hidden="true"
        />
      )}

      <picture className="w-full h-full block">
        <source srcSet={resolvedWebp} type="image/webp" />
        <img
          ref={imgRef}
          src={resolvedSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          {...props}
        />
      </picture>
    </div>
  );
};

