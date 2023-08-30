import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ParticipantContainer from '../container/ParticipantContainer';

const Peoples = () => {
    const location = useLocation()
    const seminarData = location.state?.seminarData || {};
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return (
      <>
        <h1 className="font-bold text-xl tracking-[0.3rem]">Participants</h1>
        <ParticipantContainer seminar={seminarData} />
      </>
    );
}

export default Peoples