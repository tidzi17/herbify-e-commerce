import React from "react";

export default function Subscribe(){
    return(
        <div className="w-full h-auto mb-3 border-t-2 border-primary flex items-center justify-center p-5 gap-48 min800:flex-col min800:gap-0 min800:mb-5 ">
            <div className="text-center min800:mb-5">
                <p className="text-primary text-2xl font-italiana md1200:text-base">Get 15% off</p>
                <p className="text-primary text-5xl font-italiana font-thin md1200:text-3xl">Subscribe to our newsletter</p>
            </div>
            <div className="w-fit h-fit flex center ">
                <input type="email" placeholder="E-mail" className="h-10 w-38 md1200:w-32 md1200:h-8  border-2 border-gray-800 pl-1 outline-none" />
                <button type="submit" className="h-10 w-48 md1200:w-32 md1200:h-8 bg-black text-slate-100 border-2 border-gray-800">Subscribe</button>
            </div>
        </div>
    )
}
