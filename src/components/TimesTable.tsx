import React from 'react';

interface TimesTableProps {
  number: number;
  isFlipped: boolean;
  onFlip: () => void;
}

export function TimesTable({ number, isFlipped, onFlip }: TimesTableProps) {
  return (
    <div
      className="relative aspect-square cursor-pointer perspective group"
      onClick={onFlip}
    >
      <div
        className={`absolute inset-0 transition-all duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        } group-hover:shadow-2xl`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-500 transition-colors">
          <div className="text-center p-2 sm:p-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-1 sm:mb-2 md:mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">{number}</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              Times Table
            </h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1 md:mt-2">Click to flip</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-y-auto border border-gray-100 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-500 transition-colors">
          <div className="p-1 sm:p-2 md:p-4">
            <ul className="space-y-0.5 sm:space-y-1 md:space-y-2">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((multiplier) => (
                <li
                  key={multiplier}
                  className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200 text-center py-0.5 sm:py-1 md:py-2 border-b dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded transition-colors"
                >
                  {number} × {multiplier} ={' '}
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    {number * multiplier}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}