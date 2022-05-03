import "../styles/styles.css"
import {Div} from "../styles/styled"
import Header  from "../components/Header";
import fondo from "../assets/images/bg-curvy-desktop.svg"
import fondo2 from "../assets/images/bg-curvy-mobile.svg"
import {FondoMon} from "../styles/styled"
import Main from "../components/Main";
import Cualidades from "../components/Cualidades";
import StayProductive from "../components/StayProductive";
import Testimonios from "../components/Testimonios";
import Footer from "../components/Footer";
import Correo from "../components/Correo";

function App() {
  return (
    <Div className="App">
    <Header/>
   <Main/>
  <Cualidades/>
  <StayProductive/>
  <Testimonios/>
 
  <Footer/>
    </Div>
  );
}

export default App;
