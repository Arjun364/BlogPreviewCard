import React from 'react'
import img from '../assets/blogimage.svg'
import proImg from '../assets/userpic.svg'

const PreviewCard = () => {
  return (
    <div className='card'>
        <img className=' ' src={img} alt="cardImage" />
        <div className="content">
            <span className="title small-text-bold hover:bg-black hover:text-primary-color ">
                learning
            </span>
            <span className='small-text-regular'>Published 21 Dec 2023</span>
            <span className='heading '><span className='uppercase'>html</span>  & <span className='uppercase'>css</span> foundations</span>
            <p className='normal-text'>These languges are the backbone of every website, defining struture, content and presentation</p>
        </div>
        <div className="userInfo small-text-bold">
            <img src={proImg} alt="user Image"/>
            Greg hooper
        </div>
    </div>
  )
}

export default PreviewCard