import React, { useEffect, useState } from 'react'
import { Card, Carousel, Col, Row } from 'react-bootstrap'
import { getAllTypeOfHotel } from '../../utils/APIFunctions'
import { Link } from 'react-router-dom'

const ChoiceTypeVacation = () => {
  const [type, setType ] = useState([])

  useEffect(() => {
    const  getAll = async () =>  {
        try {
            const res = await getAllTypeOfHotel()
            setType(res)
        }
        catch(err) {
          throw new Error(err.message)
        }
    }
    getAll()
  } , [])





  return (
    <div className="mb-5">
        <h3 className='mt-5' > Tìm cho mình nơi lưu trú yêu thích tiếp theo</h3>
        <div  className='mt-5'>                
            <Carousel indicators={false}>
    {[...Array(Math.ceil(type.length / 4))].map((_, index) => {
        const start = index * 4;
        const end = start + 4;
        const items = type.slice(start, end);

        return (
            <Carousel.Item key={index}>
                <Row>
                    {items.map((image, imgIndex) => (
                        <Col className="" key={imgIndex} md={3} >
                            <Card className="p-0 mt-5 mb-5 border rounded-3" style={{ border: 'none' }}>
                               <Link to = {"/"} >
                                <Card.Img
                                      variant="top"
                                      src={`data:image/png;base64,${image.image}`}
                                      alt="Room Photo"
                                      className="w-100"
                                      style={{ height: "200px", width: 'auto', objectFit: 'cover', cursor: 'pointer' }} 
                                  />
                               </Link>
                               <div className="image-overlay">
                                  <Card.Text className="text-white position-absolute bottom-0 start-0 p-2" style={{fontSize : "20px"}} >{image.typeName}</Card.Text>
                              </div>
                            </Card>
                        </Col>
                    ))}
                   
                </Row>
            </Carousel.Item>
        );
    })}
</Carousel>
            </div>
    </div>
  )
}

export default ChoiceTypeVacation