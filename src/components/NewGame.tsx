import { Play } from 'lucide-react';

interface NewGameProps {
  onStart: () => void;
}

function NewGame({ onStart }: NewGameProps) {
  return (
    <div className='text-center p-8'>
      <h1 className='text-4xl font-bold text-gray-800 mb-6'>Quiz Game</h1>
      <p className='text-gray-800 mb-8'>
        Test your knowledge with this 10 question quiz.
      </p>
      <button
        onClick={onStart}
        className='inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-md cursor-pointer'
      >
        <Play className='w-5 h-5 mr-2 ' /> Start Quiz
      </button>
    </div>
  );
}

export default NewGame;
