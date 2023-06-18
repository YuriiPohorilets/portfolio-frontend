export const aboutInfo = {
  intro:
    "I'm a Junior Frontend Developer and master JavaScript, React, and Node.js. In addition, I have experience in implementing both individual and team projects. ",
  main: 'During my studies (1 year), I managed to work in a team on 3 projects. I also successfully performed the role of team lead on some projects.',
  conclusion:
    "I'm fond of developing and getting new knowledge. I'm looking for a full-time job. It's important to me to grow as a Frontend Developer and put into practice my knowledge in JS and React.",
  techSkills: [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MUI',
    'Tailwind',
  ],

  softSkills: ['Attentiveness', 'Autonomous', 'Analytical thinking', 'Quicklearning'],
};

export const projectsList = [
  {
    id: 100,
    title: 'Superheroes',
    description:
      'This is a simple SPA that allows users to view superheroes, their descriptions, photos, superpowers, and phrases. Users can create new superheroes, edit and delete existing ones. There is validation during the creation or editing of a hero. Images are stored in cloud. The application is developed using the MERN stack.',
    techSkills: [
      'React',
      'Formik',
      'Yup',
      'MUI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Joi',
      'Jest',
    ],
    imgUrl:
      'https://res.cloudinary.com/dixdf3mkj/image/upload/v1686673816/public/proj-1_n9jbci.jpg',
    demoUrl: 'https://yuriipohorilets.github.io/superheroes-test-task_client/',
    sources: [
      { type: 'Frontend', url: 'https://github.com/YuriiPohorilets/superheroes-test-task_client' },
      { type: 'Backend', url: 'https://github.com/YuriiPohorilets/superheroes-test-task_server' },
    ],
    date: '26 May 2023',
  },

  {
    id: 99,
    title: 'Tweets',
    description:
      'It`s a simple app with a nice design for managing tweets, with the ability to filter by status and pagination.',
    techSkills: ['React', 'MUI', 'REST API', 'LocalStorage'],
    imgUrl:
      'https://res.cloudinary.com/dixdf3mkj/image/upload/v1686674048/public/proj-2_cydv13.jpg',
    demoUrl: 'https://yuriipohorilets.github.io/test-task-tweets/',
    sources: [
      { type: 'Frontend', url: 'https://github.com/YuriiPohorilets/test-task-tweets' },
      { type: 'Backend', url: null },
    ],
    date: '16 April 2023',
  },

  {
    id: 98,
    title: 'Petly (team project)',
    description:
      'It is a web application designed to find and select a pet for adoption. Users can view different animal profiles, search by different criteria, save their favorite lists. Registered users can create their ads and add their pets to their profile. Edit user profile, personal information, photo. Validation form data. The application is developed using the MERN stack. In a team project, on this project, I held the role of Team leader backend side',
    techSkills: [
      'React',
      'ReduxToolkit',
      'Yup',
      'Formik',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Joi',
      'Swagger',
    ],
    imgUrl:
      'https://res.cloudinary.com/dixdf3mkj/image/upload/v1686674260/public/proj-3_ydel2j.jpg',
    demoUrl: 'https://kirill-filonchuk.github.io/pet_team02/',
    sources: [
      { type: 'Frontend', url: 'https://github.com/YuriiPohorilets/petsupport-project-03' },
      { type: 'Backend', url: 'https://github.com/YuriiPohorilets/fs-55-project-3-backend' },
    ],
    date: '31 March 2023',
  },

  {
    id: 97,
    title: 'Phonebook',
    description:
      'SPA application for saving and sorting your contacts. The application allows you to create an account and save, delete or filter your contacts in one place. Nice design, simple functionality. You can use the demo credentials for review app.',
    techSkills: ['React', 'ReduxToolkit', 'Axios', 'Formik', 'Yup', 'StyledComponents'],
    imgUrl:
      'https://res.cloudinary.com/dixdf3mkj/image/upload/v1686674770/public/proj-4_njwmvm.jpg',
    demoUrl: 'https://yuriipohorilets.github.io/goit-react-hw-08-phonebook/',
    sources: [
      { type: 'Frontend', url: 'https://github.com/YuriiPohorilets/goit-react-hw-08-phonebook' },
      { type: 'Backend', url: 'https://github.com/YuriiPohorilets/nodejs-homework-rest-api' },
    ],
    date: '01 February 2023',
  },

  {
    id: 96,
    title: 'Filmoteka (team project)',
    description:
      'The responsive site for finding popular movies with the ability to watch the trailer, add to the queue to watch, or mark the watched movie. There is also pagination by page, the ability to search for a movie by title. In a team project, on this project, I held the role of Scrum master',
    techSkills: ['HTML', 'SASS', 'JavaScript', 'Axios', 'REST API', 'Parcel'],
    imgUrl:
      'https://res.cloudinary.com/dixdf3mkj/image/upload/v1686675083/public/proj-5_gxykhw.jpg',
    demoUrl: 'https://yuriipohorilets.github.io/filmoteka-project-02/',
    sources: [
      { type: 'Frontend', url: 'https://github.com/YuriiPohorilets/filmoteka-project-02' },
      { type: 'Backend', url: null },
    ],
    date: '04 December 2022',
  },

  {
    id: 95,
    title: 'ImageFinder',
    description:
      'Image search application by query name with brief photo statistics. It is also possible to view images in slider mode',
    techSkills: ['JavaScript', 'Axios', 'REST API', 'Parcel'],
    imgUrl:
      'https://res.cloudinary.com/dixdf3mkj/image/upload/v1686675438/public/proj-6_id3afc.jpg',
    demoUrl: 'https://yuriipohorilets.github.io/goit-js-hw-11/',
    sources: [
      { type: 'Frontend', url: 'https://github.com/YuriiPohorilets/goit-js-hw-11' },
      { type: 'Backend', url: null },
    ],
    date: '06 October 2022',
  },

  {
    id: 94,
    title: 'IceCream (team project)',
    description:
      'Responsive landing page is an ice cream shop with beautiful design and animation. Adapted for mobile phone, tablet and desktop. In a team project, on this project, I held the role of Team leader',
    techSkills: ['HTML', 'SASS', 'Parcel', 'Mobile first', 'BEM'],
    imgUrl:
      'https://res.cloudinary.com/dixdf3mkj/image/upload/v1686764838/public/proj-7_vmxrbg.jpg',
    demoUrl: 'https://yuriipohorilets.github.io/icecream-project-01/',
    sources: [
      { type: 'Frontend', url: 'https://github.com/YuriiPohorilets/icecream-project-01' },
      { type: 'Backend', url: null },
    ],
    date: '06 October 2022',
  },

  {
    id: 93,
    title: 'WebStudio',
    description:
      'Adaptive landing page for a web studio with a nice design. Adapted for mobile phone, tablet and desktop.',
    techSkills: ['HTML', 'SASS', 'Mobile first', 'BEM'],
    imgUrl:
      'https://res.cloudinary.com/dixdf3mkj/image/upload/v1686765180/public/proj-8_gnteie.jpg',
    demoUrl: 'https://yuriipohorilets.github.io/goit-markup-hw-08/',
    sources: [
      { type: 'Frontend', url: 'https://github.com/YuriiPohorilets/goit-markup-hw-08' },
      { type: 'Backend', url: null },
    ],
    date: '06 October 2022',
  },

  {
    id: 92,
    title: 'Britlex',
    description:
      'Adaptive landing page for a web studio with a nice design. Adapted for mobile phone, tablet and desktop.',
    techSkills: ['HTML', 'SASS', 'Grid', 'BEM'],
    imgUrl:
      'https://res.cloudinary.com/dixdf3mkj/image/upload/v1686765308/public/proj-9_w3hnmf.jpg',
    demoUrl: 'https://yuriipohorilets.github.io/Britlex/',
    sources: [
      { type: 'Frontend', url: 'https://github.com/YuriiPohorilets/Britlex' },
      { type: 'Backend', url: null },
    ],
    date: '06 October 2022',
  },

  {
    id: 91,
    title: 'Bhromaon Travel',
    description:
      'Adaptive landing page for a web studio with a nice design. Adapted for mobile phone, tablet and desktop.',
    techSkills: ['HTML', 'SASS', 'BEM'],
    imgUrl:
      'https://res.cloudinary.com/dixdf3mkj/image/upload/v1686765618/public/proj-10_tvrq7e.jpg',
    demoUrl: 'https://yuriipohorilets.github.io/bhromaon-travel/',
    sources: [
      { type: 'Frontend', url: 'https://github.com/YuriiPohorilets/bhromaon-travel' },
      { type: 'Backend', url: null },
    ],
    date: '06 October 2022',
  },
];
