'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Project } from './project-data';

export default function Galery({ project }: { project: Project }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = React.useState(0);

  // ✅ Update active index when the carousel changes
  React.useEffect(() => {
    if (!api) return;

    const updateIndex = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on('select', updateIndex);
    updateIndex(); // initialize

    return () => {
      api.off('select', updateIndex);
    };
  }, [api]);

  // ✅ Go to selected image when thumbnail clicked
  const handleThumbnailClick = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
    setActiveIndex(index);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {project.galery && project.galery.length > 0 && (
        <>
          {/* Image name above */}
          <h2 className="text-xl font-semibold mb-3 text-center">
            {project.galery[activeIndex]?.name}
          </h2>

          {/* Main Carousel */}
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {project.galery.map((img, index) => (
                <CarouselItem key={index} className="w-full">
                  <Card className="overflow-hidden rounded-2xl">
                    <CardContent className="flex items-center justify-center p-0">
                      <img
                        src={img.img}
                        alt={img.name}
                        loading="lazy"
                        className="w-full h-[550px] object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          {/* Thumbnails grid below */}
          <div
            className={cn(
              'grid mt-6 gap-3 justify-center',
              project.galery.length > 5
                ? 'grid-cols-5 sm:grid-cols-6 md:grid-cols-8'
                : `grid-cols-${project.galery.length}`
            )}
          >
            {project.galery.map((img, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={cn(
                  'rounded-xl overflow-hidden border-2 transition-all duration-300',
                  index === activeIndex
                    ? 'border-blue-500 scale-105'
                    : 'border-transparent hover:scale-105'
                )}
              >
                <img
                  src={img.img}
                  loading="lazy"
                  alt={`Thumbnail ${index + 1}`}
                  className="w-24 h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
