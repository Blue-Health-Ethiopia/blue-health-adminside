import { SeminarForm } from '../components/form/SeminarForm';
import React, { useEffect, useState } from 'react';
import LinkNav from '../components/features/LinkNav';
import { CancelIcon, RightArrowIcon } from '../assets/Icons/Icons';
import ImageUploader from '../components/common/ImageUploader';
import { EditButton } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createSeminar } from '../redux/actions';

const CreateSeminar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [highlightedWords, setHighlightedWords] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [seminar, setSeminar] = useState({
    id: 3,
    title: '',
    name: '',
    ceu: '',
    link: '',
    activeState: 'Active',
    people: '45',
    occupations: '',
    image: uploadedImage,
    date: '',
  });

  const handleTitle = (e) => {
    setSeminar({
      ...seminar,
      title: e.target.value,
    });
  };
  const handleCEU = (e) => {
    setSeminar({
      ...seminar,
      ceu: e.target.value,
    });
  };
  const handleImage = (imageData) => {
    setUploadedImage(imageData);
  };
  const handleLink = (e) => {
    setSeminar({
      ...seminar,
      link: e.target.value,
    });
  };
  const handlePresenter = (e) => {
    setSeminar({
      ...seminar,
      name: e.target.value,
    });
  };

  useEffect(() => {
    setSeminar((prevSeminar) => ({
      ...prevSeminar,
      occupations: highlightedWords.join(','),
    }));
  }, [highlightedWords]);

  const createVirtualSeminar = () => {
  const seminarData = {
      id: seminar.id + 1,
      title: seminar.title,
      name: seminar.name,
      occupations: seminar.occupations,
      activeState: seminar.activeState,
      people: seminar.people,
      ceu: seminar.ceu,
      link: seminar.link,
      image: uploadedImage,
    };
    dispatch(createSeminar(seminarData));
    navigate('/virtualseminar');
  };
  return (
    <div className="mt-20 m-3 flex w-full">
      <div className="flex flex-col w-2/3 gap-8 mr-8">
        {' '}
        <LinkNav />
        <SeminarForm
          handleTitle={handleTitle}
          handlePresenter={handlePresenter}
          highlightedWords={highlightedWords}
          setHighlightedWords={setHighlightedWords}
          handleCEU={handleCEU}
          handleLink={handleLink}
        />
        <div className="flex w-full gap-10 justify-start">
          <EditButton
            onClick={() => navigate('/virtualseminar')}
            placeholder={'Cancel'}
            icon={<CancelIcon className="text-lg" />}
          />
          <EditButton
            onClick={createVirtualSeminar}
            placeholder={'Create'}
            icon={<RightArrowIcon className="text-lg" />}
          />
        </div>
      </div>
      <div className="flex flex-col justify-start items-center mt-14 w-1/2 gap-8">
        <ImageUploader onImageUpload={handleImage} />
      </div>
    </div>
  );
};

export default CreateSeminar;
