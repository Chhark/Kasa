import logementDatas from "../datas/logements.json";
import { useParams } from "react-router-dom";
import React from "react";
import Slider from "../components/slider"
import DropBox from "../components/DropBox";
import empty_star from "../assets/star.png"
import filled_star from "../assets/Vector.png"
import Tag from "../components/tag"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logement() {
    const star = 5
    const {id} = useParams()
    const logements = logementDatas.find((Logement)=> Logement.id === id)
    const navigate = useNavigate();
    console.log(logements)
    useEffect(() => {
        if (!logements) {
            navigate("*");
        }
    }, [id, navigate, logements]); // Dépendances pour re-vérifier à chaque changement d'id ou de logement
    if(!logements) {
        return null; // Rendre null pendant que le useEffect gère la redirection
    }
    return(
        <div className="page">
            <Slider pictures={logements.pictures}/>
            <div className="section">
                <div className="infos">
                    <h1 className="logement-title">{logements.title}</h1>
                    <p className="subtitle">{logements.location}</p>
                    <div className="tag-list">
                    {logements.tags.map((tag , index)=> (
                        <Tag tag={tag} key={index}/>
                    ))}
                    </div>
                </div>
                <div className="host">
                    <p>{logements.host.name}</p>
                    <img src={logements.host.picture}/>
                    <div className="star">
                    {[...Array(star)].map((_,index)=>(
                        <img src={logements.rating >= index ? filled_star : empty_star } key={index}/>
                    ))}
                </div>
                </div>
            </div>
                
                <div className="section-3">
                    <DropBox title="Description" content={logements.description} />
                    <DropBox title="Équipements" content={
                        <ul>
                        {logements.equipments.map((equipment, index ) =>(
                            <li key={index}>{equipment}</li>
                        ))}
                        </ul>
                        }
                    />          
                </div>
            </div>
    )
}

export default Logement