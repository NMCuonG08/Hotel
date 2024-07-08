import React, { useState } from 'react'

const AddQuestion = () => {
  const[question, setQuestion] = useState("")
  const[questionType, setQuestionType] = useState("single")
  const[choice, setChoice] = useState([""])
  const [correctAnswer, setCorrectAnswer] = useState([""])


  return (
    <div>AddQuestion</div>
  )
}

export default AddQuestion