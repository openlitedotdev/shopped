import { dotStream } from 'ldrs'
import { useEffect } from 'react'

export default function Loading() {
  useEffect(() => {
    dotStream.register()
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <l-dot-stream size="60" speed="2.5" color="black"></l-dot-stream>
    </div>
  )
}
