import axios from "axios"


export const API = axios.create({
    baseURL: "http://localhost:8080/api/quizzes"
})

export const createQuestion = async(quiz) => {
    try{
        const response = await API.post("/create-new-question", quiz)
        return response.data
    }
    catch(error){
        console.error(error)
    }
}

export const getAllQuestions = async() => {
    try{
        const response = await API.get("/all-questions")
        return response.data
    }
    catch(erorr) {
        console.error(erorr)
        return []
    }
}

export const fetchQuizForUser = async(numbers, subject) => {
    try {
        const response = await API.get(`/quiz/fetch-question-for-user?numOfQuestions=${numbers}&subject=${subject}`)
        return response.data
    }
    catch(error){
        console.error(error)
        return []
    }
}

export const getSubject = async() => {
    try {
        const response = await API.get(`/subjects`)
        return response.data
    }
    catch(error){
        console.error(error)
    }
}

export const deleteQuestion = async(id) => {
    try {
        const response = await API.delete(`/question/${id}/delete`)
        return response.data
    }
    catch(error){
        console.error(error)
    }
}

export const updateQuestion = async(id, question) => {
    try {
        const response = await API.put(`/question/${id}/update`, question)
        return response.data

    }
    catch(error){
        console.error(error)
    }
}


export const getQuestionByID = async(id) => {
    try {
        const response = await API.get(`/question/${id}`)
        return response.data
    }
    catch(error){
        console.error(error)
    }
}

