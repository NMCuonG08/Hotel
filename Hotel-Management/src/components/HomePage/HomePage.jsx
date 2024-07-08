import React, { useState } from 'react'
import Finding from './Finding'
import ChoiceTypeVacation from './ChoiceTypeVacation'
import OfferCard from './OfferCard'
import Title from './Title'
const HomePage = () => {


  return (
    
    <>
        <div className="container mt-4" style={{ marginLeft: "95px" }}>  
          <h2> Bạn muốn đi đâu ?</h2>
          <Finding  />
          <Title/>
         <ChoiceTypeVacation/>
         <OfferCard/>
         </div>
    </>
  )
}

export default HomePage