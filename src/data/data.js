import perfilImg from '../assets/perfil.png'
import ilustration from '../assets/ilustration.png'
import js from '../assets/js.png'
import pkmPreview from '../assets/pkm-preview.png'
import lookify from '../assets/lookify.png'
import portfolio from '../assets/portfolio-preview.png'
import ninja from '../assets/ninja-gold.png'
import coompitas from '../assets/coompitas.png'
import movier from '../assets/movier.png'


export const headerData = [
    {
        id: 1,
        perfilImg: perfilImg,
        intro: "Hi, my name is ",
        name: "Marcos Furco",
        profession: "Full-Stack Developer"
    }
]

export const aboutData = [
    {
        id:1,
        infoText: 'Currently reworking my project ',
        link: "https://github.com/Mrck0s/Proyecto_Coompitas",
        linkText: "Coompitas",
        aboutText: "I'm a dynamic Full Stack Web Developer who embarked on a self-taught coding journey in 2021. With an insatiable curiosity and a relentless drive to create, I've immersed myself in the ever-evolving world of web development. I'm currently seeking new opportunities and challenges to further enhance my skills and contribute to exciting projects.",
        ilustration: ilustration
    }
]

export const skills = [
    {
        id: 1,
        name: "JavaScript",
        img: js
    },
    {
        id: 2,
        name: "Java",
        img: js
    },
    {
        id: 3,
        name: "React",
        img: js
    },
    {
        id: 4,
        name: "Spring",
        img: js
    },
    {
        id: 5,
        name: "MySql",
        img: js
    },
    {
        id: 6,
        name: "CSS",
        img: js
    },
    {
        id: 7,
        name: "Tailwind",
        img: js
    },
]

export const projects = [
    {
        id: 1,
        name: "MovieR",
        preview: movier,
        tech: [skills[3], skills[4], skills[5], skills[7]],
        desc: "A socialmedia prototype for rating and reviewing movies.",
        repo: "https://github.com/Mrck0s/movie-review",
        web: "",

    },
    {
        id: 2,
        name: "Coompitas",
        preview: coompitas,
        tech: [skills[1], skills[4], skills[5], skills[6], skills[7]],
        desc: "Innovative E-commerce to help small companies to get better prices by buying in groups to the same seller",
        repo: "https://github.com/Mrck0s/Proyecto_Coompitas",
        web: "",

    },
    {
        id: 3,
        name: "Ninja Gold",
        preview: ninja,
        tech: [skills[1], skills[4], skills[5], skills[6]],
        desc: "Simple game clicker",
        repo: "https://github.com/Mrck0s/NinjaGold",
        web: "",

    },
    {
        id: 4,
        name: "This portfolio",
        preview: portfolio,
        tech: [skills[1], skills[3], skills[6]],
        desc: "A simple but atractive portfolio easy to create",
        repo: "https://github.com/Mrck0s/portfolio",
        web: "",

    },
    {
        id: 5,
        name: "Lookify",
        preview: lookify,
        tech: [skills[1], skills[4], skills[5], skills[6]],
        desc: "A simple interface to add music tracks and rate them",
        repo: "https://github.com/Mrck0s/lookify",
        web: "",

    },
    {
        id: 6,
        name: "Pokemon Selector",
        preview: pkmPreview,
        tech: [skills[1], skills[6]],
        desc: "Visual simulation of the typical first pokemon selections",
        repo: "https://github.com/Mrck0s/pokemon-inicial",
        web: "https://mrck0s-pkm-kanto.netlify.app/",

    },
]