import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../context/Context'

const Navber = () => {
    const [open, setOpen] = useState(false)
    const { currUser, updateUser } = useContext(AuthContext)
    return (
        <div>
            <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center bg-blue-600">
                <div className="flex items-center justify-between">
                    <Link to={"/"}
                        className="text-xl font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-indigo-400"
                    >CommentApp
                    </Link>

                    {/* <!-- Mobile menu button --> */}
                    <div onClick={() => setOpen(!open)} className="flex md:hidden">
                        <button type="button" className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                            aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div className="flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0" >

                    <Link to={"/addpost"} className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                    >Add Post</Link>

                    {currUser ?
                        <span onClick={()=>updateUser(null)}
                            className="px-4 py-1 text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform border rounded hover:bg-indigo-400"
                        >Log Out</span>

                        :
                        <Link to={"/login"}
                            className="px-4 py-1 text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform border rounded hover:bg-indigo-400"
                        >Login</Link>
                    }
                </div>
            </nav >
        </div >
    )
}

export default Navber