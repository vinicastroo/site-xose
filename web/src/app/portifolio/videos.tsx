'use client'

import ReactPlayer from 'react-player/lazy'

export interface VideosProps {
  id: number
  attributes: {
    url: string
  }
}
export function Videos({ videos }: { videos: VideosProps[] }) {
  return (
    <div className="flex wrap divide-y space-y-4 gap-4 divide-gray-200">
      {videos.length > 0 ? (
        videos.map((video) => {
          if (!video.attributes.url) {
            return ''
          }

          return (
            <div key={video.id} className="text-white pt-4">
              <ReactPlayer
                url={video.attributes.url}
                controls={true}
                width={360}
                height={200}
              />
            </div>
          )
        })
      ) : (
        <div className="w-full max-w-screen pl-2">
          <p>Sem videos cadastrados</p>
        </div>
      )}
    </div>
  )
}
