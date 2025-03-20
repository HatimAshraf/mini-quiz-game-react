import { useState } from 'react';
import GameOver from './components/game-over';
import NewGame from './components/new-game';
import { QUESTIONS } from './data/questions';
import { GameState } from './types/quiz';
import QuestionCard from './components/questions';

function App() {
  const handleStart = () => {
    setGameState('Playing');
  };
  const [gameState, setGameState] = useState<GameState>('Start');
  return (
    <>
      {gameState === 'Start' && <NewGame onStart={handleStart} />}
      {gameState === 'Playing' && <QuestionCard question={QUESTIONS[0]} />}
      {gameState === 'End' && <GameOver />}
    </>
  );
}

export default App;
