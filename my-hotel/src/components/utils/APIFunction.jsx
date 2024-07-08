import axios from 'axios'

export const API = axios.create({
    baseURL : "https://spring-hotel-32vl.onrender.com"
})

export async function addRoom(photo, roomType, Price){
    const formData = new FormData()
    formData.append("photo",photo)
    formData.append("RoomType",roomType)
    formData.append("Price",Price)
    console.log(photo)
    const response = await API.post("/rooms/add/newroom", formData)

    if(response.status === 201) {
        return true
    }else {
        return false
    }
}

export async function getRoomType(){
    try {
        const response = await API.get("/rooms/room/types")
        
        return response.data
    }catch(error){
            throw new Error("Error fetching room type")
    }
}

export async function getAllRooms(){
    try {
            const resuilt = await API.get("/rooms/all-room")
            return resuilt.data
    }
    catch(error) {
        throw new Error("Error fetching rooms")
    }
}

export async function deleteRoom(roomID){
    try {
        const resuilt = await API.delete(`/rooms/delete/room/${roomID}`)
        return resuilt.data
    }
    catch(error) {
        throw new Error(`Error deleting room ${error.message}`)
    }
}

export async function updateRoom(roomID, roomData){
    const formData = new FormData();
    formData.append("roomType", roomData.roomType)
    formData.append("price", roomData.price)
    formData.append("photo", roomData.photo)
    const response = await API.put(`/rooms/update/${roomID}`,formData)
    return response
}
    
export async function getRoomByID(roomID){
    try {
        const resuilt = await API.get(`/rooms/room/${roomID}`)
        return resuilt.data
    }
    catch(error) {
        throw new Error(`Error fetching room ${error.message}`)
    }
}

export async function bookRoom(roomID, booking) {
    try {
        const  response = await API.post(`/bookings/room/${roomID}/booking`, booking)
        return response.data
    }
    catch(error) {
        if(error.response && error.response.data) {
            throw new Error(error.response.data)
        }
        else {
            throw new Error(`Error fetching`)
        }
    }
}

export async function getAllBookings(){
    try {
        const response = await API.get("/bookings/all-booking")
        return response.data
    }
    catch(error){
            throw new Error(`Error fetching booking ${error.message}`)
    }
}

export async function getBookingByConfirmationCode(confirmationCode){
    try {
        const response = await API.get(`/bookings/confirmation/${confirmationCode}`)
        return response.data
    }
    catch(error) {
        if(error.response && error.response.data) {
            throw new Error(error.response.data)
        }
        else {
            throw new Error(`Error finding booking ${error.message}`)
        }
    }
}

export async function cancelBooking(bookingID){
    try {
        const response = await API.delete(`/bookings/booking/${bookingID}/delete`)
        return response.data
    }
    catch(error) {
        
            throw new Error(`Error finding booking ${error.message}`)
        
    }
}


