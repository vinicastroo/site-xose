'use client'
import Image from 'next/image'
import type { EventsProps } from './page'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
export function Events({ events }: { events: EventsProps[] }) {
  return (
    <div className="flex flex-col divide-y space-y-4 gap-4 divide-gray-200">
      {events.map((event) => (
        <div key={event.id} className="text-white pt-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">{event.attributes.title}</h1>
            {/* <span className="text-base">
              (
              {new Intl.DateTimeFormat('pt-BR', {
                timeZone: 'America/Sao_Paulo',
              }).format(new Date(event.attributes.createdAt))}
              )
            </span> */}
          </div>
          <div className="mt-4 w-full">
            <Carousel className="w-full max-w-screen pl-2">
              <PhotoProvider>
                <CarouselContent>
                  {event.attributes.fotos.data.map((photo) => (
                    <PhotoView
                      key={photo.id}
                      src={photo.attributes.formats.large.url}
                    >
                      <CarouselItem className="md:basis-1/2 lg:basis-1/6">
                        <Image
                          src={photo.attributes.formats.medium.url}
                          alt={photo.attributes.formats.medium.url}
                          width={photo.attributes.formats.medium.width}
                          height={photo.attributes.formats.medium.height}
                          className="cursor-pointer hover:brightness-110 rounded-md object-cover h-60 w-80"
                        />
                      </CarouselItem>
                    </PhotoView>
                  ))}
                </CarouselContent>
              </PhotoProvider>
              {event.attributes.fotos.data.length > 6 && (
                <>
                  <CarouselPrevious className="ml-12 text-black" />
                  <CarouselNext className="mr-10 text-black" />
                </>
              )}
            </Carousel>
          </div>
        </div>
      ))}
    </div>
  )
}
