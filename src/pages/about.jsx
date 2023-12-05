import React from "react";
import leaf from '../assets/leaff.png';
import bottomLeaf from '../assets/bottom.png';

export default function AboutPage(){
    return(
            <div className="flex flex-col w-full mt-24">
                <div className="flex flex-col items-center  w-full ">
                <h2 className="font-cormorant text-primary text-5xl">Who are we?</h2>
                <div  className="flex w-full h-full m-auto">
                    <img src={leaf} alt="leaf" className="h-full w-2/5 " id="about-image-first" />
                    <div className=" text-right mt-44 w-3/5 pr-11">
                        <div className="mb-11">
                            <h3 className="text-4xl font-inter text-secondary font-medium pb-5">We are Herbify!</h3>
                            <p className="font-inter text-grey-500 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam impedit doloremque ullam amet. Ab mollitia quasi iure provident dolores exercitationem sequi sapiente culpa, odit consequatur eveniet porro dignissimos modi. Repellat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque voluptas, porro doloribus animi nulla recusandae facere inventore pariatur sint ullam dolores. Unde quisquam expedita laborum rem laudantium quasi, explicabo itaque!</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-inter text-secondary font-medium pb-5">How do we make your life better?</h3>
                            <p className="font-inter text-grey-500 text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis delectus, rerum impedit corporis quisquam soluta veritatis! Quas eum eius qui perferendis in, repellat sed consequuntur eveniet magni fugit? Nulla, nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae officiis mollitia maiores, assumenda explicabo totam? Beatae amet at neque, ipsam atque magnam eos porro qui id minima animi corrupti?</p>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-2/3 flex flex-col items-center justify-center text-center pt-24 pb-36">
                <h2 className="font-cormorant text-primary text-5xl  z-20 mb-5">Our mission</h2>
                <h3 className="text-4xl font-inter text-secondary font-medium mb-5">Something about somthing</h3>
                <p className="font-inter text-grey-500 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas nostrum fuga ducimus iure, iste ex distinctio debitis ad sit, natus ut ab omnis! Veritatis asperiores est consectetur repellendus numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, deserunt voluptatibus vero repudiandae consequatur officia id omnis aspernatur ullam eaque ratione molestiae fugiat illum? At assumenda sed unde nesciunt beatae.</p>
                </div>
                <div className="w-full  h-auto flex pt-11">
                    <div className="pl-11">
                    <h2 className="font-cormorant text-primary text-5xl  z-20 mb-5">Our vision</h2>
                <h3 className="text-4xl font-inter text-secondary font-medium mb-5">Something about somthing</h3>
                <p className="font-inter text-grey-500 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas nostrum fuga ducimus iure, iste ex distinctio debitis ad sit, natus ut ab omnis! Veritatis asperiores est consectetur repellendus numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, deserunt voluptatibus vero repudiandae consequatur officia id omnis aspernatur ullam eaque ratione molestiae fugiat illum? At assumenda sed unde nesciunt beatae.</p>
                    </div>
                    <img src={bottomLeaf} alt="leaf" className="" id="about-img-second"/>
                </div>
                </div>
        </div>
    )
}