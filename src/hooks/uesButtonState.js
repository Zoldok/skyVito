import { useState } from 'react'

const useButtonState = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const updateButtonState = (...args) => {
    const areAllFieldsFilled = args.every((field) => Boolean(field))
    setIsButtonDisabled(!areAllFieldsFilled)
  }

  return { isButtonDisabled, updateButtonState }
}

export default useButtonState