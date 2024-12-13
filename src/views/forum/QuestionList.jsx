import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchQuestions } from '../features/questionsSlice';
import QuestionForm from './QuestionForm';
import { fetchQuestions } from '../../redux/feature/questionSlice';

const QuestionList = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);
  const questionStatus = useSelector((state) => state.questions.status);

  useEffect(() => {
    if (questionStatus === 'idle') {
      dispatch(fetchQuestions());
    }
  }, [dispatch, questionStatus]);

  return (
    <div className="p-4">
      <QuestionForm />
      <h2 className="text-xl mb-4">Questions</h2>
      {questionStatus === 'loading' && <p>Loading...</p>}
      <ul>
        {questions.map((question) => (
          <li key={question._id} className="border p-2 mb-2">
            <h3 className="font-bold">{question.title}</h3>
            <p>{question.body}</p>
            {/* Add link to answer section */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;