'use client'
import type { VideosProps } from './page'
import 'react-photo-view/dist/react-photo-view.css'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import ReactPlayer from 'react-player'
export function Videos({ videos }: { videos: VideosProps[] }) {
  return (
    <div className="flex divide-y space-y-4 gap-4  divide-gray-200">
      {videos.length > 0 ? (
        <Carousel className="w-full max-w-screen pl-2">
          <CarouselContent>
            {videos.map((video) => (
              <div key={video.id} className="text-white pt-4">
                <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                  <ReactPlayer
                    url={video.attributes.url}
                    controls={true}
                    width={400}
                    height={380}
                  />
                </CarouselItem>
              </div>
            ))}
          </CarouselContent>
          <>
            <CarouselPrevious className="ml-12 text-black" />
            <CarouselNext className="mr-10 text-black" />
          </>
        </Carousel>
      ) : (
        <div className="w-full max-w-screen pl-2">
          <p>Sem videos cadastrados</p>
        </div>
      )}
    </div>
  )
}
