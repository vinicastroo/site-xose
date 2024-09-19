'use client'
import { PhotoProvider } from 'react-photo-view'
export function Providers({ children }: { children: React.ReactNode }) {
  return <PhotoProvider>{children}</PhotoProvider>
}
