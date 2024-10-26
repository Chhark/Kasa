import { Link } from 'react-router-dom'
function Card({logement ,}){
    return(
        <Link to={`/logement/${logement.id}`}>
          <div className='logement-card'style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0)70%, rgba(0, 0, 0, 1)), url(${logement.cover})` }}>
            <h3>{logement.title}</h3>
          </div>
        </Link>
    )
}

export default Card