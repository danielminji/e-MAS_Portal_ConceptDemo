'use client';

import { useState } from 'react';
import { X, Info } from 'lucide-react';

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Info className="h-4 w-4 flex-shrink-0" />
            <p>
              <strong>Concept Demo</strong> — This is a portfolio project for interview purposes. 
              Not affiliated with e-MAS or any real healthcare provider.
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors flex-shrink-0"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
