import React, { useEffect } from 'react'
import { CEUInput, HighlightInput, TextInput } from '../../components/common/Inputs';
import { CancelIcon, CaseIcon, LapTopIcon, LinkIcon, PersonIcon, RightArrowIcon } from '../../assets/Icons/Icons';
import CEU from '../../assets/Icons/CEU.png';
import { EditButton } from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addLink, addOccupations, addPresenter, addTitle, createSeminar, resetInputs } from '../../redux/actions/seminarActions';
import { resetSelectedImage } from '../../redux/actions/imageActions';
import { clearHighlightedWord } from '../../redux/actions';

const CreateSeminarContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const occupations = useSelector((state) => state.highlightedwords);
  const title = useSelector((state) => state.seminars.virtualSeminarTitle);
  const name = useSelector((state) => state.seminars.presenterName);
  const selectedImage = useSelector((state) => state.image.selectedImage);

 const seminarData = {
   id: 5,
   title: title,
   name: name,
   occupations: occupations,
   activeState: 'Active',
   people: '55',
   image: selectedImage,
   date: '9/6/2023',
   peoples: [],
 };
  const handleTitle = (e) => {
    dispatch(addTitle(e.target.value))
  } 
  const handleName = (e) => {
    dispatch(addPresenter(e.target.value))
  } 
  const handleCeu = (e) => {
    dispatch(addPresenter(e.target.value))
  } 
  const handlelink = (e) => {
    dispatch(addLink(e.target.value))
  }
  useEffect(() => {
    dispatch(addOccupations(occupations))
  }, [dispatch, occupations])
  
  const addSeminar = () => {
    dispatch(createSeminar(seminarData))
    dispatch(resetInputs())
    dispatch(resetSelectedImage());
    dispatch(clearHighlightedWord());
    navigate('/virtualseminar');
  }

  return (
    <div className="flex flex-col w-full gap-4">
      <TextInput
        onChange={(e) => handleTitle(e)}
        placeholder={'Virtual Seminar Title'}
        icon={<LapTopIcon />}
      />
      <TextInput
        onChange={(e) => handleName(e)}
        placeholder={'Presenter Name'}
        icon={<PersonIcon />}
      />
      <HighlightInput placeholder={'Occupations'} icon={<CaseIcon />} />
      <CEUInput
        onChange={(e)=>handleCeu(e)}
        placeholder={'CEU Point'}
        icon={<img className="w-5" src={CEU} alt="" />}
      />
      <TextInput onChange={(e)=>handlelink(e)} placeholder={'Zoom Link'} icon={<LinkIcon />} />
      <div className="flex w-full gap-10 mt-5 justify-start">
        <EditButton
          onClick={() => navigate('/virtualseminar')}
          placeholder={'Cancel'}
          icon={<CancelIcon className="text-lg" />}
        />
        <EditButton
          onClick={()=>addSeminar()}
          placeholder={'Create'}
          icon={<RightArrowIcon className="text-lg" />}
        />
      </div>
    </div>
  );
};

export default CreateSeminarContainer