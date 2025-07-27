"use client";

import { useState } from "react";
import SearchInput from "../forms/SearchInput";
import Heading from "../display/HeadingComponent";
import Button from "../forms/Button";

export default function FAQ() {
  const [query, setQuery] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const faqData = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email.",
    },
    {
      question: "How do I rent equipment?",
      answer: "You can contact support by emailing",
    },
    {
      question: "How do I list my equipment?",
      answer: "You can contact support by emailing",
    },
    {
      question: "What are the paymentoptions?",
      answer: "We accept all major credit cards, Opay, and bank transfers.",
    },
  ];

  return (
    <div className="space-y-8 my-10">
      <SearchInput
        value={query}
        placeholder="Search for help topics"
        onChange={handleSearch}
      />
      <Heading content="Frequently Asked Questions" />
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <details  key={index} className="flex flex-col rounded-xl bg-[#264533] px-[15px] py-[7px] group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 transition-all duration-200 ease-in-out">
                  <p className="text-white text-sm font-medium leading-normal">{faq.question}</p>
                  <div className="text-white group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p className="text-[#bdc9c2] text-sm font-normal leading-normal pb-2">{faq.answer}</p>
              </details>
        ))}
      </div>
      <Heading content="Contact Support" subtitle="If you can't find the answer you're looking for, please don't hesitate to reach out to our support team. We're here to help!" />
      <div className="w-[250px]">
        <Button content="Contact support" />
      </div>
    </div>
  );
}
