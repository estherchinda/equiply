"use client";

import Heading from "@/ui/display/HeadingComponent";
import Modal from "@/ui/display/Modal";
import Image from "next/image";
import { useState } from "react";

type AgentModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AgentModal({ isOpen, onClose }: AgentModalProps) {
  const agents = [
    {
      name: "Mason Emenike",
      image: "/agent-1.jpg",
      ratings: {
        1: true,
        2: true,
        3: true,
        4: true,
        5: false,
      },
    },
    {
      name: "Eric Johnson",
      image: "/agent-2.jpg",
      ratings: {
        1: true,
        2: true,
        3: true,
        4: false,
        5: false,
      },
    },
    {
      name: "Marcus Angus",
      image: "/agent-3.jpg",
      ratings: {
        1: true,
        2: true,
        3: true,
        4: false,
        5: false,
      },
    },
  ];

  const [isClicked, setIsClicked] =  useState(0);

  const handleSelect = (index: number) => {
    setIsClicked(index);
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Heading
        content="Get Agent"
        subtitle="Find an agent who can assist you in equipment utility."
        className="text-center"
      />
      <div className="h-40 flex justify-between items-center mx-auto my-10">
        {agents.map((agent, index) => (
          <div
            key={index}
            className={`cursor-pointer p-4 rounded-md flex flex-col h-fit w-[125px] ${isClicked === index && "border-3 border-[#a5f2c4]"}`}
          >
            <div className="h-20 w-20 relative overflow-hidden rounded-full">
              <Image
                src={agent.image}
                alt={agent.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2 mt-1.5">
              <h2 className="text-sm font-semibold truncate">{agent.name}</h2>
              <div className="w-full flex-col justify-end items-center space-y-5">
                <div className="flex gap-0.5 items-center">
                  {Object.entries(agent.ratings).map(([key, isFilled]) => (
                    <span key={key} className="text-lg">
                      {isFilled ? (
                        <Image
                          src={"/review-full.svg"}
                          alt="Review"
                          width={20}
                          height={20}
                        />
                      ) : (
                        <Image
                          src={"/review-empty.svg"}
                          alt="Review"
                          width={20}
                          height={20}
                        />
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <p onClick={() => handleSelect(index)} className="text-xs text-center p-1.5 rounded-md w-full bg-[#3b5847] my-1">Get</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-center text-lg font-medium">
        Top agents who match this equipment
      </h3>
      <p className="text-sm text-center mt-3">
        Not satisfied with this recommendation? <br />
        Search more agents{" "}
        <a href="#" className="underline text-gray-300">
          here
        </a>
        .
      </p>
    </Modal>
  );
}
