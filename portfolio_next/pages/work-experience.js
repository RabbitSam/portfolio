import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedHeading from "@/components/AnimatedHeading";
import CircleWithLine from "@/components/CircleWithLine";
import DualTimelineItem from "@/components/DualTimelineItem";

const workExperiences = [
    {
        companyTitle: "",
        jobTitle: "Freelance Web Developer",
        listContent: [
            "Designed, created and deployed responsive content management systems.",
            "Developed fullstack web applications using Next.js, TypeScript, Node.js, MongoDB, and TailwindCSS.",
            "Created and maintained reusable functional components using React.js.",
            "Developed API end-points following the REST protocol.",
            "Used Next.js pages router for routing purposes.",
            "Used server-side rendering for optimization purposes where possible.",
            "Interfaced with MongoDB using Mongoose ODM.",
            "Used two-factor authentication systems to ensure end-user security.",
            "Followed up-to-date web accessibility guidelines and used semantic HTML5 and ARIA to ensure deliverables were accessible for all.",
            "Hosted websites on Vercel.",
            "Designed responsive websites and interactions using Figma.",
            "Ensured agile development through regular meetings with clients.",
            "Used Github with Git CLI for version control."
        ],
        timeline: "2023 - Present"
    },
    {
        companyTitle: "Hogarth (formerly Wunderman Thompson)",
        jobTitle: "Web Developer",
        listContent: [
            "Created and deployed 1000s of landing pages and EDMs for various Microsoft Events using semantic HTML5, CSS3, and JavaScript (ES6).",
            "Used responsive design to ensure deliverables were compatible with any device.",
            "Followed up-to-date accessibility guidelines and used semantic HTML5 and ARIA to ensure maximum content accessibility.",
            "Created chrome extensions using HTML5, CSS3 and JavaScript (ES6) to increase team productivity by 15%.",
            "Used Salesforce Marketing Client (SFMC) for A/B testing and deployments.",
            "Where applicable, created reusable templates using Adobe Marketo and Adobe Experience Manager for easily repeatable deployments.",
            "Engaged in peer review to ensure quality results.",
            "Operated using agile methodologies and processes.",
        ],
        timeline: "2022 - 2023"
    },
    {
        companyTitle: "Configura",
        jobTitle: "Web Developer Intern",
        listContent: [
            "Created and deployed 4 responsive Jira Dashboard Items using JavaScript, jQuery, semantic HTML5 and Java.",
            "Increased productivity of internal teams by 20%.",
            "Used Gitlab with Git CLI for version control.",
            "Used Gitlab CI/CD tools and designed unit tests.",
            "Created extensive documentation for future teams’ reference.",
            "Used Jira for task and progress tracking.",
            "Used JQL (Jira Query Language) to query specific needs from Jira.",
            "Created database management using Jira Active Objects and Java.",
            "Worked with mentors and supervisors to ensure excellent UX.",
            "Operated using the scrum methodology.",
        ],
        timeline: "2019"
    }
];


function WorkTitle({ companyTitle, jobTitle}) {
    return (
        <>
            {
                companyTitle.length ?
                <>
                    {companyTitle} <br/>&ndash; <em className="font-semibold">{jobTitle}</em>
                </>
                :
                <>
                    {jobTitle}
                </>
            }
        </>
    );
}


export default function WorkExperience() {
    return (
        <>
            <Head>
				<title>Work Experience | Sheikh Aquib Mahmood</title>
				<meta name="description" content="Sheikh Aquib Mahmood's Work Experience" />
			</Head>
            <Layout>
                <div className="relative text-center">
                    <AnimatedHeading content="Work Experience"/>
                </div>
                <div className="mt-2">
                    <div className="grid grid-cols-12 gap-x-2">
                        <div className="col-span-12 h-32 flex lg:justify-center lg:items-center">
                            <CircleWithLine hideCircle={true}/>
                        </div>
                    </div>

                    {
                        workExperiences.map((item, indx) => (
                            <DualTimelineItem
                                position={indx % 2 === 0 ? "right" : "left"}
                                title={
                                    <WorkTitle companyTitle={item.companyTitle} jobTitle={item.jobTitle} />
                                }
                                listContent={item.listContent}
                                keyTechnologies={item.keyTechnologies}
                                timeline={item.timeline}
                            />
                        ))
                    }
                </div>
            </Layout>
        </>
    );
}