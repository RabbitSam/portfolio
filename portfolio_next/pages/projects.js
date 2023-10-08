import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import CircleWithLine from "@/components/CircleWithLine";
import TimelineProject from "@/components/TimelineProject";
import AnimatedLogo from "@/components/AnimatedLogo";
import AnimatedHeading from "@/components/AnimatedHeading";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";
import tazreenWebsiteImage from "@/public/images/tazreenWebsite.png";
import portfolioImage from "@/public/images/portfolio.png";
import kanbanBoardImage from "@/public/images/kanbanBoard.png";
import logoRejectionator from "@/public/images/logoRejectionator.png";
import rejectionatorImage from "@/public/images/rejectionator.png";


const fullConfig = resolveConfig(tailwindConfig);


class Keyframes {
    constructor(reveal, hide) {
        this.reveal = reveal;
        this.hide = hide;
    }
}


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

                    {/* Rejectionator */}
                    <TimelineProject
                        title="Rejectionator"
                        timeframe="Aug 23 - Aug 23"
                        logo={
                            <AnimatedLogo 
                                logo={(
                                    <Image src={logoRejectionator} alt="Rejectionator Logo" height="30" width="30"/>
                                )}
                                description="Rejectionator Logo."
                                className="opacity-0 font-bold text-3xl blur-sm"
                                keyframes={
                                    new Keyframes(
                                        [
                                            {
                                                filter: "none",
                                                opacity: 1,
                                                easing: "ease-in-out"
                                            }
                                        ],
                                        [
                                            {
                                                filter: "blur(4px)",
                                                opacity: 0,
                                                easing: "ease-in-out"
                                            }
                                        ]
                                    )
                                }
                                keepStyles={
                                    {
                                        filter: "none",
                                        opacity: 1
                                    }
                                }
                            />
                        }
                        listContent={[
                            "Website (SPA) that allows recruiters to send a large number of job application rejections in a simple form.",
                            "Created for comedy purposes."
                        ]}
                        technologies={["Next.js", "React.js", "TypeScript", "Node.js", "SCSS", "Vercel", "Figma"]}
                        projectLinks={{
                            site: "https://rejectionator.vercel.app",
                            github: "https://github.com/RabbitSam/rejectionator"
                        }}
                        image={{
                            link: rejectionatorImage,
                            alt: "Rejectionator."
                        }}
                    />

                    {/* Tazreen's Website */}
                    <TimelineProject
                        title="Tazreen Jahan Bari's Website (Client Project)"
                        timeframe="May 23 - Jul 23"
                        logo={
                            <AnimatedLogo 
                                logo={(
                                    <div className="bg-white px-2 pt-0.5 scale-95 text-[#884100] border-[#884100] font-tazreen">
                                        T
                                    </div>
                                )}
                                description="Tazreen Jahan Bari's Website's Logo."
                                className="opacity-0 font-bold text-3xl blur-sm"
                                keyframes={
                                    new Keyframes(
                                        [
                                            {
                                                filter: "none",
                                                opacity: 1,
                                                easing: "ease-in-out"
                                            }
                                        ],
                                        [
                                            {
                                                filter: "blur(4px)",
                                                opacity: 0,
                                                easing: "ease-in-out"
                                            }
                                        ]
                                    )
                                }
                                keepStyles={
                                    {
                                        filter: "none",
                                        opacity: 1
                                    }
                                }
                            />
                        }
                        listContent={[
                            "Website that allows the client to showcase their blogs, portfolios and work experience.",
                            "The client can create, edit or delete their blogs, academic/copy writing/journalistic/creative publications, research interests and work experience however they see fit.",
                            "Exceeded client expectations in regards to the results."
                        ]}
                        technologies={["Next.js", "React.js", "TypeScript", "Node.js", "Mongoose (MongoDB)", "TailwindCSS", "Vercel", "Figma"]}
                        projectLinks={{
                            site: "https://tazreenjahanbari.com"
                        }}
                        image={{
                            link: tazreenWebsiteImage,
                            alt: "Tazreen Jahan Bari's Website."
                        }}
                    />

                    {/* Portfolio Website */}
                    <TimelineProject
                        title="Portfolio Website"
                        timeframe="Mar 23 - May 23"
                        logo={
                            <AnimatedLogo 
                                logo="A"
                                description="Portfolio Website Logo."
                                className="opacity-0 font-bold text-3xl -translate-y-[3px]"
                                keyframes={
                                    new Keyframes(
                                        [
                                            {
                                                opacity: 1,
                                                textShadow: `3px 3px 0px ${fullConfig.theme.colors.primary.pink}, 6px 6px 0px ${fullConfig.theme.colors.primary.red}`,
                                                easing: "ease-in-out"
                                            }
                                        ],
                                        [
                                            {
                                                opacity: 0,
                                                textShadow: "none",
                                                easing: "ease-in-out"
                                            }
                                        ]
                                    )
                                }
                                keepStyles={
                                    {
                                        "text-shadow": `3px 3px 0px ${fullConfig.theme.colors.primary.pink}, 6px 6px 0px ${fullConfig.theme.colors.primary.red}`,
                                        opacity: 1
                                    }
                                }
                            />
                        }
                        listContent={[
                            "Website that allows potential clients or recruiters to view my projects and work experience, download my resume, or contact me.",
                            "Designed to have a 'retro-future-feel.'",
                            "You are viewing it right now! :)"
                        ]}
                        technologies={["Next.js", "React.js", "Node.js", "Tailwind CSS", "Vercel", "Figma"]}
                        projectLinks={{
                            github: "https://github.com/RabbitSam/portfolio",
                            site: "/"
                        }}
                        image={{
                            link: portfolioImage,
                            alt: "Portfolio Website."
                        }}
                    />

                    {/* Kanban Board Website */}
                    <TimelineProject
                        title="Kanban Board"
                        timeframe="Feb 23 - Mar 23"
                        logo={
                            <AnimatedLogo 
                                logo={(
                                    <div className="bg-[#0d6efd] rounded-md pb-0.5 scale-95">
                                        <span className="left-0 top-0 ps-1.5">K</span>
                                        <span className="inline-block -translate-x-1.5">3</span>
                                    </div>
                                )}
                                description="Kanban Board Website Logo."
                                className="opacity-0 font-bold text-3xl blur-sm"
                                keyframes={
                                    new Keyframes(
                                        [
                                            {
                                                filter: "none",
                                                opacity: 1,
                                                easing: "ease-in-out"
                                            }
                                        ],
                                        [
                                            {
                                                filter: "blur(4px)",
                                                opacity: 0,
                                                easing: "ease-in-out"
                                            }
                                        ]
                                    )
                                }
                                keepStyles={
                                    {
                                        filter: "none",
                                        opacity: 1
                                    }
                                }
                            />
                        }
                        listContent={[
                            "Web application that allows users to create their own Kanban Boards",
                            "Users can create, edit and delete the boards, columns in the boards, and tasks in the columns.",
                            <>Features drag and drop functionality thanks to <em>react-beautiful-dnd</em>.</>
                        ]}
                        technologies={["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Bootstrap 5", "AWS EC2"]}
                        projectLinks={{
                            github: "https://github.com/RabbitSam/KanbanBoard",
                            site: "http://ec2-13-53-137-65.eu-north-1.compute.amazonaws.com/"
                        }}
                        image={{
                            link: kanbanBoardImage,
                            alt: "Kanban Board Website."
                        }}
                    />
                </div>
            </Layout>
        </>
    );
}