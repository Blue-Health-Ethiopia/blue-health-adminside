import sample from '../assets/Sample Image.jpg';
import sample_1 from '../assets/Sample_1.jpg';

function getCurrentDate() {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(currentDate.getFullYear()).slice(-2); // Last two digits of the year

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
  const currentDate = getCurrentDate();

export const virtualseminars = [
  {
    id: 1,
    title: 'Virtual Seminar-1',
    name: '',
    occupations: '',
    activeState: 'Active',
    people: '55',
    image: sample,
    date: currentDate,
    peoples: [
      {
        participant: 'Dr Strange',
        date: currentDate,
        image: sample_1,
      },
      {
        participant: 'Participant-2',
        date: currentDate,
        image: sample_1,
      },
      {
        participant: 'Strange-3',
        date: currentDate,
        image: sample_1,
      },
      {
        participant: 'Tha Strange',
        date: currentDate,
        image: sample_1,
      },
    ],
  },
  {
    id: 2,
    title: 'Virtual Seminar-2',
    name: '',
    occupations: '',
    activeState: 'Active',
    people: '45',
    peoples: [
      {
        participant: 'Participant-1',
        date: currentDate,
        image: sample_1,
      },
      {
        participant: 'Participant-2',
        date: currentDate,
        image: sample_1,
      },
      {
        participant: 'Participant-3',
        date: currentDate,
        image: sample_1,
      },
      {
        participant: 'Participant-',
        date: currentDate,
        image: sample_1,
      },
      {
        participant: 'Participant-',
        date: currentDate,
        image: sample_1,
      },
      {
        participant: 'Participant-',
        date: currentDate,
        image: sample_1,
      },
    ],
    image: sample,
    date: currentDate,
  },
];