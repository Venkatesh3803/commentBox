import React, { useContext, useEffect, useState } from 'react'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import Comments from "../Components/Comments";
import { AuthContext } from '../context/Context';
import apiRequest from '../Request';


const PostCard = ({ post }) => {
    const { currUser } = useContext(AuthContext)
    const [comment, setComment] = useState(false);
    const [user, setUser] = useState([])

  
    useEffect(() => {
        if (post.userId !== currUser._id) {
            const fetchingUser = async () => {
                const res = await apiRequest.get(`/auth/getuser/${post.userId}`)
                setUser(res.data)
            }
            fetchingUser()
        }
    }, [])

    return (
        <div className="max-w-5xl px-6 py-10 mx-auto border border-gray-300 rounded-md shadow-lg bg-white mt-2">
            <div className=" md:flex md:space-x-6">
                <div className="mt-8 md:mt-0 flex flex-col gap-5">
                    <div className="flex gap-3 items-center">
                        <img className="object-cover object-center shadow w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1616874535244-73aea5daadb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                        <h3 className="text-2xl font-semibold text-gray-800">{post.userId !== currUser._id ? user.email : currUser.email}</h3>
                    </div>
                    <div className="flex flex-col items-start ">
                        <h2 className=" text-gray-800 text-start text-lg font-semibold">{post.desc}</h2>
                        <p className=" text-gray-600 text-start text-base">{post.desc}</p>

                        <div className="mt-5 flex gap-10 items-center">
                            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setComment(post._id)}>
                                <IoChatbubbleEllipsesOutline />
                                <span>Comments</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <AiFillLike />
                                <span>Link</span>
                            </div>

                        </div>

                        {comment === post._id &&
                            <Comments id={comment} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
