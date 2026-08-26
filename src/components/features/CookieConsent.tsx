"use client";

import React, { useState, useEffect } from "react";
import { CookiePreferences } from "./CookiePreferences";

type ConsentCategories = {
  strictlyNecessary: boolean;
  analytics: boolean;
  performance: boolean;
  functional: boolean;
  marketing: boolean;
};

const CONSENT_KEY = "albanix_cookie_consent";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  const defaultConsent: ConsentCategories = {
    strictlyNecessary: true,
    analytics: false,
    performance: false,
    functional: false,
    marketing: false,
  };

  const [consent, setConsent] = useState<ConsentCategories>(defaultConsent);

  useEffect(() => {
    // Check if consent has already been given
    const storedConsent = localStorage.getItem(CONSENT_KEY);
    if (storedConsent) {
      try {
        setConsent(JSON.parse(storedConsent));
      } catch (e) {
        setShowBanner(true);
      }
    } else {
      // Small delay to ensure it doesn't flash immediately on first paint
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveAndApplyConsent = (newConsent: ConsentCategories) => {
    setConsent(newConsent);
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));
    setShowBanner(false);
    setShowPreferences(false);
    
    // Here we would typically dispatch an event or call a tag manager
    // to update the loaded scripts based on newConsent
  };

  const handleAcceptAll = () => {
    saveAndApplyConsent({
      strictlyNecessary: true,
      analytics: true,
      performance: true,
      functional: true,
      marketing: true,
    });
  };

  const handleRejectOptional = () => {
    saveAndApplyConsent({
      strictlyNecessary: true,
      analytics: false,
      performance: false,
      functional: false,
      marketing: false,
    });
  };

  return (
    <>
      {/* Bottom Banner */}
      {showBanner && !showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-albanix-primary text-white p-4 sm:p-6 shadow-2xl animate-in slide-in-from-bottom-full duration-500 border-t border-albanix-secondary">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Your privacy matters</h3>
              <p className="text-sm text-albanix-light/80 leading-relaxed max-w-4xl">
                We use essential cookies to keep our website working and optional cookies to understand how visitors use Albanix and improve your experience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-5 py-2.5 text-sm font-semibold border border-white/20 rounded-md hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Manage Preferences
              </button>
              <button
                onClick={handleRejectOptional}
                className="px-5 py-2.5 text-sm font-semibold border border-white/20 rounded-md hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Reject Optional
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2.5 text-sm font-semibold bg-albanix-blue rounded-md hover:bg-blue-600 transition-colors whitespace-nowrap"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      <CookiePreferences
        isOpen={showPreferences}
        onClose={() => {
          if (!localStorage.getItem(CONSENT_KEY)) {
            setShowBanner(true);
          }
          setShowPreferences(false);
        }}
        currentConsent={consent}
        onSave={saveAndApplyConsent}
        onAcceptAll={handleAcceptAll}
        onRejectOptional={handleRejectOptional}
      />
    </>
  );
}
