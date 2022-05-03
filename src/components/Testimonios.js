import React from 'react'
import {TestimonioDiv, TestimonioInf, ImgTestimonio, H6Test, PTest, ContTestimonios, ImgComillas} from "../styles/styled"
import "../styles/styles.css"
const Testimonios = () => {
    return (
        <ContTestimonios>


            <TestimonioDiv>
            <ImgComillas width={40} src='https://res.cloudinary.com/paolavbm/image/upload/v1646506970/reto1%20spring3/bg-quotes_pgtanq.png'/>
                <p className='fylo'>

                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.

                </p>
                <TestimonioInf>
                  
                    <ImgTestimonio src="https://res.cloudinary.com/paolavbm/image/upload/v1646506923/reto1%20spring3/profile-1_qfsp1f.jpg" alt='' width={30} />
                <div>
                <H6Test>Satish Patel</H6Test>
                <PTest> Founder & CEO, Huddle</PTest>
                </div>
                </TestimonioInf>
            </TestimonioDiv>
            

            <TestimonioDiv>
               
                <p>

                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.

                </p>
                <TestimonioInf>
                  
                    <ImgTestimonio src="https://res.cloudinary.com/paolavbm/image/upload/v1646506922/reto1%20spring3/profile-2_vklcva.jpg" alt='' width={30} />
                <div>
                <H6Test>Bruce McKenzie</H6Test>
                <PTest> Founder & CEO, Huddle</PTest>
                </div>
                </TestimonioInf>
            </TestimonioDiv>

            <TestimonioDiv>
                <p>

                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.

                </p>
                <TestimonioInf>
                  
                    <ImgTestimonio src="https://res.cloudinary.com/paolavbm/image/upload/v1646506919/reto1%20spring3/profile-3_ljyr3o.jpg" alt='' width={30} />
                <div>
                <H6Test>Iva Boyd</H6Test>
                <PTest> Founder & CEO, Huddle</PTest>
                </div>
                </TestimonioInf>
            </TestimonioDiv>
        </ContTestimonios>
    )
}

export default Testimonios