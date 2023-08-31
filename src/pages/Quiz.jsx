import React from 'react'
import { useLocation } from 'react-router-dom'
import { EditButton } from '../components/common/Button'
import { SaveIcon } from '../assets/Icons/Icons'
import QuizContainer from '../container/Quiz/QuizContainer'
import QuestionAdder from '../container/Quiz/QuestionAdder'

const Quiz = () => {
    const location = useLocation()
    const seminar = location.state?.selectedSeminar || {}

  return (
    <div className="bg-white flex flex-col gap-4 mb-8 rounded-md w-full mt-3 p-3 h-full">
      <div className="flex w-full justify-between items-center">
        {' '}
        <h1 className="text-sm">
          Add a quiz to{' '}
          <span className="font-semibold text-primaryMedium">
            {seminar.title}
          </span>
        </h1>
        <EditButton
          icon={<SaveIcon className="text-lg" />}
          placeholder={'Save'}
        />
      </div>
      <div className="w-full h-[2px] bg-backgroundDim" />
      <div className='flex w-full justify-between'>
        <QuizContainer />
        <QuestionAdder />
      </div>
    </div>
  );
}

export default Quiz