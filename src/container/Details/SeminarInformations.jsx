import { EditableInput } from '../../components/common/Inputs';
import { LapTopIcon, PersonIcon } from '../../assets/Icons/Icons';
import { useState } from 'react';
import Toggle from '../../components/features/Toggle';

const SeminarInformations = ({ seminar }) => {
    const [editingStates, setEditingStates] = useState({
      title: false,
      name: false,
      // Add more fields if needed
    });

    const handleEditing = (field) => {
      setEditingStates((prevStates) => ({
        ...prevStates,
        [field]: !prevStates[field],
      }));
    };
  return (
      <div className='space-y-8'>
    <Toggle/>
      <EditableInput
        placeholder="Virtual Seminar Title"
        icon={<LapTopIcon />}
        text={seminar.title}
        isEditing={editingStates.title}
        toggleEdit={()=>handleEditing('title')}
      />
      <EditableInput
        placeholder="Virtual Seminar Title"
        icon={<PersonIcon />}
        text={seminar.name}
        isEditing={editingStates.name}
        toggleEdit={()=>handleEditing('name')}
      />
      {/* <h2>
        Title:{' '}
        {isEditing ? (
          <input
            value={editedSeminar.title}
            onChange={(e) => handleFieldChange('title', e.target.value)}
          />
        ) : (
          seminar.title
        )}
      </h2> */}
   
    </div>
  );
}

export default SeminarInformations