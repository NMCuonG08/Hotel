import React, {useState, useEffect}  from 'react'
import "./dashboard.css"
import { getAllHotel } from '../../../utils/APIFunctions'
import HotelCard from '../../Hotel/HotelCard'

const DashBoard = () => {
    const [cards , setCards] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const result = await getAllHotel()
                setCards(result)
            }
            catch(error) {
                console.error(error.message)
            }
        }
        fetchData()
    }, [])


  return (
    <section className="dashboard section">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    {cards && cards.length > 0 && cards.map( card =>  <HotelCard key={card.id} hotel={card} /> )}
                </div>
            </div>
            <div className="col-lg-4">hi</div>
        </div>
    </section>
  )
}

export default DashBoard