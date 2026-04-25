import { useState, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export function ComboBox({ options = [], value, onChange, placeholder, name, error }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");

  // Sync when external value is cleared (e.g. form reset)
  useEffect(() => {
    if (!value) setInputValue("");
    else setInputValue(value);
  }, [value]);

  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (option) => {
    setInputValue(option);
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value !== value) {
      onChange({ target: { name, value: "" } });
    }
    setIsOpen(true);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
          placeholder={placeholder}
          autoComplete="off"
          className={`w-full font-body text-sm text-charcoal bg-white border px-4 py-3 pr-10 rounded transition-colors duration-200 placeholder-charcoal/30 focus:outline-none focus:border-ochre ${
            error ? "border-red-400" : "border-white/20 hover:border-white/40"
          }`}
        />
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setIsOpen((o) => !o)}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-charcoal/40 hover:text-charcoal/70 transition-colors"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-navy/12 rounded shadow-xl max-h-52 overflow-auto">
          {filtered.length > 0 ? (
            filtered.map((option) => (
              <div
                key={option}
                onMouseDown={() => handleSelect(option)}
                className="px-4 py-2.5 cursor-pointer hover:bg-pearl flex items-center justify-between font-body text-sm text-charcoal transition-colors duration-100"
              >
                <span>{option}</span>
                {value === option && (
                  <Check className="h-3.5 w-3.5 text-ochre flex-shrink-0" />
                )}
              </div>
            ))
          ) : (
            <div className="px-4 py-2.5 font-body text-sm text-charcoal/50">
              No options found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ComboBox;
