import { useState, useCallback, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface ScreenshotGalleryProps {
  toolId: string;
  toolName: string;
  totalImages: number;
  screenshotPaths?: string[];
}

export default function ScreenshotGallery({ toolId, toolName, totalImages, screenshotPaths }: ScreenshotGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  // Usa las rutas explícitas si se pasan, si no construye las URLs legacy
  const images = screenshotPaths && screenshotPaths.length > 0
    ? screenshotPaths
    : Array.from({ length: totalImages }, (_, i) =>
        i === 0 ? `/screenshots/${toolId}.webp` : `/screenshots/${toolId}-${i + 1}.webp`
      );

  const count = images.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') setLightbox(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prev, next]);

  return (
    <>
      <div className="relative mb-8 rounded-xl overflow-hidden border border-border/50 bg-muted/20 shadow-sm group">
        <img
          src={images[current]}
          alt={`${toolName} ${current + 1}`}
          className="w-full h-auto object-cover cursor-pointer"
          loading={current === 0 ? 'eager' : 'lazy'}
          fetchPriority={current === 0 ? 'high' : undefined}
          onClick={() => setLightbox(true)}
        />

        {count > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 size-9 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/90 border border-border/40 shadow-sm"
              aria-label="Imagen anterior"
            >
              <Icon icon="tabler:arrow-left" width={18} height={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 size-9 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/90 border border-border/40 shadow-sm"
              aria-label="Imagen siguiente"
            >
              <Icon icon="tabler:arrow-right" width={18} height={18} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                  className={`size-2 rounded-full transition-all ${
                    i === current ? 'bg-primary w-4' : 'bg-background/60 hover:bg-background/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <button
          onClick={() => setLightbox(true)}
          className="absolute top-3 right-3 size-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80 border border-border/30 shadow-sm"
          aria-label="Ampliar imagen"
        >
              <Icon icon="tabler:zoom-in" width={16} height={16} />
        </button>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 size-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors text-white"
            aria-label="Cerrar"
          >
            <Icon icon="tabler:x" width={22} height={22} />
          </button>

          {count > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors text-white"
                aria-label="Imagen anterior"
              >
                <Icon icon="tabler:arrow-left" width={24} height={24} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors text-white"
                aria-label="Imagen siguiente"
              >
                <Icon icon="tabler:arrow-right" width={24} height={24} />
              </button>
            </>
          )}

          <img
            src={images[current]}
            alt={`${toolName} — captura ${current + 1} de ${count}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {count > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  aria-label={`Ver imagen ${i + 1}`}
                  className={`size-2.5 rounded-full transition-all ${
                    i === current ? 'bg-white w-5' : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
