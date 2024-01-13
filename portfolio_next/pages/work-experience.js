import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedHeading from "@/components/AnimatedHeading";
import CircleWithLine from "@/components/CircleWithLine";
import DualTimelineItem from "@/components/DualTimelineItem";

const workExperiences = [
    {
        companyTitle: "VML (formerly Wunderman Thompson), Bangladesh",
        jobTitle: "Web Developer",
        listContent: [
            "Created and deployed 1000s of landing pages and EDMs for various Microsoft Events.",
            "Maintained a high KPI and periodically exceeded expectations.",
            "Completed tasks in a collaborative, agile environment with regular communications.",
            "Participated and presented in weekly training sessions meant to ensure everyone was on the same level.",
        ],
        keyTechnologies: ["JavaScript", "CSS", "HTML."],
        timeline: "Jan 22 - Mar 23"
    },
    {
        companyTitle: "Configura, Malaysia",
        jobTitle: "Application Developer Intern",
        listContent: [
            "Created and deployed several gadgets/dashboard items for Jira and increased overall productivity of teams within the company by 20%.",
            "Engaged in regular presentations and requirements gathering meetings with clients (who were internal team leads).",
            "Completed tasks in an agile environment using Scrum Methodology."
        ],
        keyTechnologies: ["JavaScript (with JQuery)", "Java"],
        timeline: "Jul 19 - Dec 19"
    }
];


function WorkTitle({ companyTitle, jobTitle}) {
    return (
        <>
            {companyTitle} <br/>&ndash; <em className="font-semibold">{jobTitle}</em>
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