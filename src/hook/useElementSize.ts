import { useLayoutEffect, useCallback, useState, useRef } from 'react'

const useElementSize = <T extends Element>() => {
  const ref = useRef<T>(null)
  const [rect, setRect] = useState(getRect(ref ? ref.current : null))
  function getRect(element: T | null) {
    if (!element) {
      return {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        hasScroll: false,
      }
    }

    const boundingClientRect = element.getBoundingClientRect()

    return {
      ...JSON.parse(JSON.stringify(boundingClientRect)),
      hasScroll: boundingClientRect.height < element.scrollHeight,
    }
  }

  const handleResize = useCallback(() => {
    if (!ref.current) {
      return
    }

    // Update client rect
    setRect(getRect(ref.current))
  }, [ref])

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    handleResize()

    if (typeof ResizeObserver === 'function') {
      let resizeObserver: ResizeObserver | null = new ResizeObserver(() => handleResize())
      resizeObserver.observe(element)

      return () => {
        if (!resizeObserver) {
          return
        }

        resizeObserver.disconnect()
        resizeObserver = null
      }
    }
    // Browser support, remove freely
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref.current])

  return { ref, ...rect }
}

export { useElementSize }
