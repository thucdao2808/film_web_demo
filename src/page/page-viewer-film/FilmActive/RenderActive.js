import React from 'react'
import Header from '../../../components/header/Header'
import Footer from "../../../../src/components/footer/Footer"
import Active from './Active'
import { Link } from 'react-router-dom'
const RenderActive = () => {
    return (
        <Link to='/active'>
            <Header/>
            <Active/>
            <Footer/>
        </Link>
    )
}

export default RenderActive