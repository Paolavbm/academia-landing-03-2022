import React from 'react'
import {DivHeader, Divlink, H6} from "../styles/styled"
import { Link } from 'react-router-dom'
import "../styles/styles.css"
const Header = () => {
  return (
    <DivHeader>
<img src="https://res.cloudinary.com/paolavbm/image/upload/v1646506925/reto1%20spring3/logo_opjtin.svg" width={100} alt=""/>
<Divlink>
<H6 className='hov'>Features</H6>
<H6 className='hov'>Team</H6>
<h6 className='hov'>Sign In</h6>
</Divlink>
    </DivHeader>
  )
}

export default Header