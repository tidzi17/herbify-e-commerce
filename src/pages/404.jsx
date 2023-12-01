import React from "react";
import '../index.css';

export default function NotFound(){
    return(
        <div className="mt-9 mb-44 w-11/12 m-auto">
            <p className="text-7xl text-primary font-sans font-semibold min800:text-5xl min540:text-3xl">UPS!</p>
            <div className="flex flex-col items-center justify-center -mt-7 min800:mt-0">
            <h1 className="font-sans image-text">404</h1>
            <p className="text-primary text-4xl font-sans font-semibold min800:text-3xl">Page not found</p>
            </div>
        </div>
    )
}