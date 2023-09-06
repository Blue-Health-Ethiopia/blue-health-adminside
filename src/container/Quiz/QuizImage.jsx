import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetImage, setQuizImage, setQuizImageName, } from '../../redux/actions/imageActions';
import UploadIcon  from '../../assets/Icons/Upload.png';
import { TrashIcon } from '../../assets/Icons/Icons';

const QuizImage = () => {
   const dispatch = useDispatch();
   const selectedImage = useSelector((state) => state.image.selectedQuizImage);
   
     const handleImageChange = (event) => {
       const file = event.target.files[0];
       if (file) {
         const reader = new FileReader();
         reader.onload = (e) => {
           dispatch(setQuizImage(e.target.result));
           dispatch(setQuizImageName(file.name));
         };
         reader.readAsDataURL(file);
         setQuizImageName(file.name);
       }
    };
    
    const handleClearImage = (e) => {
        e.preventDefault()
        dispatch(resetImage())
    }
  return (
    <div>
      <label htmlFor="imageUpload" className="cursor-pointer">
        {selectedImage ? (
          <div className="relative bg-slate-950 w-full h-48 rounded-md">
            <img
              src={selectedImage}
              alt="Uploaded"
              className="w-full opacity-80 h-full hover:opacity-50 duration-200 object-cover rounded-md"
            />
            <p
              className="absolute p-2 hover:opacity-50 duration-200 text-base hover:text-red-400 z-50 top-0 text-white shadow-lg rounded-md"
              onClick={(e) => {
                handleClearImage(e);
              }}
            >
              <TrashIcon/>
            </p>
          </div>
        ) : (
          <>
            <div className="w-full h-32 flex flex-col gap-4 items-center justify-center border-gray-300 rounded-lg">
              <img className="w-12 opacity-50" src={UploadIcon} alt="" />
              <h1 className="text-xs text-primary tracking-widest">
                Upload an image
              </h1>
            </div>
          </>
        )}
      </label>
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default QuizImage