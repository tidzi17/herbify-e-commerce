import React from "react";
import FaqQA from "../components/faq";
import '../index.css'

export default function FaqPage(){
    return(
        <div className="flex flex-col items-center justify-center m-auto w-full h-full">
            <div className="text-box text-center flex flex-col items-center mb-4">
            <h1 id="image-text" className="font-sans image-text">FAQ</h1>
            <p className="w-1/2 font-sans text-primary font-semibold -mt-5 md1200:text-xs min620:w-2/3">Read the answers to the most frequently asked questions in the section below. If you don't find the answer, you can always contact our customer support.</p>
            </div>
            <FaqQA />
        </div>
    )
}