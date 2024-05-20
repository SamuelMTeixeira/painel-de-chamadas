import fetchUnity from '@/services/unity'
import { useQuery } from '@tanstack/react-query'

export default function useUnity() {
  const { data } = useQuery({
    queryKey: ['unity'],
    queryFn: () => fetchUnity(),
  })

  return {
    unity: data?.nome,
    description: data?.descricao,
  }
}
