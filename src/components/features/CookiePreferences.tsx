"use client";

import React, { useState, useEffect } from "react";
import { X, Check } from "lucide-react";

type ConsentCategories = {
  strictlyNecessary: boolean;
  analytics: boolean;
  performance: boolean;
  functional: boolean;
  marketing: boolean;
};

const defaultConsent: ConsentCategories = {
  strictlyNecessary: true, // always true
  analytics: false,
  performance: false,
  functional: false,
  marketing: false,
};

interface CookiePreferencesProps {
  isOpen: boolean;
  onClose: () => void;
  currentConsent: ConsentCategories;
  onSave: (consent: ConsentCategories) => void;
  onAcceptAll: () => void;
  onRejectOptional: () => void;
}

export function CookiePreferences({
  isOpen,
  onClose,
  currentConsent,
  onSave,
  onAcceptAll,
  onRejectOptional,
}: CookiePreferencesProps) {
  const [localConsent, setLocalConsent] = useState<ConsentCategories>(currentConsent);

  useEffect(() => {
    setLocalConsent(currentConsent);
  }, [currentConsent, isOpen]);

  if (!isOpen) return null;

  const handleToggle = (category: keyof ConsentCategories) => {
    if (category === "strictlyNecessary") return;
    setLocalConsent((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handleSave = () => {
    onSave(localConsent);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-albanix-primary/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-albanix-border">
          <h2 className="text-2xl font-bold text-albanix-primary">Cookie Preferences</h2>
          <button
            onClick={onClose}
            className="text-albanix-textSecondary hover:text-albanix-primary transition-colors focus:outline-none focus:ring-2 focus:ring-albanix-blue rounded-md p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-grow space-y-6">
          <p className="text-albanix-textSecondary">
            Manage your cookie preferences below. You can change your preferences at any time by visiting the "Manage Cookies" link in the footer.
          </p>

          <div className="space-y-4">
            {/* Strictly Necessary */}
            <div className="flex items-start justify-between p-4 bg-albanix-light rounded-lg border border-albanix-border">
              <div className="pr-4">
                <h3 className="font-semibold text-albanix-primary mb-1">Strictly Necessary</h3>
                <p className="text-sm text-albanix-textSecondary">These cookies are essential for the website to function and cannot be switched off.</p>
              </div>
              <div className="flex-shrink-0 text-albanix-blue font-medium text-sm flex items-center bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Always Active
              </div>
            </div>

            {/* Other Categories */}
            {[
              { id: "analytics", label: "Analytics", desc: "Helps us understand how visitors interact with the website." },
              { id: "performance", label: "Performance", desc: "Used to understand and analyze the key performance indexes of the website." },
              { id: "functional", label: "Functional", desc: "Enables the website to provide enhanced functionality and personalization." },
              { id: "marketing", label: "Marketing", desc: "Used to provide visitors with customized advertisements based on the pages you visited." },
            ].map((cat) => (
              <div key={cat.id} className="flex items-start justify-between p-4 bg-white rounded-lg border border-albanix-border hover:border-albanix-blue/30 transition-colors">
                <div className="pr-4">
                  <h3 className="font-semibold text-albanix-primary mb-1">{cat.label}</h3>
                  <p className="text-sm text-albanix-textSecondary">{cat.desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={localConsent[cat.id as keyof ConsentCategories]}
                    onChange={() => handleToggle(cat.id as keyof ConsentCategories)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-albanix-blue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-albanix-blue"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-albanix-border bg-albanix-light/50 flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={onRejectOptional}
            className="px-5 py-2.5 text-sm font-semibold text-albanix-textSecondary bg-white border border-albanix-border rounded-md hover:bg-gray-50 transition-colors"
          >
            Reject Optional
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-albanix-primary rounded-md hover:bg-albanix-secondary transition-colors"
          >
            Save Preferences
          </button>
          <button
            onClick={onAcceptAll}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-albanix-blue rounded-md hover:bg-blue-600 transition-colors"
          >
            Accept All
          </button>
        </div>

      </div>
    </div>
  );
}
