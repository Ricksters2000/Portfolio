import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ricardo', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ricardo',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '', // 'profile.jpg',
  paragraphOne: `I'm a passionate developer and always wanting to learn more. `,
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: ['project.jpg', 'project.jpg', 'project.jpg'],
    title: 'Board Chat',
    info: 'This web app uses web sockets to allow users to communicate to each other through text. This as well has a feature to allow users to invite each other to a game like checkers. Users can create an account to have their own username and image displayed as well as to keep track of their wins.',
    info2: '[html, css, javascript, react, express]',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: ['project.jpg', 'project.jpg', 'project.jpg', 'project.jpg'],
    title: 'A* Visualizer',
    info: 'This implements the A* algorithm to display it in a grid. The user is able to change the size of the grid and how many tiles there are as well as change the position of the end point.',
    info2: '[html, css, javascript]',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Smart Brain',
    info: 'This implements a face detection api from Clarifai in order to allow users to paste a link of an image and display where the faces are located at. Users can as well create an account to allow them to keep track of the amount of times they entered in an image to detect any faces.',
    info2: '[html, css, typescript, react, redux, express]',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
