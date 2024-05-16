import { createContext, createElement } from 'react'

export const MercureContext = createContext({
  hubUrl: '',
  withCredentials: false,
})

export default function MercureProvider(props) {
  const {
    options: { hubUrl, withCredentials = false },
    children,
  } = props

  return createElement(
    MercureContext.Provider,
    { value: { hubUrl, withCredentials } },
    children,
  )
}
