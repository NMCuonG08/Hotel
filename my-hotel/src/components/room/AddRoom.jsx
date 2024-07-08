import { useState } from 'react'
import { addRoom } from '../utils/APIFunction'
import RoomTypeSelector from '../common/RoomTypeSecletor'
import {Link} from 'react-router-dom'
const AddRoom = () => {
    const[newRoom, setNewRoom] = useState({ 
        photo : null,
        RoomType : "",
        Price : ""
    })

    const[ImagePreview, SetImagePreview] = useState("")
    const[Success, SetSucess] = useState("")
    const[errorMessage, SetErrorMessage]  = useState("")

  const handleRoomInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "Price") {
        if (!isNaN(value)) {
            value = parseInt(value); 
        } else {
            value = ""; 
        }
    }
    setNewRoom({ ...newRoom, [name]: value });
};

  
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0]
        setNewRoom({...newRoom,photo:selectedImage})
        SetImagePreview(URL.createObjectURL(selectedImage))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
                const success = await addRoom(newRoom.photo, newRoom.RoomType, newRoom.Price)
                if (success !== undefined) {
                    SetSucess("A new room was added to the database")
                    setNewRoom({photo: null, RoomType : "", Price : ""})
                    SetImagePreview("")
                    SetErrorMessage("")
                }
                else {
                    SetErrorMessage("Error Adding room")
                }
        }
        catch(e) {
            SetErrorMessage(e.message)
        }
    }
    return (
        <>
        <section className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="addhotel" >
                    <h2 className='mt-5 mb-2'>Add a new Room</h2> 
                    {Success &&  (
                        <div className="alert alert-success fade show  " >{Success}</div>
                    )}
                    {errorMessage &&  (
                        <div className="alert alert-danger fade show  " >{errorMessage}</div>
                    )}
                    <form onSubmit ={handleSubmit}>
                    <div className="mb-3 "> 
                        <label htmlFor='RoomType' className="form-label"> 
                        </label>
                        <div className="">
                            <RoomTypeSelector  handleRoomInputChange={handleRoomInputChange} newRoom={newRoom} />   
                        </div>
                    </div>
                    <div className="mb-3 d-flex align-items-center"> 
                        <label htmlFor="Price" className="form-label" style={{width:'110px'}}> 
                            Room Price:
                        </label>
                        <input className='form-control' required id="Price" type='number' name="Price" value={newRoom.Price} onChange={handleRoomInputChange} />
                    </div>
                    <div className="mb-3 d-flex align-items-center"> 
                        <label htmlFor="photo" className="form-label" style={{width:'110px'}}> 
                            Room Image:
                        </label>
                        <input className='form-control' id='photo' type='file' name='photo' onChange={handleImageChange}/> 
                        {ImagePreview && (
                            <img src={ImagePreview} alt="Preview Image" style={{maxWidth: "400px", maxHeight: "400px"}} className="mb-3"></img>
                        )}
                    </div>
                    <div className="d-grid d-md-flex mt-2">
                        <Link to={"/existing-room"} className="btn btn-outline-info ml-5" >Back</Link>
                        <button className="btn btn-outline-primary ml-5"> Save Room</button>
                    </div>
                </form>

                </div>

            </div>


        </section>
        
        </>


    )
        

        

    
}

export default AddRoom