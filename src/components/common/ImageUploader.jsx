import React from 'react';
import upload from '../../assets/Icons/Upload.png'
import { ExchangeIcon, UploadIcon } from '../../assets/Icons/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { setImageName, setSelectedImage } from '../../redux/actions/imageActions';

const ImageUploader = () => {
   const dispatch = useDispatch();
   const selectedImage = useSelector((state) => state.image.selectedImage);
   const imageName = useSelector((state) => state.image.imageName);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        dispatch(setSelectedImage(e.target.result));
        dispatch(setImageName(file.name));
      };
        reader.readAsDataURL(file);
        setImageName(file.name);
    }
  };

    return (
      <div className="flex flex-col justify-start items-center w-full gap-3">
        <div className="w-4/5 mx-auto bg-backgroundDim rounded-md">
          <div className="flex flex-col items-center ">
            <label htmlFor="imageUpload" className="cursor-pointer">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="w-full h-72 object-cover rounded-md"
                />
              ) : (
                <div className="w-4/5 h-72 flex items-center justify-center border-gray-300 rounded-lg">
                  <img className="w-full opacity-50" src={upload} alt="" />
                </div>
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
        </div>
        <h1 className="text-primary flex text-sm font-bold capitalize w-fit tracking-wider text-center">
          {imageName}
        </h1>
        <label
          htmlFor="imageUpload"
          className="cursor-pointer text-sm text-primary border border-primary rounded-md p-2 hover:bg-primary hover:text-white duration-200 tracking-wider"
        >
          {selectedImage ? (
            <span className="flex items-center gap-3">
              <ExchangeIcon className="text-lg" />
              Change Image
            </span>
          ) : (
            <span className="flex items-center gap-3">
              <UploadIcon className="text-lg" />
              Upload Image
            </span>
          )}
        </label>
      </div>
    );
};

export default ImageUploader;
