import { TimerIcon } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
}
export default function Timer({ timeLeft }: TimerProps) {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };
  return (
    <div className='flex items-center justify-center space-x-2 text-2xl font-bold text-gray-700 mb-8'>
      <TimerIcon className='w-6 h-6' />
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
}
