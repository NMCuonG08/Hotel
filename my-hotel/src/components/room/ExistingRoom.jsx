import  { useEffect, useState } from 'react'
import { deleteRoom,getAllRooms } from '../utils/APIFunction'
import RoomFilter from '../common/RoomFliler'
import RoomPaninator from '../common/RoomPaninator'
import { Col } from 'react-bootstrap'
import {FaEdit, FaTrashAlt,FaEye,FaPlus} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const ExistingRoom = () => {
    const[rooms,setRooms] = useState([])
    const[currentPage, setCurrentPage] = useState(1)
    const[roomperPage ]= useState(8)
    const[isLoading,setIsLoading] = useState(false)
    const[filteredRooms, setFilteredRooms] = useState([])
    const[selectRoomType, setSelectRoomType] = useState("")
    const[successMessage, setSuccessMessage] = useState("")
    const[errorMessage, setErrorMessage] = useState("")
 
    useEffect(()=> {
      fetchRooms()
    },[])

    const fetchRooms = async () => {
      setIsLoading(true)
      try {
        const result = await getAllRooms()
        setRooms(result)
        setIsLoading(false)
      }
      catch (error) {
        setErrorMessage(error.message)
      }
    }

    const handlePaginationClick = (pageNumber) => {
      setCurrentPage(pageNumber)
    }

    const handleDelele = async (roomID) => {
      try {
          const resuilt = await deleteRoom(roomID)
          if (resuilt=== "") {
            setSuccessMessage(`Room No ${roomID} was delete`)
            fetchRooms()
          }else {
            console.log(`Error deleting room : ${resuilt.message}`)
          }

      }
      catch(error) {
        setErrorMessage(error.message)
      }
      setTimeout(() => {
        setErrorMessage("")
        setSuccessMessage("")
      }, 3000);

    }

    useEffect(() => {
      if (selectRoomType === "") {
        setFilteredRooms(rooms)
      }else {
        const filtered = rooms.filter((room)=> room.roomType === selectRoomType)
        setFilteredRooms(filtered)
      }
      setCurrentPage(1)
    }, [rooms, selectRoomType])

    const calculateTotalPages = (filteredRooms, roomperPage, rooms) =>  {
      const totalRooms = filteredRooms.length > 0 ? filteredRooms.length : rooms.length
      return Math.ceil(totalRooms / roomperPage)
    }

    const indexOfLastRoom = currentPage * roomperPage
    const indextOfFirstRoom  = indexOfLastRoom - roomperPage
    const currentRooms= filteredRooms.slice(indextOfFirstRoom, indexOfLastRoom)

  return (
    <>
      {isLoading ? (
        <p> Loading existing room</p>
      ) : (
        <>
        <section className="mt-5 mb-5 ">
            <div className=" mb-3 mt-5 container-fluid d-flex justify-content-between">
              <h2>Existing Rooms</h2>

              <Link to ={"/add-room"}>
                <FaPlus/> Add Room 
              </Link>

            </div >
            <Col md={6} className="mb-3 mb-md-0">
              <RoomFilter  data={rooms} setFilteredDates={setFilteredRooms} />
            </Col>

            <table className="table table-bordered table-hover  " >
              <thead>
                <tr className="text-center">
                  <th>ID   </th>
                  <th>RoomType   </th>
                  <th>RoomPrice   </th>
                  <th>Actions   </th>
                </tr>
              </thead>
              <tbody>
              {currentRooms.map((room) => (
                    <tr key={room.id} className="text-center">
                      <td>{room.id}</td>
                      <td>{room.roomType}</td>
                      <td>{room.price}</td>
                      <td className='grap-2'>
                        <Link to={`/edit-room/${room.id}`}>
                          <span className="btn btn-info btn-sm">
                            <FaEye/>

                          </span>
                          <span className="btn btn-danger btn-sm">
                            <FaEdit/>
                          </span>
                          </Link>
                        <button className='btn btn-danger btn-sm ' onClick={() => handleDelele(room.id)}
                        >
                          <FaTrashAlt/>
                          </button>
                      </td>
                    </tr>
                  ))}

              </tbody>
            </table>
                  <RoomPaninator 
                  currentPage={currentPage}
                  totalPages={calculateTotalPages(filteredRooms,roomperPage, rooms)}
                  onPageChange={handlePaginationClick} />
        </section>

        </>

      )}
    
    </>
  )
}

export default ExistingRoom