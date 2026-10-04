"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Oswald } from "next/font/google";
import { 
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }
      
      setIsSuccess(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setSubmitError("Unable to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col bg-slate-50 min-h-screen pt-[64px] md:pt-[72px] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-16 md:py-28 bg-[#0B1736] border-b border-slate-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center mix-blend-luminosity opacity-20"></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1736] via-[#0B1736]/90 to-transparent"></div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#00C2E8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block">
              CONTACT ALBANIX
            </span>
            <h1 
              className={`${oswald.className} text-white uppercase tracking-[-0.5px] mb-6 leading-[1.1] text-[40px] md:text-[52px] lg:text-[60px]`}
            >
              LET'S TALK ABOUT YOUR NEXT DIGITAL PROJECT.
            </h1>
            <p className="text-[16px] md:text-[18px] text-white/80 max-w-[540px] leading-[1.6]">
              Have an idea, a project or a business challenge?
              Tell us what you need and our team will get back to you.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. CONTACT SECTION (TWO COLUMNS) */}
      <section className="py-20 md:py-24 bg-slate-50">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT SIDE - CONTACT INFORMATION */}
            <div className="lg:col-span-4 flex flex-col space-y-12">
              <div>
                <h2 className={`${oswald.className} text-[#0B1736] text-[24px] tracking-wide mb-6 uppercase border-b border-slate-200 pb-4`}>
                  ALBANIX
                </h2>
                
                <div className="flex items-start mb-6">
                  <MapPin className="w-5 h-5 text-[#176BFF] mr-4 mt-1 flex-shrink-0" />
                  <div className="text-slate-600 leading-relaxed">
                    No. 17/2259<br />
                    Seaport - Airport Road<br />
                    CSEZ P.O<br />
                    Kakkanad, Kochi<br />
                    Kerala - 682037<br />
                    India
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Mail className="w-5 h-5 text-[#176BFF] mr-4 mt-1 flex-shrink-0" />
                  <div className="text-slate-600 leading-relaxed">
                    <a href="mailto:info@albanix.com" className="hover:text-[#176BFF] transition-colors">
                      info@albanix.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#176BFF] mr-4 mt-1 flex-shrink-0" />
                  <div className="text-slate-600 leading-relaxed space-y-2">
                    <div>
                      <a href="tel:+918075313023" className="hover:text-[#176BFF] transition-colors" aria-label="Call Prakash at +91 8075 313 023">+91 8075 313 023</a> — Prakash
                    </div>
                    <div>
                      <a href="tel:+919633021373" className="hover:text-[#176BFF] transition-colors" aria-label="Call Siyad at +91 9633 021 373">+91 9633 021 373</a> — Siyad
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - CONTACT FORM */}
            <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className={`${oswald.className} text-[28px] text-[#0B1736] mb-4`}>MESSAGE SENT SUCCESSFULLY</h3>
                  <p className="text-slate-600 text-lg max-w-[400px]">
                    Thank you. Your message has been sent successfully.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-[#176BFF] font-medium hover:underline flex items-center"
                  >
                    Send another message <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ) : (
                <>
                  <h3 className={`${oswald.className} text-[#0B1736] text-[24px] tracking-wide mb-8 uppercase`}>
                    SEND US A MESSAGE
                  </h3>
                  
                  {submitError && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 border border-red-100 text-[15px]">
                      {submitError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          className="h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#176BFF]/20 focus:border-[#176BFF] transition-all text-slate-800"
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          className="h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#176BFF]/20 focus:border-[#176BFF] transition-all text-slate-800"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleInputChange}
                          className="h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#176BFF]/20 focus:border-[#176BFF] transition-all text-slate-800"
                        />
                      </div>

                      {/* Company */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-slate-700">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleInputChange}
                          className="h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#176BFF]/20 focus:border-[#176BFF] transition-all text-slate-800"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleInputChange}
                        className="h-12 px-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#176BFF]/20 focus:border-[#176BFF] transition-all text-slate-800"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">Message <span className="text-red-500">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleInputChange}
                        className="p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#176BFF]/20 focus:border-[#176BFF] transition-all text-slate-800 resize-y"
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center h-[54px] px-10 bg-[#176BFF] text-white text-[15px] font-bold rounded-md hover:bg-blue-600 hover:shadow-lg transition-all w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          "SENDING..."
                        ) : (
                          <>
                            SEND MESSAGE <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
