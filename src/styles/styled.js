import styled from 'styled-components'

export const Div = styled.div`
background-color:hsl(217, 28%, 15%);
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Raleway:wght@300&family=Rubik:ital,wght@0,500;1,400&display=swap');
font-family: 'Raleway', sans-serif;
text-align: center ;
height: 200vh;
width: 100% ;

`

export const DivHeader = styled.div`
display: flex ;
padding: 1em;

`


export const Divlink = styled.div`
display: flex ;
position: absolute;
right: 1.5em ;
`
export const H6 = styled.h6`
margin-right: 1em;
`

export const FondoMon = styled.img`
width: 100%;
height: 80%;
margin-top: 5em ;
position: absolute;
`

export const Encabezado = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&family=Raleway:wght@200&family=Rubik:ital,wght@0,300;0,600;1,300&display=swap');
font-family: 'Rubik', sans-serif;
font-size: 24px ;
margin-top: 1.5em;
`
export const DivMain= styled.div`
width: 85%;
margin: auto;

p{
   width: 40%;
margin: auto;
margin-top: 1em;
margin-bottom: 1em ;
@media (max-width: 600px) {
    width: 100%;
    
   
}
}
h1{
width: 40%;
margin: auto;
@media (max-width: 600px) {
    width: 100%;
    
   

} 
}

`

export const Qualities= styled.div`
display: flex ;
margin-top: 1.5em ;
@media (max-width: 600px) {
 flex-direction: column ;
}
`

export const SubQualities= styled.div`
width: 30%;
margin: auto;
margin-top: 1.5em;
@media (max-width: 600px) {
    width: 50%;
}

`

export const H5= styled.h5`
font-weight: bold;
margin-top: 1.5em;
`

export const StayProductiveDiv= styled.div`
display: flex;
@media (max-width: 600px) {
   flex-direction: column;
   
}

`

export const TextoProductive= styled.div`
width:  30%;
margin-top: 10em ;
@media (max-width: 600px) {
   margin: auto ;
   width:  83%;
}

`
export const ImgProductive = styled.img`
margin-left: 10% ;
`
export const H2 = styled.h2`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&family=Raleway:wght@200&family=Rubik:ital,wght@0,300;0,600;1,300&display=swap');
font-family: 'Rubik', sans-serif;
font-size: 32px ;
margin-top: 1.5em;
`
export const H6Prod = styled.h6`
&:hover {
  color: hsl(176, 68%, 64%);
  cursor: pointer ;
    }

`
export const ContTestimonios = styled.div`
display: flex ;

justify-content: center;
@media (max-width: 600px) {
   flex-direction: column;
   margin-bottom: 15em;
   
}
`
export const TestimonioDiv = styled.div`
width: 25%;
background-color: hsl(219, 30%, 18%);
padding: 1em;
border-radius: 7px;
text-align: left;
font-size: 15px;
margin: 5em 1em 20em 1em;
box-shadow: 8px 6px 8px  #1D2832;

@media (max-width: 600px) {
    width: 80%;
    margin: auto ;
    margin-top: 1.5em ;
   
}

`
export const TestimonioInf = styled.div`
display: flex;
text-align: left ;
line-height : 5px;
`

export const ImgTestimonio = styled.img`
border-radius: 100% ;
margin-right: 0.7em;
`
export const H6Test = styled.h6`
font-weight: bold ;
font-size: 12px;
letter-spacing: 2px;
`
export const PTest = styled.p`

font-size: 11px;
`

export const ImgComillas = styled.img`
margin-top: -4em;
`

export const DivFooter = styled.div`
background-color: hsl(216, 53%, 9%) ;
height: 70vh;
padding: 10em 5em 2em 5em;
@media (max-width: 600px) {
   text-align: left ;
height: 70em;
padding: 2em;
}
`

export const ImgLogo = styled.img`

display: block ;
@media (max-width: 600px) {
  margin-top: 8em;
   
}
`

export const DivColumnFoo = styled.div`
display: flex ;
width: 32% ;
margin-top: 3.5em;
margin-right: 2em ;

p{
    margin-left: 1.3em;
    text-align: left ;
}
@media (max-width: 600px) {
   width: 100%;
   }
`
export const  DivFlex = styled.div`
display: flex ;
p{
    margin-left: 1.3em;
    text-align: left ;
}
`

export const  DivContCol = styled.div`
display: flex ;
flex-direction: row ;
@media (max-width: 600px) {
   flex-direction: column;
   
}
`

export const  DivCols = styled.div`
margin-top: 3.5em;
margin-right: 4em ;

h6, img{
    cursor: pointer ;
}
`
export const ImgRedes= styled.img`

margin-right: 0.7em;
`

export const  DivCorreo = styled.div`
width: 70%;
height: 18em ;
background-color: hsl(222, 28%, 15%) ;
margin: auto;
margin-top: -20em;

box-shadow: 8px 6px 8px   hsl(222, 28%, 13%);
border-radius: 6px;
padding: 2em;
@media (max-width: 600px) {
   width: 100%;
   margin-top: -10em;
   height: 23em;
  
}
h2{
   font-weight: bold;
}

p{
   font-size: 14px ;
   width: 60%;
   margin: auto ;
   margin-bottom: 2em;
   margin-top: 1em;
   @media (max-width: 600px) {
   width: 100%;
   margin-top: 1em;
   margin-bottom: 0.2em;
}

}
`

export const Input= styled.input`
width: 50%;
border-radius: 25px;
padding: 0.7em;
margin-right: 2em;
@media(max-width:600px){
width: 100%;
margin-top: 2em;
margin-bottom:1em ;
}
`