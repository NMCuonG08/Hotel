import React, { useEffect, useState } from 'react';
import { getAllRooms } from '../utils/APIFunction';
import RoomCard from './RoomCard';
import { Row, Col, Container } from 'react-bootstrap';
import RoomFliler from '../common/RoomFliler';
import RoomPaninator from '../common/RoomPaninator';

const Room = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [roomsPerPage] = useState(6);

    useEffect(() => {
        setIsLoading(true);
        getAllRooms()
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading .........</div>;
    }
    if (error) {
        return <div className="text-danger">Error : {error}</div>;
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPage = Math.ceil(data.length / roomsPerPage);

    const renderRooms = () => {
        const startIndex = (currentPage - 1) * roomsPerPage;
        const endIndex = startIndex + roomsPerPage;
        return data
            .slice(startIndex, endIndex)
            .map((room) => <RoomCard key={room.id} room={room} />);
    };

    return (
        <Container>
            <Row>
                <Col md={6} className="mb-3 mb-md-0">
                    <RoomFliler data={data} setFilteredDates={setData} />
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-end">
                    <RoomPaninator currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange} />
                </Col>
               
            </Row>
            <Row>{renderRooms()}</Row>
            <Row>
                <Col md={6} className="d-flex align-items-center justify-content-end">
                    <RoomPaninator currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange} />
                </Col>
            </Row>
        </Container>
    );
};

export default Room;
