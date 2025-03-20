import { Question } from '../types/quiz';

interface questionsProps {
  question: Question;
}
function QuestionCard({ question }: questionsProps) {
  return <div>{JSON.stringify(question)}</div>;
}

export default QuestionCard;
