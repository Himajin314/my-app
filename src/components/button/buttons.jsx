import { useState } from "react"

const Button = ( ) => {
  const [state, setState] = useState('')
  const [isClick, setIsClick] = useState(false)
  const handleClick = () => {
    setIsClick(true)
    setState('送信済み')
  }
  return (
    <button onClick={handleClick}>
      {isClick ? state: '送信' }
    </button>
  )
}

export default Button