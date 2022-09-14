import {SiOpenaigym} from "react-icons/si"


export const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Gallery",
        path: "/gallery"
    },
    {
        name: "Plans",
        path: "/plans"
    },
    {
        name: "Trainers",
        path: "/trainers"
    },
    {
        name: "Contact",
        path: "/contact"
    }
   
]


export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        info: "It a beautiful brand new day. Let's get this bread!",
        path: "/programs/111"
    },

    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Program Two",
        info: "It a beautiful brand new day. Let's get this bread!",
        path: "/programs/222"
    },

    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info: "It a beautiful brand new day. Let's get this bread!",
        path: "/programs/333"
    },

    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info: "It a beautiful brand new day. Let's get this bread!",
        path: "/programs/444"
    }
]


export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        desc: "With determination and disciple, you will prevail"
    },

    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "With determination and disciple, you will prevail"
    },

    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "With determination and disciple, you will prevail"
    },

    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "With determination and disciple, you will prevail"
    }
]



export const faqs=[
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "As a general goal, aim for at least 30 minutes of moderate physical activity every day. If you want to lose weight, maintain weight loss or meet specific fitness goals, you may need to exercise more."
    },

    {
        id: 2,
        question: "What time of the day is best to workout?",
        answer: "“Exercising at 7 a.m. or between 1 and 4 p.m. helps your circadian clock to 'fall back' in time, making it easier to wake up earlier,” Heisz says"
    },

    {
        id: 3,
        question: "How long should my workout be?",
        answer: "Ideally, aim for at least 150 minutes of moderate activity or 75 minutes of vigorous intensity cardio exercise per week."
    },

    {
        id: 4,
        question: "Should I lift weight for strength training?",
        answer: "If you're looking to gain muscle, and increase your strength in the most efficient way possible, then lifting heavy weights is a good option for you. Gaining strength all comes down to fatiguing your muscles, and heavy weights will get you there faster."
    },

    {
        id: 5,
        question: "Do I need to warm up before my workout?",
        answer: "Warm up properly before exercising to prevent injury and make your workouts more effective. This warm-up routine should take at least 6 minutes. Warm up for longer if you feel the need."
    },

    {
        id: 6,
        question: "Should I do strength training, cardio or both?",
        answer: "If you're looking to build strength and put on muscle mass, research suggests you are best to keep your weights separate from your cardio work."
    }

    
]



export const testimonials=[
    {
        id: 1,
        name: "Lancelot Hans",
        quote: "If you're looking to build strength and put on muscle mass, research suggests you are best to keep your weights separate from your cardio work.",
        job: "Software Engineer",
        avatar: require("./images/gym1.jpg")
    },

    {
        id: 2,
        name: "Doris Bassaw",
        quote: "If you're looking to build strength and put on muscle mass, research suggests you are best to keep your weights separate from your cardio work.",
        job: "Software Engineer",
        avatar: require("./images/gym0.jpg")
    },

    {
        id: 3,
        name: "Gina Lee",
        quote: "If you're looking to build strength and put on muscle mass, research suggests you are best to keep your weights separate from your cardio work.",
        job: "Electrical Engineer",
        avatar: require("./images/gym3.jpg")
    },

    {
        id: 4,
        name: "Sandra May",
        quote: "If you're looking to build strength and put on muscle mass, research suggests you are best to keep your weights separate from your cardio work.",
        job: "Student",
        avatar: require("./images/gym5.jpeg")
    },

    {
        id: 5,
        name: "Leonard Barns",
        quote: "If you're looking to build strength and put on muscle mass, research suggests you are best to keep your weights separate from your cardio work.",
        job: "Mechanical Engineer",
        avatar: require("./images/gym2.jpg")
    }
]



export const plans =[
    {
        id: 1,
        name: "Silver Package",
        desc: "This package is right for beginners who need constant help",
        price: 39.99,
        features: [
            {feature: "First Feature",available: true},
            {feature: "Second Feature",available: true},
            {feature: "Third Feature",available: true},
            {feature: "Fourth Feature",available: false},
            {feature: "Fifth Feature",available: true},
            {feature: "Sixth Feature",available: false},
            {feature: "Seventh Feature",available: true},
            {feature: "Eighth Feature",available: true},
            {feature: "Nineth Feature",available: false},
            {feature: "Tenth Feature",available: true},
        ]
    },

    {
        id: 2,
        name: "Golden Package",
        desc: "This package is right for beginners who need constant help",
        price: 69.99,
        features: [
            {feature: "First Feature",available: true},
            {feature: "Second Feature",available: true},
            {feature: "Third Feature",available: true},
            {feature: "Fourth Feature",available: false},
            {feature: "Fifth Feature",available: true},
            {feature: "Sixth Feature",available: false},
            {feature: "Seventh Feature",available: true},
            {feature: "Eighth Feature",available: false},
            {feature: "Nineth Feature",available: false},
            {feature: "Tenth Feature",available: false},
        ]
    },

    {
        id: 3,
        name: "Diamond Package",
        desc: "This package is right for beginners who need constant help",
        price: 99.99,
        features: [
            {feature: "First Feature",available: true},
            {feature: "Second Feature",available: true},
            {feature: "Third Feature",available: true},
            {feature: "Fourth Feature",available: true},
            {feature: "Fifth Feature",available: false},
            {feature: "Sixth Feature",available: false},
            {feature: "Seventh Feature",available: false},
            {feature: "Eighth Feature",available: true},
            {feature: "Nineth Feature",available: true},
            {feature: "Tenth Feature",available: true},
        ]
    }
]


const Trainer1= require("./images/gallery4.jpg")
const Trainer2= require("./images/gallery14.jpg")
const Trainer3= require("./images/gallery10.jpg")
const Trainer4= require("./images/gallery12.jpg")
const Trainer5= require("./images/gallery7.jpg")
const Trainer6= require("./images/gallery5.jpg")

export const trainers=[
    {
        id: 1,
        image: Trainer1,
        name: "Joan Tay",
        job: "Circuit Trainer",
        socials: ["https://instagram.com/", "https://facebook.com/", "https://twitter.com/"]
    },

    {
        id: 2,
        image: Trainer2,
        name: "Lydia Essel",
        job: "Physical Intelligence Trainer",
        socials: ["https://instagram.com/", "https://facebook.com/", "https://twitter.com/"]
    },

    {
        id: 3,
        image: Trainer3,
        name: "Shelly Reece",
        job: "Yoga Instructor",
        socials: ["https://instagram.com/", "https://facebook.com/", "https://twitter.com/"]
    },

    {
        id: 4,
        image: Trainer4,
        name: "Hadiza Mumuni",
        job: "Cardio Instructor",
        socials: ["https://instagram.com/", "https://facebook.com/", "https://twitter.com/"]
    },

    {
        id: 5,
        image: Trainer5,
        name: "James Fort",
        job: "Flexibility Trainer",
        socials: ["https://instagram.com/", "https://facebook.com/", "https://twitter.com/"]
    },

    {
        id: 6,
        image: Trainer6,
        name: "Steve Jobs",
        job: "Speed Trainer",
        socials: ["https://instagram.com/", "https://facebook.com/", "https://twitter.com/"]
    },
]