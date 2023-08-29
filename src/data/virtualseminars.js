import sample from '../assets/Sample Image.jpg';

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
  },
  {
    id: 2,
    title: 'Virtual Seminar-2',
    name: '',
    occupations: '',
    activeState: 'Active',
    people: '45',
    image: sample,
    date: currentDate,
  },
];