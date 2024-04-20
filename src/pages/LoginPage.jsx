import React from 'react'
import { Label } from '../components/Labels/Label'
import Input from '../components/Inputs/Input'


const LoginPage = () => {
  return (
    <>
        <form className='border-3'>
            <h2>Regístrate</h2>
            <div>
                <Label text={"Correo"} htmlFor={"correo"} />
                <Input type={"email"} name={"correo"} placeholder={"Introduzca su correo..."}/>
            </div>
        </form>
    </>
  )
}

export default LoginPage