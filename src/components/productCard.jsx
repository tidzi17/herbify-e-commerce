import React from "react";
import img from '../assets/bgimg.png';
import { FaHeart } from "react-icons/fa";
import '../index.css';

const Card = () => {
    return(
        <div className=" w-64 h-96 shadow-md rounded-3xl mb-7 ml-7 mt-7 flex flex-col">
            <div className="w-full h-3/6 shadow-md bg-primaryGrey  rounded-3xl flex items-center justify-center">
                <img src={img} alt="plant" className="h-5/6 w-1/2"/>
            </div>
            <div className="w-11/12 flex flex-col items-center pt-5 ml-auto mr-auto">
                <h4 className="font-inter text-base font-semibold text-textGrey">Peace Lilly</h4>
                <p className="font-inter text-xs w-11/12 text-center text-textGrey ">Classic Peace Lilly is a floor plant arranged in bamboo planter with a white ribbon</p>
                <div className="flex w-11/12 justify-between mt-4 ">
                    <div >
                        <p className="text-xs text-textGrey">Total price:</p>
                        <p className="text-lg">$45,00</p>
                    </div>
                    <div className="flex items-center mt-3 gap-2">
                        <button className="bg-primary text-white rounded-md h-7 w-20 text-xs outline-none">Add to cart</button>
                        <button className="text-secondary h-7 bg-primaryGrey w-7 rounded-md flex items-center justify-center text-lg"><FaHeart /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;