import { useEffect, useState } from 'react';
import GameOver from './components/GameOver';
import QuestionCard from './components/questions';
import StartScreen from './components/NewGame';
import { GameState } from './types/quiz';
import { QUESTIONS } from './data/QuestionsData';
import Timer from './components/Timer';

function App() {
  const [gameState, setGameState] = useState<GameState>('Start');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(45);

  useEffect(() => {
    let timer: number;
    if (gameState === 'Playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'Playing') {
      setGameState('End');
    }
    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  const handleStart = () => {
    setGameState('Playing');
    setTimeLeft(30);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
  };

  const handleAnswer = (index: number): void => {
    setSelectedAnswer(index);
    const isCorrect = index === QUESTIONS[currentQuestion].answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setGameState('End');
      }
    }, 1500);
  };

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        {gameState === 'Start' && <StartScreen onStart={handleStart} />}
        {gameState === 'Playing' && (
          <div className='p-8'>
            <Timer timeLeft={timeLeft} />
            <QuestionCard
              question={QUESTIONS[currentQuestion]}
              onAnswerSelect={handleAnswer}
              selectedAnswer={selectedAnswer}
              totalQuestions={QUESTIONS.length}
              currentQuestion={currentQuestion}
            />
            <div className='mt-6 text-center text-gray-600'>
              Score: {score}/{QUESTIONS.length}
            </div>
          </div>
        )}
        {gameState === 'End' && (
          <GameOver
            score={score}
            totalQuestions={QUESTIONS.length}
            onRestart={handleStart}
          />
        )}
      </div>
    </div>
  );
}

export default App;
