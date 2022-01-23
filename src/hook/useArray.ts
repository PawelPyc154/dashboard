/* eslint-disable no-unused-vars */
import { useState } from 'react'

const useArray = <TItem>(defaultValue: TItem[] = []) => {
  const [array, setArray] = useState(defaultValue)

  function push(element: TItem) {
    setArray((a) => [...a, element])
  }

  function filter(callback: (item: TItem) => boolean) {
    setArray((a) => a.filter(callback))
  }

  function update(index: number, newElement: TItem) {
    setArray((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1, a.length)])
  }

  function remove(index: number) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length - 1)])
  }

  function clear() {
    setArray([])
  }

  return { array, set: setArray, push, filter, update, remove, clear }
}
export { useArray }
