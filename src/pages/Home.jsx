import React, {useEffect, useState} from 'react'
import service from "../appwrite/data"
import Container  from '../components/Container'
import {PostCard} from "../components/PostCard"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)
    
    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    
    if(authStatus !== true){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500 ">
                                Please Login to read posts
                            </h1>
                            <button
                                onClick={() => navigate("/login")}
                                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                                Login
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500 ">
                                {/* Login to read posts */}
                                No Posts Yet
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard { ...post } />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

