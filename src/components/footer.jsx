import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../index.css';


export default function Footer(){
    const navigate = useNavigate();
    return(
        <footer className="w-full h-auto mt-71 flex flex-col justify-center items-center border-t-2 border-primary">
            <div className="grid grid-cols-5 min800:flex min800:flex-col min800:items-center min800:gap-5 w-11/12 justify-around  h-auto border-b-2 border-primary pt-8 pb-11">
                <div className="min800:flex min800:flex-col min800:items-center">
                    <p className="text-6xl md1200:text-4xl text-secondary font-cormorant uppercase tracking-wider  mb-2">Herbify</p>
                    <p className="text-md md1200:text-sm font-cormorant capitalize  mb-3 min800:text-center">Where Nature Meets Design, Transforming Spaces Beautifully.</p>
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
                <div className="pl-20 min800:pl-0 md1200:pl-10 flex flex-col h-full ">
                    <ul className="flex flex-col gap-4 min800:items-center ">
                    <li className="text-xl md1200:text-base cursor-pointer font-inter" onClick={() => navigate("/")}>Home</li>
                    <li className="text-xl md1200:text-base cursor-pointer font-inter" onClick={() => navigate("/categories")}>Categories</li>
                    <li className="text-xl md1200:text-base cursor-pointer font-inter" onClick={() => navigate("/about")}>About</li>
                    <li className="text-xl md1200:text-base cursor-pointer font-inter" onClick={() => navigate("/sale")}>Sale</li>
                    </ul>
                </div>
                <div className=" flex flex-col min800:items-center">
                    <h3 className="text-2xl  md1200:text-xl font-inter  mb-2">Shopping</h3>
                    <ul className="min800:flex min800:flex-col min800:items-center">
                        <li className="font-inter text-footerPrimaryP md1200:text-sm">Terms & Conditions</li>
                        <li className="font-inter text-footerPrimaryP md1200:text-sm">Return & Excange</li>
                        <li className="font-inter text-footerPrimaryP md1200:text-sm">Shipping & Delivery</li>
                        <li className="font-inter text-footerPrimaryP md1200:text-sm">Private Policy</li>
                    </ul>
                </div>
                <div className="flex flex-col min800:items-center">
                <h3 className="text-2xl md1200:text-xl font-inter mb-2">Company</h3>
                <ul className="min800:flex min800:flex-col min800:items-center">
                        <li className="font-inter text-footerPrimaryP md1200:text-sm">Blog</li>
                        <li className="font-inter text-footerPrimaryP md1200:text-sm">Careers</li>
                        <li className="font-inter text-gray-800 cursor-pointer md1200:text-sm">FAQ</li>
                        <li className="font-inter text-footerPrimaryP md1200:text-sm">Newsroom</li>
                        <li className="font-inter text-footerPrimaryP md1200:text-sm">Partners</li>
                        
                    </ul>
                </div>
                <div className="flex flex-col min800:items-center">
                <h3 className="text-2xl md1200:text-xl font-inter mb-2">Need help?</h3>
                <ul className="min800:flex min800:flex-col min800:items-center">
                       <li className="font-inter text-footerPrimaryP md1200:text-sm">+265 264 263</li>
                        <li className="font-inter text-footerPrimaryP md1200:text-sm">Write us</li>
                        <li className="font-inter text-footerPrimaryP w-2/3 md1200:text-sm min800:w-full">Working hours of customer support</li>
                        <li className="font-inter text-footerPrimaryP md1200:text-sm">MON-SUN: 07h-22h</li>
                    </ul>
                </div>
            </div>
            <div className="pt-3 pb-5">
            <p className="font-inter text-gray-800 text-sm md1200:text-xs">&copy;Copyright 2023 All rights reserved</p>
            </div>
        </footer>
    )
}