import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../index.css';


export default function Footer(){
    const navigate = useNavigate();
    return(
        <footer className="w-full h-auto mt-71 flex flex-col justify-center items-center border-t-2 border-primary">
            <div className="grid grid-cols-5 w-11/12 justify-around  h-auto border-b-2 border-primary pt-8 pb-11">
                <div>
                    <p className="text-6xl text-secondary font-cormorant uppercase tracking-wider  mb-2">Herbify</p>
                    <p className="text-md font-cormorant capitalize  mb-3">Where Nature Meets Design, Transforming Spaces Beautifully.</p>
                    <div className="social-buttons flex flex-wrap mt-8 gap-5 ">
                    <div className="social-button social-button--facebook" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                    </div>
                    <div className="social-button social-button--instagram" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                    </div>
                    <div className="social-button social-button--twitter" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                    </div>
                    <div className="social-button social-button--youtube" aria-label="Youtube">
                    <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                    </div>
              </div>
                </div>
                <div className="pl-20 flex flex-col h-full ">
                    <ul className="flex flex-col gap-4 ">
                    <li className="text-xl cursor-pointer font-inter" onClick={() => navigate("/")}>Home</li>
                    <li className="text-xl cursor-pointer font-inter" onClick={() => navigate("/categories")}>Categories</li>
                    <li className="text-xl cursor-pointer font-inter" onClick={() => navigate("/about")}>About</li>
                    <li className="text-xl cursor-pointer font-inter" onClick={() => navigate("/sale")}>Sale</li>
                    </ul>
                </div>
                <div className=" flex flex-col">
                    <h3 className="text-2xl font-inter  mb-2">Shopping</h3>
                    <ul className="">
                        <li className="font-inter text-footerPrimaryP">Terms & Conditions</li>
                        <li className="font-inter text-footerPrimaryP">Return & Excange</li>
                        <li className="font-inter text-footerPrimaryP">Shipping & Delivery</li>
                        <li className="font-inter text-footerPrimaryP">Private Policy</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                <h3 className="text-2xl font-inter  mb-2">Company</h3>
                <ul>
                        <li className="font-inter text-footerPrimaryP">Blog</li>
                        <li className="font-inter text-footerPrimaryP">Careers</li>
                        <li className="font-inter text-gray-800 cursor-pointer">FAQ</li>
                        <li className="font-inter text-footerPrimaryP">Newsroom</li>
                        <li className="font-inter text-footerPrimaryP">Partners</li>
                        
                    </ul>
                </div>
                <div className="flex flex-col">
                <h3 className="text-2xl font-inter mb-2">Need help?</h3>
                <ul>
                       <li className="font-inter text-footerPrimaryP">+265 264 263</li>
                        <li className="font-inter text-footerPrimaryP">Write us</li>
                        <li className="font-inter text-footerPrimaryP w-2/3">Working hours of customer support</li>
                        <li className="font-inter text-footerPrimaryP">MON-SUN: 07h-22h</li>
                    </ul>
                </div>
            </div>
            <div className="pt-3 pb-5">
            <p className="font-inter text-gray-800 text-sm">&copy;Copyright 2023 All rights reserved</p>
            </div>
        </footer>
    )
}