import React, { useState } from 'react';
import Header from './../../Reuseable/Header';

const NewsFeed = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = () => {};
  return (
    <div>
      <Header pageName="NewsFeed" onSearch={handleSearch} />
      <div className="flex flex-col ml-20 mt-36">
        <div className="flex space-x-10">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
            id="imagePicker"
          />
          <label
            htmlFor="imagePicker"
            className="flex items-center justify-center w-64 h-64 bg-gray-200 border-4 border-white hover:border-secondary rounded-lg cursor-pointer"
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-fit h-fit object-cover"
              />
            ) : (
              <span className="text-primary font-semibold">
                Select an Image
              </span>
            )}
          </label>
          <textarea
            name=""
            id=""
            cols="80"
            rows="10"
            className="rounded-lg p-2 outline-none border-2 border-primary active:border-secondary  focus:border-secondary  hover:border-secondary "
            placeholder="Enter the News here"
          />
        </div>

        <div className="flex justify-start m-5">
          <button className="border-2 flex border-primary p-2 font-semibold ml-5 text-primary hover:bg-secondary hover:border-white hover:text-white">
            Post News
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
