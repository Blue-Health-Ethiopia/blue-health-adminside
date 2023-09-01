import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SeminarPresenter from '../container/Details/SeminarPresenter';
import SeminarInformations from '../container/Details/SeminarInformations';
import LinkNav from '../components/features/LinkNav';
import { EditButton } from '../components/common/Button';
import { QuizIcon } from '../assets/Icons/Icons';

const SeminarDetail = () => {
  const { seminarID } = useParams()
  const navigate=useNavigate()
  const seminars=useSelector(state=>state.seminars.seminars)  
  const quizs = useSelector((state) => state.quiz.quizs); 
  
  const selectedSeminar = seminars.find((seminar) => seminar.id === parseInt(seminarID))
  
  const handleQuizNavigation = () => {
    navigate('/quiz',{state:{selectedSeminar:selectedSeminar}})
  }
  
  useEffect(() => {
   window.scrollTo(0,0)
  })
  

  return (
    <>
      {quizs.length === 0 ? (
        <EditButton
          onClick={() => handleQuizNavigation()}
          icon={<QuizIcon className="text-lg" />}
          className="ml-3"
          placeholder={'Add a quiz'}
        />
      ) : (
        <>
          <EditButton
            onClick={() => handleQuizNavigation()}
            icon={<QuizIcon className="text-lg" />}
            className="ml-3"
            placeholder={'EDIT QUIZ'}
          />
          <p className="mt-1 capitalize text-xs text-primary">
            Quiz has already been added to this seminar !
          </p>
        </>
      )}
      <div className="flex mb-4">
        <div className="flex-1 ml-3 mt-8 space-y-5">
          <LinkNav />
          <SeminarInformations seminar={selectedSeminar} />
        </div>
        <div className="flex-1 mt-0">
          <SeminarPresenter seminar={selectedSeminar} />
        </div>
      </div>
    </>
  );
}

export default SeminarDetail