import React, { useState }  from "react";
import {IoIosArrowDown} from 'react-icons/io';
import {IoIosArrowUp} from 'react-icons/io';
import '../index.css';
import data from '../data/faqData.json';

export default function FaqQA(){
    const [selected, setSelected] = useState(null)
  const toggle = i => {
    if (selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

    return(
        <div className=" w-4/5">
          <div className="w-full h-full ">
       {Object.keys(data).map((section) => (
        <div key={section} className=" w-full h-full p-4 mb-4 ">
        <h2 className="text-primary font-inter text-3xl font-semibold mb-4">{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
         <div className=" w-full h-full p-4 mb-4 ">
        {data[section].map((qa, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div onClick={() => toggle(index)} className="shadow-sm rounded-md flex items-center justify-between bg-thirdlyGrey h-16 pl-2 pr-2 ">
            <p className="text-xl text-secondary font-semibold font-inter">{qa.question}</p>
            <span>{selected === index ? <IoIosArrowUp className="text-3xl"/> : <IoIosArrowDown className="text-3xl" /> }</span>
            </div>
            <div className={selected === index ? "faq-answer show" : "faq-answer" }>
            <p className="text-secondaryGrey font-inter pl-2">{qa.answer}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

        </div>
    )
}