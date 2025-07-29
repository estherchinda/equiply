"use client";

import Heading from '@/ui/display/HeadingComponent';
import React, { useState, useRef, useEffect } from 'react';
import { RiHeadphoneLine, RiUserLine, RiSendPlaneFill } from "react-icons/ri";

export default function ContactChatPage () {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! Welcome to our support chat. How can we help you today?",
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const hardcodedResponses = [
    "Thank you for reaching out! Let me check that for you.",
    "I understand your concern. Our team will look into this right away.",
    "That's a great question! Here's what I can tell you about that...",
    "I'm here to help! Can you provide a bit more detail about the issue?",
    "Thanks for the information. I'll escalate this to our technical team.",
    "Is there anything else I can assist you with today?",
    "I appreciate your patience. Let me find the best solution for you."
  ];

  const sendMessage = () => {
    if (inputMessage.trim()) {
      // Add user message
      const userMessage = {
        id: Date.now(),
        text: inputMessage,
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      setIsTyping(true);

      // Simulate support response after a delay
      setTimeout(() => {
        const randomResponse = hardcodedResponses[Math.floor(Math.random() * hardcodedResponses.length)];
        const supportMessage = {
          id: Date.now() + 1,
          text: randomResponse,
          sender: 'support',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, supportMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section className="min-h-screen">
        <Heading 
        content='Help Center' 
        subtitle='Find answers to common questions or contact our support team for assistance'
        />

      {/* Main Chat Container */}
      <div className="mx-auto p-4 h-[calc(100vh-120px)] flex flex-col">
        <div className="bg-transparent rounded-lg flex-1 flex flex-col overflow-hidden">
          
          {/* Chat Header */}
          <div className="p-4 rounded-t-lg border border-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#264533] rounded-full flex items-center justify-center">
                <RiHeadphoneLine />
              </div>
              <div>
                <h2 className="font-semibold">Support Team</h2>
                {/* <p className="text-sm text-emerald-200">We&apos;re here to help!</p> */}
              </div>
              <div className="ml-auto">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto thin-scrollbar p-4 space-y-4 border-x border-white">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                  <div className={`flex items-end gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                      message.sender === 'user' 
                        ? 'bg-[#94C7A8] text-black' 
                        : 'bg-[#264533]'
                    }`}>
                      {message.sender === 'user' ? <RiUserLine/> : <RiHeadphoneLine />}
                    </div>
                    <div className={`px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-[#94C7A8] text-black'
                        : 'bg-[#264533] text-white'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">{formatTime(message.timestamp)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-xs lg:max-w-md">
                  <div className="flex items-end gap-2">
                    <div className="w-10 h-10 bg-[#264533] rounded-full flex items-center justify-center">
                      <RiHeadphoneLine />
                    </div>
                    <div className="bg-[#264533] px-4 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="border-t border-white p-4">
            <div className="flex gap-3">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="flex-1 w-full bg-[#1C3324] border border-[#366347] rounded-[12px] p-4 outline-none placeholder:text-[#94C7A8] placeholder:font-light text-white font-normal text-sm md:text-base leading-6 focus:border-[#A6F2C4] focus:ring-1 focus:ring-[#A6F2C4] focus:outline-none transition duration-200 thin-scrollbar resize-none"
                rows={1}
                style={{ minHeight: '40px', maxHeight: '120px' }}
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim()}
                className="bg-[#1C3324] hover:bg-[#1a352a]disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <RiSendPlaneFill className='text-2xl'/>
              </button>
            </div>
            <p className="text-xs text-white mt-2">Press Enter to send • Shift + Enter for new line</p>
          </div>
        </div>
      </div>
    </section>
  );
};