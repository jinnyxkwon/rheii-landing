/**
 * Custom Dropdown Component
 *
 * Custom dropdown with radio button options matching Figma design
 * - White dropdown box with options
 * - Radio button selection
 * - Click outside to close
 *
 * Design: Extracted from Figma (node-id: 563-4946)
 * Colors: White background, #c6c2be border, radio buttons
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  id?: string;
}

export default function CustomDropdown({
  value,
  onChange,
  options,
  placeholder = 'Select',
  id,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* Dropdown Button */}
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[46px] px-[14px] border border-stone rounded bg-parchment flex items-center justify-between focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay/40 transition-colors"
      >
        <span
          className={`font-sans text-[15px] sm:text-[16px] ${
            value ? 'text-ink' : 'text-mist'
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        {isOpen ? (
          <ChevronUp size={16} className="text-ash" />
        ) : (
          <ChevronDown size={16} className="text-ash" />
        )}
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-[8px] bg-parchment border border-stone rounded overflow-hidden">
          <div className="py-[6px]">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="w-full h-[44px] px-[14px] flex items-center gap-[10px] hover:bg-bone transition-colors"
              >
                {/* Radio Button */}
                <div className="flex items-center justify-center w-[20px] h-[20px]">
                  <div
                    className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center ${
                      value === option.value ? 'border-clay' : 'border-stone'
                    }`}
                  >
                    {value === option.value && (
                      <div className="w-[9px] h-[9px] rounded-full bg-clay" />
                    )}
                  </div>
                </div>

                {/* Option Label */}
                <span className="font-sans text-[15px] sm:text-[16px] text-ink/90">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
