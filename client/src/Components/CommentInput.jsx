import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/Context'
import apiRequest from '../Request'

const CommentInput = ({ id, setData, data, edit }) => {
    const [input, setInput] = useState({})
    const { currUser } = useContext(AuthContext)
    const handleChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const info = {
            postId: id,
            userId: currUser._id,
            ...input
        }

        try {
            const res = await apiRequest.post("/comment", info);
            if (res.data) {
                console.log(res.data)
                setData([...data, info])
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleUpdate = async (e) => {
        e.preventDefault()
        const info = {
            ...input
        }

        try {
            const res = await apiRequest.patch("/comment", info);
            if (res.data) {
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchingComm = async () => {
            try {
                const res = await apiRequest.get(`/comment/${edit}`)
                setInput(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchingComm()
    }, [edit])





    return (
        <>
            {edit ?
                <form className="mt-5 border flex gap-2 rounded-lg px-5 py-2 w-full" onSubmit={handleUpdate} >
                    < input type="text" placeholder='Comment here' name='comment' onChange={handleChange} defaultValue={input.comment} className='w-full focus:outline-none' />
                    <button type='submit'>Update</button>
                </form >
                :
                <form className="mt-5 border flex gap-2 rounded-lg px-5 py-2 w-full" onSubmit={handleSubmit} >
                    < input type="text" placeholder='Comment here' name='comment' onChange={handleChange} className='w-full focus:outline-none' />
                    <button type='submit'>Comment</button>
                </form >
            }

        </>



    )
}

export default CommentInput
