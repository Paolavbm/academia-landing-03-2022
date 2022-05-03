import React from 'react'
import {StayProductiveDiv, TextoProductive, ImgProductive, H2, H6Prod} from "../styles/styled"
import flecha from "../assets/images/flecha-correcta.png"
const StayProductive = () => {
  return (
      <div>
    <StayProductiveDiv>
    <ImgProductive   src='https://res.cloudinary.com/paolavbm/image/upload/v1646506927/reto1%20spring3/illustration-stay-productive_arkvsg.png' alt=''/>
   <TextoProductive>
    <H2>Stay productive, wherever you are</H2>
    <p> Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs.

  Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required.</p>
  <H6Prod> <u>See how Fylo works <img src={flecha} width={20} alt=''/></u></H6Prod>
  </TextoProductive>

  
    </StayProductiveDiv>

    
    </div>
  )
}

export default StayProductive