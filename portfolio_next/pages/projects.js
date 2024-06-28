import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import CircleWithLine from "@/components/CircleWithLine";
import TimelineProject from "@/components/TimelineProject";
import AnimatedLogo from "@/components/AnimatedLogo";
import AnimatedHeading from "@/components/AnimatedHeading";
import portfolioImage from "@/public/images/portfolio.png";
import kanbanBoardImage from "@/public/images/kanbanBoard.png";
import logoRejectionator from "@/public/images/logoRejectionator.png";
import rejectionatorImage from "@/public/images/rejectionator.png";
import logoPompom from "@/public/images/logoPompom.png";
import pompomImage from "@/public/images/pompom.png";


const projects = [
    {
        title: "Pompom",
        timeframe: "Jun 24",
        logo: (
            <AnimatedLogo
                logo={(
                    <Image src={logoPompom} alt="Pompom Logo." height="30" width="30" />
                )}
                description={"Pompom Logo."}
            />
        ),
        listContent: [
            "Responsive desktop application designed using React.js, TypeScript, SCSS, Node.js, and Electron",
            "Ensured top-tier accessibility using HTML5, ARIA and the visually-hidden class.",
            "Followed up-to-date web accessibility guidelines.",
            "Designed using Figma.",
            "Used react-router for routing purposes.",
            "Created reusable and maintainable functional components using React.js, semantic HTML5, SCSS modules, and TypeScript.",
            "Used redux to maintain app state globally where necessary.",
            "Used the fs module to keep records of projects and tasks."
        ],
        projectLinks: {
            site: "https://github.com/RabbitSam/pompom/releases/tag/release",
            github: "https://github.com/RabbitSam/pompom"
        },
        image: {
            link: pompomImage,
            alt: "Pompom home page screenshot."
        }
    },
    // Rejectionator
    {
        title: "Rejectionator",
        timeframe: "Aug 23 - Aug 23",
        logo: (
            <AnimatedLogo 
                logo={(
                    <Image src={logoRejectionator} alt="Rejectionator Logo" height="30" width="30"/>
                )}
                description="Rejectionator Logo."
            />
        ),
        listContent: [
            "Responsive single page web application designed using Next.js, React.js, TypeScript, SCSS and Node.js.",
            "Ensured top-tier accessibility using semantic HTML5 and ARIA, and following up-to-date web accessibility guidelines.",
            "Designed using Figma and hosted on Vercel.",
            "Used Next.js app router for routing and API development.",
            "Created reusable and maintainable functional components using React.js, semantic HTML5, CSS modules, and TypeScript.",
            "Used Github and Git CLI for version control.",
        ],
        projectLinks: {
            site: "https://rejectionator.vercel.app",
            github: "https://github.com/RabbitSam/rejectionator"
        },
        image: {
            link: rejectionatorImage,
            alt: "Rejectionator Home Page Screenshot."
        }
    },
    // Portfolio site
    {
        title: "Portfolio Website",
        timeframe: "Mar 23 - May 23",
        logo: (
            <AnimatedLogo 
                logo="A"
                description="Portfolio Website Logo."
                className="font-bold text-3xl"
                hiddenClassName="opacity-0 -translate-y-[3px]"
                visibleClassName="opacity-100 [text-shadow:_3px_3px_0px_theme(colors.primary.pink),_6px_6px_0px_theme(colors.primary.red)]"
            />
        ),
        listContent: [
            "Responsive portfolio website developed using Next.js, React.js, Node.js, and Vercel.",
            "Created reusable and maintainable functional components using React.js, JavaScript (ES6), semantic HTML5, and TailwindCSS.",
            "Ensured top-tier accessibility using semantic HTML5 and ARIA, and following up-to-date web accessibility guidelines.",
            "Implemented custom animations using CSS modules, TailwindCSS, and React.js hooks.",
            "Designed with responsive design principles using Figma.",
            "Hosted using Vercel.",
            "Used Next.js pages router for routing purposes.",
            "Used Github and Git CLI for version control.",
            "You are viewing it right now! :)"
        ],
        projectLinks: {
            github: "https://github.com/RabbitSam/portfolio",
            site: "/"
        },
        image: {
            link: portfolioImage,
            alt: "Portfolio Website."
        }
    },
    // Kanban Board
    {
        title: "Kanban Board",
        timeframe: "Feb 23 - Mar 23",
        logo: (
            <AnimatedLogo 
                logo={(
                    <div className="bg-[#0d6efd] rounded-md pb-0.5 scale-95">
                        <span className="left-0 top-0 ps-1.5">K</span>
                        <span className="inline-block -translate-x-1.5">3</span>
                    </div>
                )}
                description="Kanban Board Website Logo."
                className="font-bold text-3xl"
            />
        ),
        listContent: [
            "Responsive kanban board website developed using the MERN stack (MongoDB, Express.js, Node.js, React.js), Redux, and Bootstrap 5.",
            "Hosted on AWS EC2.",
            "Created APIs following the REST protocol using Express.js.",
            "Interfaced with MongoDB using Mongoose ODM.",
            "Used remix-router for routing purposes.",
            "Used Github and Git CLI for version control.",
        ],
        projectLinks: {
            github: "https://github.com/RabbitSam/KanbanBoard",
            site: "http://ec2-13-53-137-65.eu-north-1.compute.amazonaws.com/"
        },
        image: {
            link: kanbanBoardImage,
            alt: "Kanban Board Website."
        }
    },
];


export default function Projects() {

    return (
        <>
            <Head>
				<title>Projects | Sheikh Aquib Mahmood</title>
				<meta name="description" content="Sheikh Aquib Mahmood's Projects" />
			</Head>
            <Layout>
                <div className="relative text-center">
                    <AnimatedHeading content="My Projects"/>
                </div>
                <div className="grid grid-cols-12 gap-x-10 ">
                    <div className="col-span-1 row-span-2 lg:row-span-1 h-32">
                        <CircleWithLine hideCircle={true} />
                    </div>
                    <div className="col-span-11 lg:col-span-6"></div>
                    <div className="col-span-11 lg:col-span-5"></div>

                    {
                        projects.map(item => (
                            <TimelineProject
                                title={item.title}
                                timeframe={item.timeframe}
                                logo={item.logo}
                                listContent={item.listContent}
                                technologies={item.technologies}
                                projectLinks={item.projectLinks}
                                image={item.image}
                            />
                        ))
                    }
                    
                </div>
            </Layout>
        </>
    );
}