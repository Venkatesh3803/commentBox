

import React, { useEffect, useState } from 'react'
import Navber from '../Components/Navber'

import Footer from "../Components/Footer";
import apiRequest from "../Request";
import PostCard from "../Components/PostCard";

const HomePage = () => {
  
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchingPosts = async () => {
            try {
                const res = await apiRequest.get("/post/allpost");
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchingPosts()
    }, [])

    return (
        <>
            <Navber />
            <section className="bg-[#F5F6FA] min-h-[89vh] py-10">
                {data.map((post) => {
                    return (
                        <PostCard post = {post}/>
                    )
                })}

            </section>

            <Footer />





        </>
    )
}
export default HomePage