import { PersonalPortfolio, keepontack, passwordGenerator } from "../assets/constant";

export const projects = [
    {name: 'KeepOnTrack',
img: keepontack,
descripiton: "I aim to create a web application that simplifies task management, enhancing productivity for users. Within this platform, users will have the ability to log in and efficiently manage their tasks, including creating new tasks, editing existing ones, deleting tasks, and filtering tasks based on categories. To ensure security and privacy, implement authentication and authorization scenarios, along with protected routes. Additionally, the application will interact with an API to perform CRUD operations. Given that React applications heavily rely on state management, I've chosen Redux Toolkit as the tool for managing global state.For the form data and form validation i use Formik.",
siteUrl: 'https://keepontrack.netlify.app/',
techStats: [ 'React', 'Redux Toolkit', "Tailwind","Framer Motion",'Formik']},
    {name: 'Daydev Portfolio',
img: PersonalPortfolio,
descripiton: "In my portfolio website, I've invested considerable effort into optimizing the user experience by prioritizing simplicity, cleanliness, and functionality. Ensuring responsiveness across all screen sizes is a top priority, while I've also integrated Framer Motion to introduce smooth and captivating animations.",
siteUrl: 'https://daydev.netlify.app/',
techStats:  [ 'React', 'Redux Toolkit', "Tailwind","Framer Motion"]},
    {name: 'Password Generator',
img: passwordGenerator,
descripiton: "The Password Generator offers a range of customization options, allowing users to specify the length of the password, include various character types (such as uppercase letters, lowercase letters, numbers, and special characters).Upon selecting their preferences, users can generate a unique password with a single click. The frontend of the application was built using HTML, TailWind Css, and TypeScript to create an intuitive,user-friendly and responsive user interface.Implementing the password generation logic and handling user interactions with TypeScript.",
siteUrl: 'https://randompassword-generator-webapp.netlify.app/',
techStats: ['TypeScript',"Tailwind"]},
]