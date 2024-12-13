import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addQuestion } from '../features/questionsSlice';
import axios from 'axios';
import { addQuestion } from '../../redux/feature/questionSlice';

const QuestionForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuestion = { title, body };

    // Send to backend
    const response = await axios.post('http://localhost:5000/api/questions', newQuestion);
    dispatch(addQuestion(response.data)); // Update Redux store
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Question Title"
        className="border p-2 w-full mb-2"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Describe your question..."
        className="border p-2 w-full mb-2"
        required
      />
      <button type="submit" className="bg-green-600 text-white p-2">Submit Question</button>
    </form>
  );
};

export default QuestionForm;