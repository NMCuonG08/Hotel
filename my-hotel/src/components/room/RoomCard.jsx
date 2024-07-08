import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RoomCard = ({ room }) => {
  return (
    <Col key={room.id} className='mb-4' xs={12}>
      <Card>
        <Card.Body className='d-flex flex-wrap align-items-center'>
          <div className='flex-shrink-0 mr-3 mb-3 mb-md-0'>\
            <Link to={`/book-room/${room.id}`} className="btn btn-success btn-sm" >
              <Card.Img
                variant='top'
                src={`data:image/png;base64, ${room.photo}`}
                alt='Room Photo'
                style={{ width: '100%', height: 'auto', maxWidth: '200px' }}
              />
            </Link> 
          </div>
          <div className='flex-grow-1 ml-1 px-5'>
            <Card.Title>{room.roomType}</Card.Title>
            <Card.Title>{` ${room.price} $/ night`}</Card.Title>
            <Card.Text>Some room information goes here for the guest to read through</Card.Text>
          </div>
          <div className="flex-shrink-0 mt-3">
            <Link to={`/book-room/${room.id}`} className="btn btn-success btn-sm" >Book Now</Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default RoomCard
