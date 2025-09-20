"use client";

import { useState } from "react"; // ✅ Import useState;

const FAQListitem = ({ qa }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      {/* 1. Question (clickable) */}
      <button
        className="py-5 font-semibold border-b-2 w-full text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{qa.question}</p>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        )}
      </button>

      {/* 2. Answer */}
      <div className={`${isOpen ? "block" : "hidden"} mt-3 opacity-85 mb-6`}>
        {qa.answer}
      </div>
    </li>
  );
};

export default FAQListitem;
