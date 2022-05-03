import { Button } from 'react-bootstrap'
import React from 'react'
import {Encabezado, DivMain} from "../styles/styled"
import "../styles/styles.css"
const Main = () => {
  return (
      
    <DivMain>
    <div>
  <img className='fotoMain' src='https://res.cloudinary.com/paolavbm/image/upload/v1646506959/reto1%20spring3/illustration-intro_vkfuwy.png' alt=''/>
    <Encabezado>All your files in one secure location, accessible anywhere</Encabezado>
    <p>  Fylo stores all your most important files in one secure location. Access them wherever 
  you need, share and collaborate with friends family, and co-workers.</p>

  <Button className='Boton-Started'>Get Started</Button>
    </div>
    </DivMain>
    
  )
}

export default Main