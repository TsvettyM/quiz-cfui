export default function handler(req, res) {
  const quiz = [
    {
      question: "What is the capital of France?",
      options: [
        { name: "Paris", isCorrect: true },
        { name: "London", isCorrect: false },
        { name: "Berlin", isCorrect: false },
        { name: "Madrid", isCorrect: false },
      ],
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: [
        { name: "Japan", isCorrect: true },
        { name: "China", isCorrect: false },
        { name: "South Korea", isCorrect: false },
        { name: "Thailand", isCorrect: false },
      ],
    },
    {
      question: "What is the largest country by area?",
      options: [
        { name: "Russia", isCorrect: true },
        { name: "Canada", isCorrect: false },
        { name: "United States", isCorrect: false },
        { name: "China", isCorrect: false },
      ],
    },
    {
      question: "Which country has the most population?",
      options: [
        { name: "China", isCorrect: true },
        { name: "India", isCorrect: false },
        { name: "United States", isCorrect: false },
        { name: "Indonesia", isCorrect: false },
      ],
    },
    {
      question: "Which country is known for inventing the pizza?",
      options: [
        { name: "Italy", isCorrect: true },
        { name: "France", isCorrect: false },
        { name: "Spain", isCorrect: false },
        { name: "Greece", isCorrect: false },
      ],
    },
    {
      question: "Which country is home to the kangaroo?",
      options: [
        { name: "Australia", isCorrect: true },
        { name: "New Zealand", isCorrect: false },
        { name: "South Africa", isCorrect: false },
        { name: "India", isCorrect: false },
      ],
    },
    {
      question: "Which country is known for the Eiffel Tower?",
      options: [
        { name: "France", isCorrect: true },
        { name: "Germany", isCorrect: false },
        { name: "Spain", isCorrect: false },
        { name: "Italy", isCorrect: false },
      ],
    },
    {
      question: "Which country is famous for its maple syrup?",
      options: [
        { name: "Canada", isCorrect: true },
        { name: "United States", isCorrect: false },
        { name: "Finland", isCorrect: false },
        { name: "Norway", isCorrect: false },
      ],
    },
    {
      question: "Which country is known for the Great Wall?",
      options: [
        { name: "China", isCorrect: true },
        { name: "Japan", isCorrect: false },
        { name: "India", isCorrect: false },
        { name: "South Korea", isCorrect: false },
      ],
    },
    {
      question: "Which country is known as the birthplace of democracy?",
      options: [
        { name: "Greece", isCorrect: true },
        { name: "Italy", isCorrect: false },
        { name: "United Kingdom", isCorrect: false },
        { name: "United States", isCorrect: false },
      ],
    },
  ];

  res.status(200).json(quiz);
}
