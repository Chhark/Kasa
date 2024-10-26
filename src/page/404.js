import { Link } from 'react-router-dom'
import React from 'react'

function Erreur() {
    return(
        <div className='page-404'>
            <h1 className="title-404">404</h1>
            <p className='p-404'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='link-404'>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Erreur

