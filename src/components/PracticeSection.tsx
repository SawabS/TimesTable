import React, { useState } from 'react';

export function PracticeSection() {
  const [question, setQuestion] = useState<{ num1: number; num2: number } | null>(
    null
  );
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<{
    message: string;
    isCorrect: boolean;
  } | null>(null);

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 11) + 2;
    const num2 = Math.floor(Math.random() * 12) + 1;
    setQuestion({ num1, num2 });
    setAnswer('');
    setFeedback(null);
  };

  const checkAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question) return;

    const isCorrect = parseInt(answer) === question.num1 * question.num2;
    setFeedback({
      message: isCorrect ? 'Correct!' : 'Try again!',
      isCorrect,
    });

    if (isCorrect) {
      setTimeout(generateQuestion, 1000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 mt-8 sm:mt-12 border border-gray-100 dark:border-gray-700">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
        Practice Your Skills
      </h2>

      <button
        onClick={generateQuestion}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl mb-4 sm:mb-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        Generate Question
      </button>

      {question && (
        <form onSubmit={checkAnswer} className="space-y-4 sm:space-y-6">
          <div className="text-3xl sm:text-4xl text-center font-bold text-gray-800 dark:text-white">
            {question.num1} × {question.num2} = ?
          </div>

          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter your answer"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Check Answer
          </button>

          {feedback && (
            <div
              className={`text-center text-lg sm:text-xl font-semibold ${
                feedback.isCorrect ? 'text-green-500' : 'text-red-500'
              } animate-bounce`}
            >
              {feedback.message}
            </div>
          )}
        </form>
      )}
    </div>
  );
}