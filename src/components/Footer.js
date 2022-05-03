import React from 'react'
import { DivFooter, ImgLogo, DivColumnFoo, DivFlex, DivContCol, DivCols, ImgRedes} from "../styles/styled"
import Correo from './Correo'

const Footer = () => {
    return (
        <DivFooter>
      <Correo/>
            < ImgLogo src="https://res.cloudinary.com/paolavbm/image/upload/v1646506925/reto1%20spring3/logo_opjtin.svg" width={100} alt="" />

            <DivContCol>

                <DivColumnFoo>
                    <div>
                        <img src='https://res.cloudinary.com/paolavbm/image/upload/v1646506968/reto1%20spring3/icon-location_nod261.svg' width={10} alt='' />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua</p>
                </DivColumnFoo>


                <DivCols>
                    <DivFlex >
                        <div>
                        <img src='https://res.cloudinary.com/paolavbm/image/upload/v1646506968/reto1%20spring3/icon-phone_unlqo4.svg' alt='' />
                        </div>
                    <p> +1-543-123-4567</p>
                    </DivFlex >
                    <DivFlex>
                        <div>
                        <img src='https://res.cloudinary.com/paolavbm/image/upload/v1646506968/reto1%20spring3/icon-email_wm7dym.svg' alt='' />
                        </div>
                        <p>example@fylo.com</p>
                    </DivFlex>
                </DivCols>


                <DivCols>
                <h6>About us</h6>
                <h6>Job</h6>
                <h6>Press</h6>
                <h6>Blog</h6>
                </DivCols>


                <DivCols>
                <h6>Contact us</h6>
                <h6>Terms</h6>
                <h6>Privacy</h6>  
                </DivCols>


                <DivCols className='redes'>
                    <ImgRedes  width={30} src='https://res.cloudinary.com/paolavbm/image/upload/v1646545875/reto1%20spring3/instagram_2_nif1sg.png' alt=''/>
                    <ImgRedes width={30}  src='https://res.cloudinary.com/paolavbm/image/upload/v1646545874/reto1%20spring3/instagram_1_kcorp9.png' alt=''/>
                    <ImgRedes width={30}  src='https://res.cloudinary.com/paolavbm/image/upload/v1646545877/reto1%20spring3/instagram_3_finx7f.png' alt=''/>
                </DivCols>

            </DivContCol>
        </DivFooter>
    )
}


export default Footer