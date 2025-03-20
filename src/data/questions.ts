import { Question } from "../types/quiz";

export const QUESTIONS : Question[] = [
  {
    question: "What is JSX in React?",
    options: [
      "A JavaScript XML syntax",
      "A state management tool",
      "A new HTML version",
      "A CSS preprocessor"
    ],
    answer: 0
  },
  {
    question: "Which hook is used to handle side effects in React?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: 1
  },
  {
    question: "What does `useRef` return?",
    options: ["A mutable object", "A function", "An array", "A boolean value"],
    answer: 0
  },
  {
    question: "What is the purpose of React keys in lists?",
    options: [
      "To identify list elements uniquely",
      "To improve performance",
      "To update the state",
      "To define props"
    ],
    answer: 0
  },
  {
    question: "Which method is used to pass data from a parent to a child component?",
    options: ["useState", "props", "context", "useReducer"],
    answer: 1
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "A copy of the real DOM",
      "A database for React",
      "A tool for styling components",
      "A backend framework"
    ],
    answer: 0
  },
  {
    question: "Which React hook is used to memoize values?",
    options: ["useMemo", "useEffect", "useContext", "useState"],
    answer: 0
  },
  {
    question: "How do you create a functional component in React?",
    options: [
      "function MyComponent() {}",
      "class MyComponent extends React.Component {}",
      "React.createComponent()",
      "new ReactComponent()"
    ],
    answer: 0
  },
  {
    question: "Which of these is NOT a React hook?",
    options: ["useState", "useProps", "useEffect", "useContext"],
    answer: 1
  },
  {
    question: "How can you conditionally render a component in React?",
    options: [
      "Using the ternary operator",
      "Using a switch statement",
      "Using a for loop",
      "Using setTimeout()"
    ],
    answer: 0
  }
];
