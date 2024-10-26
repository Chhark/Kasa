import left_arrow from '../assets/arrow-left.png'
import right_arrow from '../assets/arrow-right.png'
import { useState } from 'react'
import React from 'react'

function Slider({pictures}){
    const [SlideNumber , SetSlideNumber] = useState(0)
    const prevSlide = ()=>{
        if (SlideNumber == 0){
        SetSlideNumber(pictures.length - 1)
        }
        else{
            SetSlideNumber(SlideNumber - 1)
        }
    }
    const nextSlide = ()=>{
        if (SlideNumber == pictures.length - 1){
            SetSlideNumber(0)
        }
        else{
            SetSlideNumber(SlideNumber + 1)
        }
    }
    return(
        <div className='slide' style={{backgroundImage:`url(${pictures[SlideNumber]})`}}>
            {pictures.length >1 && 
            <React.Fragment>
                <img src={left_arrow} className='left' onClick={prevSlide}/>
                <img src={right_arrow} className='right' onClick={nextSlide}/>
                <p>{SlideNumber + 1}/{pictures.length}</p>
            </React.Fragment>
            }
        </div>
    )
} 

export default Slider