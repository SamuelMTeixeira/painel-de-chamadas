import { fetchTickets } from '@/services/ticket'
import { useQuery } from '@tanstack/react-query'

export default function useTicket() {
  const {
    data: tickets,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['tickets'],
    queryFn: () => fetchTickets(),
  })

  return {
    tickets,
    isFetching,
    isLoading,
  }
}
