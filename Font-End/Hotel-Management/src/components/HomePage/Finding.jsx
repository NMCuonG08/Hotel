import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CreateCalendar from './Calendar';
import ChoiceLocation from './ChoiceLocation';
import ChoiceGuest from './ChoiceGuest';
import {  useNavigate } from 'react-router-dom'

const Finding = ({res}) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date()); 
    const [selectedNextDate, setSelectedNextDate] = useState(new Date());
    const modalRef = useRef(null);  
    const modalRefLocation = useRef(null);
    const modalRefGuest = useRef(null);
    const [showChoiceGuest, setShowChoiceGuest] = useState(false)
    const [location, setLocation] = useState("");
    const handleClickChoiceCalendar = () => {
        setShowCalendar(true);
    }
    const [guest, setGuest] = useState(1)
    const [showChoiceLocation, setShowChoiceLocation] = useState(false)
    const handleClickChoiceLocation = () => {
        setShowChoiceLocation(true);
    }

    const navigate = useNavigate()

    useEffect(()=> {
        const setData = () => {
            setLocation(res.location)
            setSelectedDate(res.selectedDate)
            setSelectedNextDate(res.selectedNextDate)
            setGuest(res.guest)
        }
       if (res != undefined) {
         setData()
       }
    }, [res])


    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRefLocation.current && !modalRefLocation.current.contains(event.target)) {
                setShowChoiceLocation(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
     
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRefGuest.current && !modalRefGuest.current.contains(event.target)) {
                setShowChoiceGuest(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const handleDateChange = (date) => {
        setSelectedDate(date); 
    }
    const handleDateOtherChange = (date) => {
        setSelectedNextDate(date); 
    }

    const handleChoiceLocation = (choice) => {
        setLocation(choice)
    }
    const handleChoiceGuest = () => {
        setShowChoiceGuest(true)
    }
    const handleNumberOfGuest = (guest) => {
        setGuest(guest)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if(location.trim() != '' && guest != null && selectedDate != null && selectedNextDate != null) {
            navigate(`/Hotel-Search?location=${encodeURIComponent(location)}&guest=${guest}&selectedDate=${selectedDate}&selectedNextDate=${selectedNextDate} `
                , {state : { location, guest, selectedDate, selectedNextDate}})
                window.location.reload();
        }
        else {
            alert("error")
        }
    }


    return (
        <>
            <div className="container-fluid" >
                
                <Row style={{ height: "45px"}}>
                    <Col md={3} className="d-flex justify-content-start">
                        <button className="btn btn-none border border-1 border-dark rounded-2 w-100 h-100 d-flex justify-content-start "
                        onClick={handleClickChoiceLocation}
                        >
                            <div >
                                <i className="bi bi-geo-alt-fill mt-1 me-2"/> Điểm đến: {location}
                               
                            </div>
                        </button>
                    </Col>
                    <Col md={4}>
                        <button className="btn btn-none border border-1 border-dark rounded-2 w-100 h-100 d-flex justify-content-start"
                            onClick={handleClickChoiceCalendar}
                        >
                            <div>
                                 <i className="bi bi-calendar-check mt-1 me-2"/> {selectedDate.toLocaleDateString()}  - {selectedNextDate.toLocaleDateString()}
                            </div>
                        </button>
                    </Col>
                    <Col md={4}>
                        <button className="btn btn-none border border-1 border-dark rounded-2 w-100 h-100 d-flex justify-content-start" onClick={handleChoiceGuest}>
                            <div className="mt-1 me-2">
                                <i className="bi bi-people-fill " /> Khách : {guest}
                            </div>
                        </button>
                    </Col>
                    <Col md={1}>
                        <button className="btn btn-primary border border-1 border-dark rounded-5 w-100 h-100 " onClick={handleSearch} >Search</button>
                    </Col>
                </Row>
                <Row style={{ position: 'absolute'}} >
                    {showChoiceLocation && (
                        <div ref={modalRefLocation} className="" style={{ width: "330px" }}>
                            <ChoiceLocation  location={handleChoiceLocation}  />
                        </div>
                    )}
                </Row>
                <Row style={{ position: 'absolute'}} >
                    {showCalendar && (
                        <div ref={modalRef} className="" style={{ width: "450px", marginLeft: "320px" }}>
                            <CreateCalendar   day={selectedDate} nextday={selectedNextDate} onDateChange={handleDateChange} onDateOtherChange = {handleDateOtherChange} />
                        </div>
                    )}
                </Row>
                <Row style={{ position: 'absolute'}} >
                    {showChoiceGuest && (
                        <div ref={modalRefGuest} className="" style={{ width: "440px", marginLeft: "770px" }}>
                        <ChoiceGuest  numberGuest={guest} setNumberGuest={handleNumberOfGuest} />
                         </div>
                    )}
                </Row>
                <div></div>
            </div>
        </>
    );
}

export default Finding;
