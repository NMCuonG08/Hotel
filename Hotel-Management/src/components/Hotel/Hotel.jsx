import React, { useEffect, useState } from 'react'
import { filterHotels, getAllHotel } from '../../utils/APIFunctions'
import HotelCard from './HotelCard'
import HotelPanigater from './HotelPanigater'
import { Col, Container, Row } from 'react-bootstrap'
import ModelHotel from '../Modal/ModelHotel'
import Header from '../../../../my-hotel/src/components/common/Header'
import CreateLoading from '../layout/CreateLoading'
import Finding from '../HomePage/Finding'
import Fitler from './Fitler/Fitler'
import { useLocation } from 'react-router-dom';
const Hotel = () => {

    const [finding, setFinding] = useState({
        location : "",
        guest : 1,
        selectedDate : new Date(),
        selectedNextDate : new Date() 
    })
    const location = useLocation();
    const { state } = location;
  
    useEffect(() => {
        if (state) {
          const { location: foundLocation, guest, selectedDate, selectedNextDate } = state;
          setFinding({
            ...finding,
            location: foundLocation,
            guest: guest,
            selectedDate: selectedDate,
            selectedNextDate: selectedNextDate
          });
        }
      }, [state]);

    const [data, setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const[currentPage,setCurrentPage] = useState(1)
    const[hotelPerPage] = useState(5)
    const [error, setError] = useState("")
    useEffect(() => {
        const fetchHotels = async () => {
          setIsLoading(true);
          try {
            const data = await filterHotels(finding.location, finding.selectedDate, finding.selectedNextDate, finding.guest);
            setData(data);
          } catch (error) {
            setError(error.message); 
          } finally {
            setIsLoading(false);
          }
        };
        if (finding.location != '') {
          fetchHotels()
        }
      }, [finding]);

    
    if (isLoading) {
        return <CreateLoading/>;
    }
    if (error) {
        return <div className="text-danger">Error : {error}</div>;
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPage = Math.ceil(data.length / hotelPerPage);

    const renderHotels = () => {
        const startIndex = (currentPage - 1) * hotelPerPage;
        const endIndex = startIndex + hotelPerPage;
        return data
            .slice(startIndex, endIndex)
            .map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />);
    };


  return (
    <>
        <div style={{marginLeft:'100px', marginRight: '200px'}} >
            <br/>
            <Finding res={finding} />
            <Row  className="mt-5" >
                 <Col md={4} className="">   
                    <Fitler/>
                 </Col>
                  <Col md={8} className="d-flex align-items-center justify-content-center">
                  <Row  >{renderHotels()}</Row>
                   
                </Col>
                <HotelPanigater currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange} />   
            </Row>
            <Row>
              
            </Row>
        </div>
    </>
  )
}

export default Hotel