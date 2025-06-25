import cat_app1 from '../assets/cat_donation1.png'
import cat_app2 from '../assets/cat_donation2.png'
import cat_app3 from '../assets/cat_donation3.png'
import cat_app4 from '../assets/cat_donation4.png'
import cat_app5 from '../assets/cat_donation5.png'
import cat_app6 from '../assets/cat_donation6.png'
import cat_app7 from '../assets/cat_donation7.png'
import cat_app8 from '../assets/cat_donation8.png'
import cat_thumb from '../assets/uncollaredThumb.png'

import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png'
import news3 from '../assets/news3.png'
import news4 from '../assets/news4.png'
import news5 from '../assets/news5.png'
import news6 from '../assets/news6.png'
import news7 from '../assets/news7.png'
import news_thumb from '../assets/newsThumb.png'


import eLearn1 from '../assets/eLearn1.png'
import eLearn2 from '../assets/eLearn2.png'
import eLearn3 from '../assets/eLearn3.png'
import eLearn4 from '../assets/eLearn4.png'
import eLearn5 from '../assets/eLearn5.png'
import eLearn6 from '../assets/eLearn6.png'
import eLearn7 from '../assets/eLearn7.png'
import eLearn_thumb from '../assets/eLearnThumb.png'

const projectsData = [
  {   
        thumbnail: cat_thumb,
        title: "Uncollared",
        description: "A web-based platform to facilitate stray cat adoptions and accept donations for animal welfare. Designed to help users browse available cats, submit adoption requests, and contribute financially to their care.",
        images: [cat_app1, cat_app2, cat_app3, cat_app4, cat_app5, cat_app6, cat_app7, cat_app8],
        functionality: [
          "Built using Django",
          "Developed an admin dashboard to manage pets and adoption requests",
          "Built an end-to-end adoption request and approval workflow",
          "Implemented a navigation system for tracking and locating community cats",
          "Integrated a payment gateway for secure donations",
          "Implemented threaded communication between users"

        ]
    },
    {   
        thumbnail: news_thumb,
        title: "News App",
        description: "Mobile news application built with React Native and Expo, providing users with real-time headlines, filtered news categories, and bookmarking features. Designed with intuitive navigation and push notification reminders to enhance user engagement and accessibility",
        images: [news1,news2, news3, news4, news5, news6, news7],
        functionality: [
          "Developed using React Native and Expo",
          "Integrated NewsAPI to fetch real-time headlines and search results",
          "Implemented search functionality with a dedicated results screen",
          "Created a filter system to browse news by custom categories",
          "Built a bookmarking system for saving and revisiting articles",
          "Integrated push notifications to re-engage users after app inactivity",
          "Designed bottom tab navigation with stack-based sub-navigation",
        ]
    },
    {   
        thumbnail: eLearn_thumb,
        title: "E-Learning",
        description: "A learning platform designed to enable easy course creation, student enrollment, and real-time communication through an integrated chat room.",
        images: [eLearn1,eLearn2,eLearn3,eLearn4,eLearn5,eLearn6,eLearn7],
        functionality: [
          "Built using Django for backend and user authentication",
          "Implemented instructor and student roles with role-based access control",
          "Developed a course creation, enrollment system and basic feedback system",
          "Integrated a real-time chat room for course discussions",
          "Designed responsive UI with a focus on usability and accessibility",
        ]
    },
]
export default projectsData;