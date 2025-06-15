"use client";

import { useState, ChangeEvent } from "react";
import TextareaInput from "@/app/ui/forms/TextareaInput";
import Button from "@/app/ui/forms/Button";

export default function ContactComponent () {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }


    return (
        <div className="w-full">
          <h2 className="text-[22px] font-bold leading-7 mb-5">Contact</h2>
          <div className="w-full md:w-[448px]">
            <TextareaInput value={message} onChange={handleMessageChange} />
          </div>
          <div className="flex justify-end w-full mt-3">
            <div className="w-full md:w-[200px]">
                <Button content="Send message" />
            </div>
          </div>
        </div>
    )
}