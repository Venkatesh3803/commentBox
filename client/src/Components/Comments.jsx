import React, { useContext, useEffect, useState } from 'react'
import apiRequest from '../Request'
import CommentInput from './CommentInput'
import { AuthContext } from '../context/Context'

const Comments = ({ id }) => {
    const [date, setData] = useState([])
    const [edit, setEdit] = useState()
    const { currUser } = useContext(AuthContext)


    useEffect(() => {
        const fetchingComments = async () => {
            try {
                const res = await apiRequest.get(`/comment/allcomments?postid=${id}`);
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchingComments()
    }, [])


    const handleDelete = async (id) => {
        try {
            const res = await apiRequest.delete(`/comment/${id}`)
            if (res.data) {
                setData(date.filter((item) => item._id !== id))
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='w-[800px]'>
            {date?.map((com) => {
                return (
                    <div className="max-w-4xl mt-5 px-6 py-10 left-16 relative mx-auto border rounded-md ">
                        <div className=" md:flex md:space-x-6">
                            <div className="mt-8 md:mt-0 flex flex-col gap-5">
                                <div className="flex gap-10">
                                    <div className="flex items-center gap-3">
                                        <img className="object-cover object-center  shadow w-10 h-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1616874535244-73aea5daadb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                                        <h3 className="text-2xl font-semibold text-gray-800">Name</h3>
                                    </div>
                                    {com.userId == currUser._id &&
                                        <div className="flex  gap-3">
                                            <button onClick={() => setEdit(com._id)}>edit</button>
                                            <button onClick={() => handleDelete(com._id)}>Delete</button>
                                        </div>
                                    }
                                </div>
                                <div className="flex ">
                                    <p className=" mt-2 text-gray-600 text-start">{com.comment}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <CommentInput id={id} setData={setData} data={date} edit={edit} />
        </div>

    )
}

export default Comments
