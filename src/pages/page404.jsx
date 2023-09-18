


import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
    return (

        <div className="error-container">
            <h1>Erreur 404</h1>
            <h2>Désolé, la page que vous recherchez n'existe pas.</h2>
            <Link to="/" className='none_btn'>
                Go to home page
            </Link>
        </div>
                
            
  )
}

export default Page404

