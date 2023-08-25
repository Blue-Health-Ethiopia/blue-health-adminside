import React from 'react'
import circleLogo from '../../assets/Logos/Logo Circle.png';


const Loading = () => {
    return (
        <div class="lds-default flex items-center justify-center">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <img src={circleLogo} alt="" className='w-10' />
        </div>
    );
}

export default Loading