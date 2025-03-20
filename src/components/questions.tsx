import { useState } from 'react';
import { Question } from '../types/quiz';

interface questionsProps {
  question: Question;
}

function QuestionCard({ question }: questionsProps) {
  function addClass(index: number): string {
    if (comSelectedAnswer === null) return 'hover:bg-gray-100';
    if (index === question.answer) return 'bg-green-100 border-green-500';
    if (comSelectedAnswer === index) return 'bg-red-100 border-red-500';
    return 'opacity-50';
  }

  const [comSelectedAnswer, setComSelectedAnswer] = useState<number | null>(
    null
  );
  return (
    <div>
      <h2 className='text-xl font-semibold text-gray-800 mb-2'>
        Question 1 of 5
      </h2>
      <p className=' text-gray-600 mb-4'>{question.question}</p>
      <div className='space-y-3'>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setComSelectedAnswer(index)}
            className={`w-full p-4 text-left border rounded-md ${addClass(
              index
            )}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
