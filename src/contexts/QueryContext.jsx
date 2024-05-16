import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

export default function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
