import React from 'react'
import pImage from '../images/profile-img.png'

export default function Header(){
    return (
        <div className='img-container' style={{backgroundImage: 'url('+pImage+')'}}>
        </div>
    )
}