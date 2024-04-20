import React from 'react'
import { Label } from '../components/Labels/Label'
import Input from '../components/Inputs/Input'
import BANNER from '../img/bannerlogin.jpg';
import { Link } from 'react-router-dom';


const RegisterPage = () => {
  return (
    <div className='flex justify-between'>
      <img className='w-1/2 h-screen' src={BANNER} />
      <form className='w-1/2 flex flex-col justify-center items-center gap-12'>
        <h2 className={"font-bold text-4xl"}>Regístrate</h2>
        <div className='w-full flex flex-col gap-8 items-center'>
          <div className='flex flex-col gap-2 w-6/12'>
            <Label text={"Correo"} htmlFor={"correo"} className={"font-bold text-xl"}/>
            <Input type={"email"} name={"correo"} placeholder={"Introduzca su correo..."} className={'w-11/12   p-2 outline-none focus:shadow-outline-bottom focus:border-b-emerald-300 shadow-xl'} />
          </div>
          <div className='flex flex-col gap-2 w-6/12'>
            <Label text={"Contraseña"} htmlFor={"pass"} className={"font-bold text-xl"}/>
            <Input type={"password"} name={"pass"} placeholder={"Introduzca su contraseña..."}  className={'w-11/12   p-2 outline-none focus:shadow-outline-bottom focus:border-b-emerald-300 shadow-xl'} />
          </div>
          <span>¿Ya tienes una cuenta? <Link to='/login' className='text-blue-600 font-bold hover:shadow-outline-bottom'>Log in</Link></span>
          <Input type={"submit"} className={"w-40 h-12 rounded-2xl text-xl cursor-pointer text-white hover:text-black bg-blue-500 font-bold hover:bg-blue-200 border"}/>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage