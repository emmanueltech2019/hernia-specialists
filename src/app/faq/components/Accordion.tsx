"use client"
import React, { useState } from 'react';

interface AccordionProps {
    title: any;
    answer: any;
}

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

    const handleClick = () => {
        setAccordionOpen(!accordionOpen);
    };

    return (
        <div className=''>
            <div className={!accordionOpen ? "question bg-[#fff] rounded-t-[2rem] p-3" : "question bg-[#f4f4f4] rounded-t-[2rem] p-3"}>
                <header onClick={handleClick} className='cursor-pointer border-[0.5px] p-3 border-[#449dd1] rounded-full'>
                    {title}
                </header>
                {
                    !accordionOpen ? (
                        <div className="answer overflow-hidden transition-all duration-300 ease-in-out h-0 ">{answer}</div>
                    ) : (
                        <div className="answer  transition-all duration-3000 ease-in-out h-auto bg-[#f4f4f4]">
                            {answer}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Accordion;