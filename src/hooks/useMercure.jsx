import { MercureContext } from '@/contexts/MercureContext'
import { useContext, useEffect } from 'react'

const useMercure = (topic, onData, deps = []) => {
  const { hubUrl, withCredentials } = useContext(MercureContext)

  useEffect(() => {
    const url = new URL(hubUrl)
    url.searchParams.append('topic', topic)

    const mercure = new EventSource(url, { withCredentials })

    mercure.onmessage = (data) => {
      onData(data)
    }
    return () => {
      mercure.close()
    }
  }, deps)
}

export default useMercure
