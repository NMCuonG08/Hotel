import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRoomByID, updateRoom } from '../utils/APIFunction'
import {Link} from 'react-router-dom'
const EditRoom = () => {
  const[room, setRoom] = useState({ 
    photo : null,
    RoomType : "",
    Price : ""
})

  const[ImagePreview, SetImagePreview] = useState("")
  const[Success, SetSucess] = useState("")
  const[errorMessage, SetErrorMessage]  = useState("")

  const {roomID} = useParams()

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]
    setRoom({...room,photo:selectedImage})
    SetImagePreview(URL.createObjectURL(selectedImage))
  }

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setRoom({...room, [name]: value})
  }

  useEffect(() => {
    const fetchRoom = async () =>{
      try {
        const roomData = await getRoomByID(roomID)
        setRoom(roomData)
        SetImagePreview(roomData.photo)
      }
      catch (error) {
          console.error(error)
      }
    }

    fetchRoom()
  }, [roomID])

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await updateRoom(roomID,room)
      if (response.status === 200) {
        SetSucess("Updated successfully!")
        const updateRoomData = await getRoomByID(roomID)
        setRoom(updateRoomData)
        SetImagePreview(updateRoomData.photo)
        SetErrorMessage("");
      }
      else {
        SetErrorMessage("Error Updated room")
      }
    }
    catch(error) {
      console.log(error)
      SetErrorMessage(error.Message)
    }
    
  }

  return (
    <div className='container mt-5 mb-5'>
        <h3 className='text-center mt-5 mb-5'> Edit Room</h3>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-lg-6'>
          {Success &&  (
           <div className="alert alert-success fade show  " >{Success}</div>
          )}
           {errorMessage &&  (
          <div className="alert alert-danger fade show  " >{errorMessage}</div>
          )}
          <form onSubmit ={handleSubmit} className="d-flex justify-content-center w-100">
            <div className="mb-3"> 
                <label htmlFor='roomType' className="form-label"> 
                    Room Type:
                </label>
                <input type='text' className='form-control' id='roomType' name='roomType' placeholder='Room Type' value={room.roomType} onChange={handleInputChange}></input>
            </div>
            <div className="mb-3"> 
                <label htmlFor="price" className="form-label"> 
                    Room Price:
                </label>
                <input className='form-control'  id="price" type='number' name="price" value={room.price} onChange={handleInputChange}/>
            </div>
            <div className="mb-3"> 
                <label htmlFor="photo" className="form-label"> 
                    Room Image:
                </label>
                <input className='form-control' id='photo' type='file' name='photo' onChange={handleImageChange}/> 
                {ImagePreview && (
                    <img src={`data:image/jpeg;base64,${ImagePreview}`} alt="Preview Image" style={{maxWidth: "400px", maxHeight: "400px"}} className="mb-3"></img>
                )}
            </div>
            <div className="d-grid gap-2 d-md-flex mt-2">
                <Link to={"/existing-room"} className="btn btn-outline-info ml-5" >Back</Link>
                <button className="btn btn-outline-warning ml-5" type="submit"> Edit Room</button>
                
            </div>      
        </form>
          </div>
        </div>

    </div>
  )
}

export default EditRoom