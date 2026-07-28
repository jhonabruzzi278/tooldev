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
      <div className="relative mb-8 overflow-hidden border border-border font-mono group">
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
              className="absolute left-2 top-1/2 -translate-y-1/2 size-9 rounded-[3px] bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background border border-border"
              aria-label="Imagen anterior"
            >
              <Icon icon="tabler:arrow-left" width={18} height={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 size-9 rounded-[3px] bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background border border-border"
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
                  className={`size-2 rounded-[2px] transition-all ${
                    i === current ? 'bg-accent-lime w-4' : 'bg-background/60 hover:bg-background/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <button
          onClick={() => setLightbox(true)}
          className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-2 rounded-[3px] bg-black/70 text-white border border-white/20 hover:bg-black/90 hover:border-white/40 hover:scale-105 transition-all shadow-lg backdrop-blur-sm"
          aria-label="Ampliar captura de pantalla"
        >
          <Icon icon="tabler:zoom-in" width={18} height={18} />
          <span className="text-[10px] uppercase tracking-wider font-medium">Ampliar</span>
        </button>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 size-10 rounded-[3px] bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors text-white"
            aria-label="Cerrar"
          >
            <Icon icon="tabler:x" width={22} height={22} />
          </button>

          {count > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 size-12 rounded-[3px] bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors text-white"
                aria-label="Imagen anterior"
              >
                <Icon icon="tabler:arrow-left" width={24} height={24} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 size-12 rounded-[3px] bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors text-white"
                aria-label="Imagen siguiente"
              >
                <Icon icon="tabler:arrow-right" width={24} height={24} />
              </button>
            </>
          )}

          <img
            src={images[current]}
            alt={`${toolName} — captura ${current + 1} de ${count}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {count > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  aria-label={`Ver imagen ${i + 1}`}
                  className={`size-2.5 rounded-[2px] transition-all ${
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
