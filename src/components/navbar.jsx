import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import {FaBars} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';

export default function Navbar(){
    const navigate = useNavigate();
    const [Mobile, setMobile] = useState(false);

    return( 
            <div className="w-11/12 h-20 pt-10 z-20  top-0 mx-auto mb-3 min800:h-10vh " >
                <nav className="h-fit w-full border-b-2 border-primary flex items-center justify-between min800:relative">
                <div className="self-center -ml-56 order-2 min800:order-1 min800:ml-0"><p className="text-5xl text-secondary font-cormorant uppercase cursor-pointer md1000:text-2xl min620:text-3xl" onClick={() => navigate("/")}>Herbify</p></div>
                <ul className={Mobile ? "top-11 z-30 bg-thirdlyGrey h-fit w-full border-b-2 border-black min800:absolute" : "flex items-center justify-between order-1 min800:hidden mr"}  onClick={() => setMobile(false)} >
                <div className="flex  gap-9 flex-wrap min800:w-full min800:h-full min800:flex-col items-center ">
                <li className="text-xl cursor-pointer md1000:text-sm min800:p-5 min800:text-xxl " onClick={() => navigate("/")}>Home</li>
                <li className="text-xl cursor-pointer md1000:text-sm min800:p-5 min800:text-xxl" onClick={() => navigate("/categories")}>Categories</li>
                <li className="text-xl cursor-pointer md1000:text-sm min800:p-5 min800:text-xxl" onClick={() => navigate("/about")}>About</li>
                <li className="text-xl text-primaryRed cursor-pointer md1000:text-sm min800:p-5 min800:text-xxl" onClick={() => navigate("/sale")}>Sale</li>
                </div>
                </ul>
                <div className="flex justify-between gap-3 items-center mr-4 order-3 min800:order-2 min800:mr-0">
                <MdShoppingCart className="w-full h-full text-5xl cursor-pointer md1000:text-base min620:text-xl  min800:h-full min800:w-full" onClick={() => navigate("/cart")}/> 
                <FaHeart className="w-full h-full text-secondary cursor-pointer  md1000:text-base min620:text-xl  min800:h-full min800:w-full" onClick={() => navigate("/wishlist")}/>
                <button className="max800:hidden   min800:right-0 min800:h-full min800:w-full " onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross className="min800:h-full min800:w-full"/> : <FaBars className="min800:h-full min800:w-full"/>}
                </button>
                </div>
                </nav>
            </div>
    )
}