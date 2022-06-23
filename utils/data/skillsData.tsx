import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';

export const skills = [
  {
    id: 1,
    title: 'Basic',
    skills: [
      {
        id: 1,
        name: 'HTML',
        icon: <AiFillHtml5 className='skillIcon' />,
      },
      {
        id: 2,
        name: 'CSS',
        icon: <IoLogoCss3 className='skillIcon' />,
      },
    ],
  },
  {
    id: 2,
    title: 'Languajes',
    skills: [
      {
        id: 3,
        name: 'Javascript',
        icon: <IoLogoJavascript className='skillIcon' />,
      },
      {
        id: 4,
        name: 'TypeScript',
        icon: <SiTypescript className='skillIcon' />,
      },
    ],
  },
];
