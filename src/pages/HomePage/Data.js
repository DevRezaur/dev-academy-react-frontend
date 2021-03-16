export const aboutObject = {
    id: 'home',
    lightBG: false,
    imgStart: '',
    lightTopLine: true,
    topLine: 'IT Agency',
    lightText: true, 
    headLine: 'Leading IT Training Center in Bangladesh. In Code We Trust.', 
    lightTextDesc: true,
    description: `We are one of the most advanced training center in Dhaka, Bangladesh. 
                We have specialized trainers who offers only the best learning experience. 
                Here at Dev Academy, our vision is to train our students to the best level they can get. 
                So join our Dev Academy family with 5k+ people.`, 
    primary: true, 
    buttonLabel: 'Join Dev Academy',
    img: require('../../images/co_worker.svg').default,
    alt: 'image',
}

export const mentorshipObject = {
    id: 'mentor',
    lightBG: true,
    imgStart: 'start',
    lightTopLine: false,
    topLine: 'Mentorship',
    lightText: false, 
    headLine: 'Industry Standard Mentorship', 
    lightTextDesc: false,
    description: `Here at Dev Academy we have highly experienced tech professional as our trainers. Each of them 
                have vast technical skills in their resppected field. From them you can expect industry standard 
                mentorship. Because we belive only the best mentor can guide you to the path of success.`, 
    primary: false, 
    buttonLabel: 'Learn More',
    img: require('../../images/feeling_proud.svg').default,
    alt: 'image',
}

export const testimonialObject = {
    id: 'testimonial',
    lightBG: false,
    imgStart: '',
    lightTopLine: true,
    topLine: 'Testimonial',
    lightText: true, 
    headLine: 'Professional Place for Professional People', 
    lightTextDesc: true,
    description: `I came to know about Dev Acdemy at year 2018. I was then a undergraduate student, studing 
                Computer Science & Engineering. I joined Dev Acdemy to learn Spring Boot & React JS. I must 
                say Dev Academy has some of the best tech professionals. They offer only the best teaching 
                experience. Its a professional place for professional people - Rezaur Rahman`, 
    primary: true, 
    buttonLabel: 'More Testimonials',
    img: require('../../images/rezaur.png').default,
    alt: 'image',
}

export const topCourses = [
    {
        id: 1,
        image: require('../../images/spring.jpg').default,
        alt: 'course',
        title: 'Java Spring & Spring Boot',
        desc: `Spring Framework is the most demanded Java enterprise framework. 
            Learn Spring Framework 5.0 with Spring Boot 2.0 now. And fulfill your dream to become a 
            enterprise application developer.`,
        label: 'Enroll Now',
    },
    {
        id: 2,
        image: require('../../images/python.png').default,
        alt: 'course',
        title: 'Python with Django',
        desc: `Python is growing so fast. Currently its the number one programming language. 
            From general programming to machine learning, anything you can do with Python. 
            So learn Python today with its amazing Django Framework.`,
        label: 'Enroll Now',
    },
    {
        id: 3,
        image: require('../../images/react.jpg').default,
        alt: 'course',
        title: 'React Js & Styled Components',
        desc: `React JS is the most loved JavaScript library around the world. It was 
            developed by Facebook Corporation. It is popular beacuse of its easy learning 
            curve. More and more reple are switching to React.`,
        label: 'Enroll Now',
    }
]