import { useRef, useEffect } from 'react'

export default function useAudio(src, { volume = 1, playbackRate = 1 }) {
  const audio = useRef(new Audio(src))

  useEffect(() => {
    audio.current.volume = volume
  }, [volume])

  useEffect(() => {
    audio.current.playbackRate = playbackRate
  }, [playbackRate])

  return audio.current
}
