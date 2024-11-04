import React from 'react'
import service from '../appwrite/data'
import { Link } from 'react-router-dom'

export  function PostCard( {$id , title , featuredImage} ) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-lg p-4'>
            <div className='w-full justify-center mb-4'>
              <img 
                src={service.previewFile(featuredImage)} 
                alt={title} 
                className='rounded-xl'>
              </img>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}
