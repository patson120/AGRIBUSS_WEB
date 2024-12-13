import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addAnswer } from '../features/answersSlice';
import axios from 'axios';
import { addAnswer } from '../../redux/feature/answerSlice';

const AnswerForm = ({ questionId }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAnswer = { content };

    const response = await axios.post(`http://localhost:5000/api/questions/${questionId}/answers`, newAnswer);
    dispatch(addAnswer(response.data)); // Update Redux store
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Your Answer..."
        className="border p-2 w-full mb-2"
        required
      />
      <button type="submit" className="bg-green-600 text-white p-2">Submit Answer</button>
    </form>
  );
};

export default AnswerForm;