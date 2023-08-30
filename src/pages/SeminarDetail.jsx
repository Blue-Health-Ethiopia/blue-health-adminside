import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SeminarPresenter from '../container/Details/SeminarPresenter';
import SeminarInformations from '../container/Details/SeminarInformations';
import LinkNav from '../components/features/LinkNav';

const SeminarDetail = () => {
  const {seminarID}=useParams()
  const seminars=useSelector(state=>state.seminars.seminars)
  
  const selectedSeminar=seminars.find((seminar)=>seminar.id===parseInt(seminarID))
    
  return (
    <>
      <div className="flex mb-6">
        <div className="flex-1 ml-3 mt-20 space-y-5">
          <LinkNav />
          <SeminarInformations seminar={selectedSeminar} />
        </div>
        <div className="flex-1 mt-5">
          <SeminarPresenter seminar={selectedSeminar} />
        </div>
      </div>
    </>
  );
}

export default SeminarDetail