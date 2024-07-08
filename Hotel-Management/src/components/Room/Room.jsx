import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getRoomsByHotelID } from '../../utils/APIFunctions'
import RoomCard from './RoomCard'
import { Card, Col, Container, Row } from 'react-bootstrap'
import HotelPaningator from '../Hotel/HotelPanigater'
import ModelHotel from '../Modal/ModelHotel'

const Room = () => {
    const [data,setData] = useState([])
    const[isLoading,setIsLoading] = useState(false)
    const[currentPage, setCurrentPage] = useState(1)
    const[roomPerPage, setRoomPerPage] = useState(5)
    const[error, setError] = useState("")

    const {hotelId} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getRoomsByHotelID(hotelId)
            .then((data) => {
                setData(data)
                setIsLoading(false)
            })
            .catch((error) => {
                setError(error)
                setIsLoading(false)
            })
    }, [])


    if (isLoading) {
        return <div>Loading .........</div>;
    }
    if (error) {
        return <div className="text-danger">Error : {error}</div>;
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPage = Math.ceil(data.length / roomPerPage);

    const renderRooms = () => {
        const startIndex = (currentPage - 1) * roomPerPage;
        const endIndex = startIndex + roomPerPage;
        return data
            .slice(startIndex, endIndex)
            .map((room) => <RoomCard key={room.id} room={room} />);
    };


    return (
       <>
        
         <Container>
            
            <Row>{renderRooms()}</Row>
                <Row>
                    <Col md={6} className="d-flex align-items-center justify-content-end">
                        <HotelPaningator currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange} />
                    </Col>
            </Row>
        </Container>
       
       </>
      )
}

export default Room