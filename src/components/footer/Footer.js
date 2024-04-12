import React from 'react'
import './footer.css'
import {useLocation} from 'react-router-dom'

const Footer = () => {

  const location = useLocation();

  const notAllowedPath = ['/signIn','/signUp']

  
  return (
    <>
    {notAllowedPath.includes(location.pathname)  ? null :
      <footer className='footer_container'>
        <p>&#169; Hemant Dubey</p>
      </footer>
     }
    </>
  )
}

export default Footer