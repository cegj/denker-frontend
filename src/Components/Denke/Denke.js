import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../Header'
import DenkePage from './DenkePage'

const Denke = () => {
    return (
      <>
        <Header />
        <div className="mainContainer">
        <Routes>
          <Route path="/:id" element={<DenkePage />} />
        </Routes>
        </div>
      </>
    )
}

export default Denke