export interface iProject {
    id: number;
    title: string;
    url?: string;
    image: string;
    infoAditional?: string; //more info
    technologies: string[];
    summary?: string;
};

interface iLocation {
    about: boolean;
    contact: boolean;
    index: boolean;
};

export interface iSkills {
    name: string;
};

export const Project: iProject[] = [
    {
        id: 1,
        title: 'Foods Wiki-Kitchen',
        url: 'https://pi-food-omega.vercel.app/',
        image: 'https://res.cloudinary.com/de3jik7nt/image/upload/v1666014751/2022-10-16_k0zdkk.png',
        technologies: ['MongoDB', 'Mongoose', 'Express', 'React', 'NodeJs', 'Redux', 'Axios', 'Material UI', 'Design Responsive', 'Web Design'],
        summary: `The Web App is a SPA (Single Page Application) that allows the user to search for cooking recipes, create their own cooking recipes and see the details of the cooking recipes.`,
    },
    {
        id: 2,
        title: 'E-Commerce Videogames',
        url: 'https://e-commerce-videogames.vercel.app/',
        image: 'https://res.cloudinary.com/de3jik7nt/image/upload/v1666014760/2022-10-16_6_gzyemi.png',
        technologies: ['Postrgesql', 'Sequelize', 'Express', 'React', 'NodeJs', 'Redux', 'Bootstrap', 'JWT', 'React Native', 'Nodemailer', 'Web Design'],
        summary: `As a team, we created a video game ecommerce which are acquired through activation licenses, it has the functions of "guest", "user" and "administrator" and an application mobile. The "guest" can review the video game catalog, see the details of the game, add it to the shopping cart and create an account with email or google authentication. The "user" can add/remove a video game from favorites, buy a video game, check their purchases, comment on the video games that the user has bought, edit the comments on the video games, add a score to the video games, modify their information (name, lastname, username, password, profile picture) and receive notifications by email of your activity. The "administrator" can ban a user, view purchase statistics, give users privileges to manage, view available games, modify game information, create new games, disable games and view game catalog.`,
    }
];

export const isPathname: iLocation = {
    about: true,
    contact: true,
    index: true,
};

export const skills: iSkills[] = [
    { name: 'Problem Solver' },
    { name: 'Comunicator' },
    { name: 'Autodidact' },
    { name: 'Proactive' },
    { name: 'Autonomous' },
    { name: 'Dedication' },
    { name: 'Results Oriented' },
];