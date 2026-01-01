import { useState } from 'react'
const useCounter = () => {
  const [value, setValue] = useState(0)
  return { value, increment: () => setValue(value + 1) }
}
export default useCounter
