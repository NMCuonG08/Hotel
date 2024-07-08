import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRating from '../Hotel/StarRating';
import { FaLocationDot } from 'react-icons/fa6';
import { getHotelImages, getRoomImagesByRoomID } from '../../utils/APIFunctions';
import { IoBed } from "react-icons/io5";
import { GrStatusInfo } from "react-icons/gr";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoPricetags } from "react-icons/io5";
const RoomCard = ({room}) => {
    const [images, setImages] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await getRoomImagesByRoomID(room.id);
                setImages(res);
            } catch (error) {
                setErrorMessage(error.message);
            }
        };
        fetchImages();
    }, [room.id]);


    return (
        <Col key={room.id} className='mb-4' sx={12}    >
            <Link  to={`/booking/${room.id}`}>
            <Card style={{width:'1000px'}}  >
                <Card.Body className='d-flex flex-wrap align-items-center' >
                    <div className='flex-shrink-0 mr-1 mb-1 mb-md-0'style={{ width: '35%'}} >
                        <Link to={`/room/${room.id}/images`} className=''>
                            {images.length > 0 ? (
                                <Card.Img
                                    variant='top'
                                    src={`data:image/png;base64, ${images[0]}`}
                                    style={{ width: '100%', height: 'auto', maxWidth: '300px', maxHeight:'150px' }}
                                />
                            ) : (
                                <div>No Image Available</div>
                            )}
                           
                        </Link>
                    </div>
                    <div style={{ width: '50%'}}>
                        <div className='flex-grow-1 ml-1 px-5'>
                            <Card.Title> {room.roomType}</Card.Title>
                            <Card.Title> <IoBed/>  {room.roomBed}</Card.Title>
                            <Card.Title><GrStatusInfo/>{room.status}</Card.Title>
                            <Card.Title>{room.roomName}</Card.Title>
                            <Card.Title>{room.Clients}</Card.Title>
                        </div>                     
                    </div>
                    <div className="position-absolute" style={{ top: 0, right: 0, marginTop: '10px', marginRight: '10px' }}>
                            <Link to={`/room/${room.id}/feedback`} className="btn btn-success btn-sm">{room.price}</Link>
                    </div>
                    <div className="position-absolute" style={{ bottom: 0, right: 0, marginBottom: '10px', marginRight: '10px' }}>
                            
                            <Card.Text>  <IoPricetags color="yellow" /> Cost per night: {room.price + " $"}  </Card.Text>
                    </div>       
                </Card.Body>
            </Card>
            </Link>
        </Col>
    );

}

export default RoomCard