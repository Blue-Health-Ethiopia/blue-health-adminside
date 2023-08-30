import { EditableInput } from '../../components/common/Inputs';
import { LapTopIcon, LinkIcon, PersonIcon } from '../../assets/Icons/Icons';
import { useState } from 'react';
import Toggle from '../../components/features/Toggle';
import CEU from '../../assets/Icons/CEU.png';
import { PeopleList } from '../../components/features/PeopleList';

const SeminarInformations = ({ seminar }) => {
    const [editingStates, setEditingStates] = useState({
      title: false,
      name: false,
      ceu:false
      // Add more fields if needed
    });
  const [title, setTitle] = useState(seminar.title)
  
  const handleTitle = (e) => {
      setTitle(e.target.value)
    }
    const handleEditing = (field) => {
      setEditingStates((prevStates) => ({
        ...prevStates,
        [field]: !prevStates[field],
      }));
  };
  
  return (
    <div className="space-y-8">
      <Toggle />
      <EditableInput
        placeholder="Virtual Seminar Title"
        icon={<LapTopIcon />}
        initialText={title}
        isEditing={editingStates.title}
        toggleEdit={() => handleEditing('title')}
        onChange={(e)=>handleTitle(e)}
      />
      <EditableInput
        placeholder="Virtual Seminar Title"
        icon={<PersonIcon />}
        initialText={seminar.name}
        isEditing={editingStates.name}
        toggleEdit={() => handleEditing('name')}
      />
      <EditableInput
        placeholder="Virtual Seminar Title"
        icon={<img src={CEU} alt='' className='w-5' />}
        initialText={seminar.ceu}
        isEditing={editingStates.ceu}
        toggleEdit={() => handleEditing('ceu')}
      />
      <EditableInput
        placeholder="Virtual Seminar Title"
        icon={<LinkIcon/>}
        initialText={seminar.link}
        isEditing={editingStates.link}
        toggleEdit={() => handleEditing('ceu')}
      />
      <PeopleList seminar={seminar} />
    </div>
  );
}

export default SeminarInformations