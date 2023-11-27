import LinkNav from '../components/features/LinkNav';
import ImageUploader from '../components/common/ImageUploader';
import CreateSeminarContainer from '../container/Virtual Seminar/CreateSeminarContainer';

const CreateSeminar = () => {
 
  return (
    <div className="mt-20 m-3 gap-6 flex flex-col w-full">
      <LinkNav />
      <div className="flex w-full gap-10 justify-start">
        <CreateSeminarContainer />
        <ImageUploader />
      </div>
    </div>
  );
};

export default CreateSeminar;
