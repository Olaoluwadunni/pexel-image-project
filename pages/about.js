import React from "react"
import Cookies from "js-cookie"
import { Paper, Divider, Typography,Button  } from '@mui/material' 
import { Link } from "evergreen-ui"
import { IoCaretBackOutline } from 'react-icons/io5'
import { BsArrowRight } from "react-icons/bs"

const About = () => {
    const image = Cookies.getJSON('imageInfo') || {};
    console.log('thissss:', image)
    return (
        <div>
            <div className='container mt-5'>
                <Link href='/' className='text-decoration-none'>
                    <Button variant="contained" className='text-capitalize bg-danger' disableElevation><IoCaretBackOutline/> back</Button>
                </Link>
            </div>
            <Typography variant='h4' className='text-center mt-4 mb-4'> Image Details</Typography>
            <div className='d-flex justify-content-center align-content-center'>
                <div>
                    <img 
                        src={image?.image.src}
                        alt= {image?.image.alt}
                        className="img-fluid"
                        style={{width: '500px'}}
                    />
                </div>
                <Paper elevation={0} className='border ms-4 px-4 py-5'>
                    <p className=''><span className='fw-bold mt-2'>Id:</span> {image?.image.id}</p>
                    <Divider/>
                    <p className=''><span className='fw-bold mb-0'>Title:</span> {image?.image.alt}</p>
                    <Divider/>
                    <p className=''><span className='fw-bold mb-0'>Color:</span> {image?.image.color }</p>
                    <Divider/>
                    <p><span className='fw-bold mb-0'>Url: </span><a href= {image?.image.url} rel='noreferrer' className='text-decoration-none' target='_blank'>Link<BsArrowRight/></a></p>
                    <Divider/>
                    <p className=''><span className='fw-bold mb-0'>Photographer:</span> {image?.image.photographer}</p>
                </Paper>
            </div>
        </div>
    )
}

export default About














