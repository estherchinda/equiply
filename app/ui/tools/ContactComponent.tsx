"use client";

import { useState, ChangeEvent } from "react";
import TextareaInput from "@/app/ui/forms/TextareaInput";
import HeadingComponent from "@/app/ui/display/HeadingComponent";
import Button from "@/app/ui/forms/Button";

export default function ContactComponent() {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="w-full">
      <HeadingComponent content="Contact" marginBottom="5" />
      <div className="w-full md:w-[448px]">
        <TextareaInput value={message} onChange={handleMessageChange} />
      </div>
      <div className="flex justify-end w-full mt-3.5">
        <div className="w-full md:w-[200px]">
          <Button content="Send message" />
        </div>
      </div>
    </div>
  );
}
