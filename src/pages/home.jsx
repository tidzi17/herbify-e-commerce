import React from "react";
import '../index.css';
import Card from "../components/productCard";



export default function HomePage(){
    return(
        <div>
            <h1 className="font-bold  mt-36 text-3xl">This is Home Page</h1>
            <Card/>
            

        </div>
    )
}