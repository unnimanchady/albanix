"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, Bot } from "lucide-react";

type Message = {
  id: string;
  sender: "user" | "hani";
  text: string;
};

type QuoteStep = "idle" | "name" | "company" | "email" | "phone" | "requirement" | "done";

export function Chatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "hani",
      text: "Hi 👋 I'm Hani, Albanix's AI assistant.",
    },
    {
      id: "welcome-2",
      sender: "hani",
      text: "I can help you explore our products, capabilities, technology, and solutions.",
    },
    {
      id: "welcome-3",
      sender: "hani",
      text: "How can I help you today?",
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // Quote flow state
  const [quoteStep, setQuoteStep] = useState<QuoteStep>("idle");
  const [quoteData, setQuoteData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: ""
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Quick Actions
  const quickActions = [
    "Explore Our Products",
    "What Can Albanix Build?",
    "Explore Our Capabilities",
    "Get a Project Quote",
    "Talk to an Albanix Expert"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Mock delay for AI response
    setTimeout(() => {
      handleHaniResponse(text.trim());
    }, 1000);
  };

  const handleHaniResponse = (userText: string) => {
    setIsTyping(false);
    const lowerText = userText.toLowerCase();
    
    let responseText = "";

    // Quote Flow Logic
    if (quoteStep !== "idle" && quoteStep !== "done") {
      processQuoteStep(userText);
      return;
    }

    if (lowerText.includes("get a project quote") || lowerText.includes("project quotation")) {
      setQuoteStep("name");
      responseText = "I'd be happy to help you get a quote. First, what is your full name?";
    } else if (lowerText.includes("talk to an albanix expert") || lowerText.includes("talk to an expert") || lowerText.includes("contact")) {
      responseText = "Our experts are ready to help. You can reach out directly via our contact form at the bottom of the page, or email us at info@albanix.com.";
    } else if (lowerText.includes("products") || lowerText.includes("what products")) {
      responseText = "Albanix offers specialized software solutions including TreatAnywhere (Healthcare), Gym Software, Restaurant Software, and Van Sales Distribution systems. Which one interests you?";
    } else if (lowerText.includes("treatanywhere")) {
      responseText = "TreatAnywhere is our comprehensive healthcare platform that enables 'Healthcare without borders'. It helps manage patients, appointments, and telemedicine capabilities.";
    } else if (lowerText.includes("build") || lowerText.includes("software do you build") || lowerText.includes("capabilities")) {
      responseText = "We build custom enterprise software, complex integrations (like OT-IT), mobile apps, and scalable web applications across various industries.";
    } else if (lowerText.includes("technologies") || lowerText.includes("stack")) {
      responseText = "We leverage modern technologies like React, Next.js, Node.js, Python, and scalable cloud architectures on AWS/Azure to build robust solutions.";
    } else if (lowerText.includes("website") || lowerText.includes("app")) {
      responseText = "Yes, we design and develop premium, high-performance websites and mobile applications. Would you like to get a project quote for this?";
    } else if (lowerText.includes("albanix") || lowerText.includes("who are you")) {
      responseText = "Albanix is a leading technology company that creates industry-focused software platforms designed to simplify operations, connect people, and help businesses grow.";
    } else {
      responseText = "I'm still learning! I can help you with product information, capabilities, or connecting you with an expert. Could you rephrase your question?";
    }

    const haniMessage: Message = {
      id: (Date.now() + 1).toString(),
      sender: "hani",
      text: responseText,
    };

    setMessages((prev) => [...prev, haniMessage]);
  };

  const processQuoteStep = (input: string) => {
    let nextStep: QuoteStep = quoteStep;
    let responseText = "";

    switch (quoteStep) {
      case "name":
        setQuoteData({ ...quoteData, name: input });
        nextStep = "company";
        responseText = `Nice to meet you, ${input}. What is the name of your company?`;
        break;
      case "company":
        setQuoteData({ ...quoteData, company: input });
        nextStep = "email";
        responseText = "Got it. What is your email address?";
        break;
      case "email":
        setQuoteData({ ...quoteData, email: input });
        nextStep = "phone";
        responseText = "Thanks! Could you provide a contact phone number?";
        break;
      case "phone":
        setQuoteData({ ...quoteData, phone: input });
        nextStep = "requirement";
        responseText = "Almost done. Briefly describe your project requirement or what you're looking to build.";
        break;
      case "requirement":
        setQuoteData({ ...quoteData, requirement: input });
        nextStep = "done";
        responseText = "Thank you! I've collected your information. An Albanix expert will review your requirements and reach out to you shortly.";
        break;
    }

    setQuoteStep(nextStep);
    
    const haniMessage: Message = {
      id: (Date.now() + 1).toString(),
      sender: "hani",
      text: responseText,
    };
    
    setMessages((prev) => [...prev, haniMessage]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full h-full md:w-[420px] md:h-[650px] md:max-h-[80vh] bg-[#010816]/95 backdrop-blur-xl md:rounded-2xl border-t md:border border-white/10 shadow-2xl flex flex-col z-[100] animate-in slide-in-from-bottom-10 fade-in duration-300 overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#08E0E8] to-[#009DFF] flex items-center justify-center">
              <Bot className="text-white w-6 h-6" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#010816] rounded-full"></div>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">ASK HANI</h3>
            <p className="text-[#94A3B8] text-xs">Your Albanix AI Assistant</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-[#94A3B8] hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-5 scroll-smooth custom-scrollbar">
        <div className="flex flex-col gap-4">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-gradient-to-r from-[#08E0E8] to-[#009DFF] text-white rounded-tr-sm' 
                    : 'bg-white/10 text-[#F5F7FA] border border-white/5 rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Quick Actions (only show at start) */}
          {messages.length === 3 && (
            <div className="flex flex-col gap-2 mt-2 items-start">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(action)}
                  className="text-left text-[13px] text-[#08E0E8] border border-[#08E0E8]/30 bg-[#08E0E8]/10 hover:bg-[#08E0E8]/20 px-3 py-2 rounded-lg transition-colors duration-200"
                >
                  {action}
                </button>
              ))}
            </div>
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex w-full justify-start">
              <div className="bg-white/10 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-4 flex items-center gap-1.5 h-11">
                <div className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-[#94A3B8] rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/10 bg-[#010816]">
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="w-full bg-white/5 text-white placeholder-[#64748B] text-sm rounded-full py-3 pl-4 pr-12 border border-white/10 focus:border-[#08E0E8] focus:bg-white/10 focus:outline-none transition-all"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isTyping}
            className="absolute right-1.5 p-2 bg-gradient-to-r from-[#08E0E8] to-[#009DFF] text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
