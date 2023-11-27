import { EditableInput } from '../../components/common/Inputs';
import { LapTopIcon, LinkIcon, PersonIcon } from '../../assets/Icons/Icons';
import { useState } from 'react';
import Toggle from '../../components/features/Toggle';
import CEU from '../../assets/Icons/CEU.png';
import { PeopleList } from '../../components/features/PeopleList';
import { useSelector } from 'react-redux';

const SeminarInformations = ({ seminar }) => {
  
  return (
    <div className="space-y-8">
      <Toggle />
      <EditableInput
        placeholder="Virtual Seminar Title"
        icon={<LapTopIcon />}
        initialText={'title'}
      />
      
      <PeopleList seminar={seminar} />
    </div>
  );
}

export default SeminarInformations