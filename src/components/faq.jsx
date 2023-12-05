import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../index.css";
import data from "../data/faqData.json";

export default function FaqQA() {
  const [selectedQuestions, setSelectedQuestions] = useState({});

  const toggle = (section, index) => {
    const key = `${section}_${index}`;

    setSelectedQuestions((prevSelected) => ({
      ...prevSelected,
      [key]: !prevSelected[key],
    }));
  };
 

  return (
    <div className="w-4/5 min800:w-11/12">
      <div className="w-full h-full">
        {Object.keys(data).map((section) => (
          <div key={section} className="w-full h-full mb-11 min800:mb-5">
            <h2 className="text-primary font-inter text-3xl md1200:text-2xl min800:text-lg min540:text-base min800:mb-1 font-semibold mb-4">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </h2>
            <div className="w-full h-full p-4 mb-4">
              {data[section].map((qa, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div
                    onClick={() => toggle(section, index)}
                    className="shadow-sm rounded-md flex items-center justify-between bg-thirdlyGrey h-16 pl-2 pr-2 md1200:h-12 min540:h-10 cursor-pointer"
                  >
                    <p className="text-xl md1200:text-lg min800:text-base min540:text-sm text-secondary font-semibold font-inter">
                      {qa.question}
                    </p>
                    <span>
                      {selectedQuestions[`${section}_${index}`] ? (
                        <IoIosArrowUp className="text-3xl md1200:text-2xl" />
                      ) : (
                        <IoIosArrowDown className="text-3xl md1200:text-2xl" />
                      )}
                    </span>
                  </div>
                  <div
                    className={
                      selectedQuestions[`${section}_${index}`]
                        ? "faq-answer show"
                        : "faq-answer"
                    }
                  >
                    <p className="text-secondaryGrey font-inter pl-2 md1200:text-sm">
                      {qa.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
