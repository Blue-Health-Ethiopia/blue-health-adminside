import React from 'react';
import LinkNav from '../components/features/LinkNav';
import {
  CEUInput,
  HighlightInput,
  TextInput,
} from '../components/common/Inputs';
import {
  CancelIcon,
  CaseIcon,
  LapTopIcon,
  LinkIcon,
  PersonIcon,
  RightArrowIcon,
} from '../assets/Icons/Icons';
import CEU from '../assets/Icons/CEU.png';
import ImageUploader from '../components/common/ImageUploader';
import { EditButton } from '../components/common/Button';

const CreateSeminar = () => {
  return (
    <div className="mt-20 m-3 flex w-full">
      <div className="flex flex-col w-2/3 gap-8 mr-8">
        {' '}
        <LinkNav />
        <TextInput
          placeholder={'Virtual Seminar Title'}
          icon={<LapTopIcon />}
        />
        <TextInput placeholder={'Presenter Name'} icon={<PersonIcon />} />
        <HighlightInput placeholder={'Occupations'} icon={<CaseIcon />} />
        <CEUInput
          placeholder={'CEU Point'}
          icon={<img className="w-5" src={CEU} alt="" />}
        />
        <TextInput placeholder={'Zoom Link'} icon={<LinkIcon />} />
        <div className='flex w-full gap-10 justify-start'>
          <EditButton placeholder={'Cancel'} icon={<CancelIcon className='text-lg'/>} />
          <EditButton placeholder={'Next'} icon={<RightArrowIcon className='text-lg'/>} />
        </div>
      </div>
      <div className="flex flex-col justify-start items-center mt-14 w-1/2 gap-8">
        <ImageUploader />
      </div>
    </div>
  );
};

export default CreateSeminar;
