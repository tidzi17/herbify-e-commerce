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
            <div className="w-11/12 h-20 pt-10 z-20  top-0 mx-auto mb-3 " >
                <nav className="h-fit w-full border-b-2 border-primary flex items-center justify-between min800:relative">
                <div className="self-center -ml-56 order-2 min800:order-1 min800:ml-0 min800"><p className="text-5xl text-secondary font-cormorant uppercase cursor-pointer md1000:text-2xl min620:text-3xl" onClick={() => navigate("/")}>Herbify</p></div>
                <button className="max800:hidden  min800:order-3  min800 right-0 " onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross className="min800:text-5xl"/> : <FaBars className="min800:text-5xl"/>}
                </button>
                <ul className={Mobile ? "top-11 z-30 bg-slate-100 h-fit w-full border-b-2 border-black min800:absolute" : "flex items-center justify-between order-1 min800:hidden mr"}  onClick={() => setMobile(false)} >
                <div className="flex  gap-9 flex-wrap min800:w-full min800:h-full min800:flex-col items-center ">
                <li className="text-xl cursor-pointer md1000:text-sm min800:p-5 min800:text-xxl " onClick={() => navigate("/")}>Home</li>
                <li className="text-xl cursor-pointer md1000:text-sm min800:p-5 min800:text-xxl" onClick={() => navigate("/categories")}>Categories</li>
                <li className="text-xl cursor-pointer md1000:text-sm min800:p-5 min800:text-xxl" onClick={() => navigate("/about")}>About</li>
                <li className="text-xl text-primaryRed cursor-pointer md1000:text-sm min800:p-5 min800:text-xxl" onClick={() => navigate("/sale")}>Sale</li>
                </div>
                </ul>
                <div className="flex justify-between gap-3 items-center mr-4 order-3 min800:order-2 min800:-mr-72 min620:-mr-36 min450:-mr-10">
                <MdShoppingCart className="text-2xl cursor-pointer md1000:text-base min620:text-xl" onClick={() => navigate("/cart")}/> /
                <FaHeart className="text-2xl text-secondary cursor-pointer  md1000:text-base min620:text-xl" onClick={() => navigate("/wishlist")}/>
                </div>
                </nav>
            </div>
    )
}