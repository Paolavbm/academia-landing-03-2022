import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import {DivCorreo, Input} from "../styles/styled"
import { useFormik } from 'formik';

const Correo = () => {

  const [ validacion, setValidacion] = useState("hidden");

  const validacionCorreo = (email) =>{
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const valid = emailRegex.test(email);

    if (!valid){
      setValidacion("alert");

    } else{
      setValidacion("hidden")
    }
  
  
  }

  const formik = useFormik({
    initialValues:{
      email: "",
    },

    onSubmit: (data) =>{
      validacionCorreo(data.email);
     
    }
  })

  return (
    <DivCorreo>


<h2>Get early acces today</h2>
<p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you.
</p>
 <form onSubmit={formik.handleSubmit}>
<Input type="text" name='email' id='email'  placeholder='email@example.com' onChange={formik.handleChange}/>
<Button type="submit" className='ash'>Get Started for free</Button> 

<div className='yaplease'>
  <span className={validacion}>Please enter a valid email address</span>
</div>
</form>
    </DivCorreo>
  )
}

export default Correo