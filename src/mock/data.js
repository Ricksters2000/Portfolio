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
  subtitle: 'Full Stack Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '', // 'profile.jpg',
  paragraphOne: `Hello, I am a passionate developer capable of working on both solo and team projects. I have graduated from Middlesex Community College with a Computer Information and Systems degree and have then continued to learn more on full stack development on my own.`,
  paragraphTwo: 'I have experience creating websites using html and css with javascript, as well as using frameworks like react and created rest APIs by using nodejs with express. Always eager to learning more in this field to create better projects and improve myself even further.',
  paragraphThree: ' ',
  resume: '', // 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'boardChat',
    title: 'Board Chat',
    info: 'This web app uses web sockets to allow users to communicate to each other through text. This as well has a feature to allow users to invite each other to a game like checkers. Users can create an account to have their own username and image displayed as well as to keep track of their wins.',
    info2: '[html, css, javascript, react, express]',
    url: 'https://board-chat-client.herokuapp.com/',
    repo: 'https://github.com/Ricksters2000/board-chat-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'aStar',
    title: 'A* Visualizer',
    info: 'This implements the A* algorithm to display it in a grid. The user is able to change the size of the grid and how many tiles there are as well as change the position of the end point.',
    info2: '[html, css, javascript]',
    url: 'https://ricksters2000.github.io/a-star-js/',
    repo: 'https://github.com/Ricksters2000/a-star-js', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smartBrain',
    title: 'Smart Brain',
    info: 'This implements a face detection api from Clarifai in order to allow users to paste a link of an image and display where the faces are located at. Users can as well create an account to allow them to keep track of the amount of times they entered in an image to detect any faces.',
    info2: '[html, css, typescript, react, redux, express]',
    url: 'https://smart-brain-3-0.herokuapp.com/home',
    repo: 'https://github.com/Ricksters2000/smart-brain-ts', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '2000rvelez@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Ricksters2000',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
