import React from 'react'

const SeminarPresenter = ({seminar}) => {
    
    return (
      <>
        <div className="w-full h-72 rounded-md">
          <img
            className="object-cover w-full h-full rounded-md"
            src={seminar.image}
            alt=""
          />
            </div>
        <div className='p-3'>
           {seminar.occupations}     
        </div>
      </>
    );
}

export default SeminarPresenter