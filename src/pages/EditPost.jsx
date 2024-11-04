import React from 'react'
import { useState , useEffect } from 'react'
import service from '../appwrite/data'
// import Container   from '../components/Container'
import PostForm from '../components/PostForm'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditPost() {
    const [post , setPost] = useState(null)
    const {slug}=  useParams()
    const navigate = useNavigate()

    useEffect(()=> {
        if(slug){
            service.getPost(slug).then((post) => {
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate("/")
        }
    } , [slug , navigate])
    return post ? (
        <div className='py-8'>
            <PostForm post={post} /> 
        </div>
    ): null
}
