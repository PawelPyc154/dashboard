import { RefObject, useEffect } from 'react'

type AnyEvent = MouseEvent | TouchEvent

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  // eslint-disable-next-line no-unused-vars
  handler: (event: AnyEvent) => void,
  exceptId: string,
) => {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current

      // Do nothing if clicking ref's element or descendent elements

      console.log(document.getElementById('menu-e'))

      if (
        !el ||
        el.contains(event.target as Node) ||
        document.getElementById(exceptId)?.contains(event.target as Node)
      ) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }

    // Reload only if ref or handler changes
  }, [ref, handler])
}

export { useOnClickOutside }
