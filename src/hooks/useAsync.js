import { useState, useEffect } from 'react'

export function useAsync(fn, deps = []) {
  const [state, setState] = useState({ data: null, loading: true })

  useEffect(() => {
    setState(s => ({ ...s, loading: true }))
    fn().then(result => {
      setState({ data: result.data ?? result, loading: false })
    }).catch(() => {
      setState({ data: null, loading: false })
    })
  }, deps)

  return state
}
