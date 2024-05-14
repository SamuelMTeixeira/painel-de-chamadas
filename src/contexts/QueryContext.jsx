import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

export default function QueryContext({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
