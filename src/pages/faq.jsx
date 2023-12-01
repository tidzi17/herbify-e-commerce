import React from "react";
import FaqQA from "../components/faq";

export default function FaqPage(){
    return(
        <div className="flex flex-col items-center justify-center m-auto w-full h-full">
            <div className="text-center flex flex-col items-center">
            <h1 id="image-text" className="font-sans">FAQ</h1>
            <p className="w-1/2 font-sans text-primary font-semibold -mt-5">Read the answers to the most frequently asked questions in the section below. If you don't find the answer, you can always contact our customer support.</p>
            </div>
            <FaqQA />
        </div>
    )
}