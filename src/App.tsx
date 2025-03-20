import { useState } from 'react';
import GameOver from './components/GameOver';
import NewGame from './components/NewGame';
import { QUESTIONS } from './data/QuestionsData';
import { GameState } from './types/quiz';
import QuestionCard from './components/questions';

function App() {
  const handleStart = () => {
    setGameState('Playing');
  };
  // const handleAnswer = (index: number) => {
  //   setSelectedAnswer(index);
  // };
  const [gameState, setGameState] = useState<GameState>('Playing');
  // const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  return (
    <div className='min-h-screen bg-gray-50 py-12 sm:px-6 lg:px-8'>
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        {gameState === 'Start' && <NewGame onStart={handleStart} />}
        {gameState === 'Playing' && (
          <div className='p-6'>
            <QuestionCard question={QUESTIONS[0]} />
          </div>
        )}
        {gameState === 'End' && <GameOver />}
      </div>
    </div>
  );
}

export default App;
