import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedHeading from "@/components/AnimatedHeading";
import CircleWithLine from "@/components/CircleWithLine";
import DualTimelineItem from "@/components/DualTimelineItem";


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
                    
                    <DualTimelineItem
                        position={"right"}
                        title={
                            <WorkTitle companyTitle={"Wunderman Thompson Studios, Bangladesh"} jobTitle={"Web Developer"} />
                        }
                        listContent={[
                            "Created and deployed Landing Pages and EDM's (emails) for Microsoft."
                        ]}
                        keyTechnologies={
                            ["Vanilla JavaScript"]
                        }
                        timeline={"Jan 22 - Mar 23"}
                    />

                    <DualTimelineItem
                        position={"left"}
                        title={
                            <WorkTitle companyTitle={"Configura, Malaysia"} jobTitle={"Application Developer Intern"} />
                        }
                        listContent={[
                            "Created several gadgets/dashboard items for Jira to increase overall productivity of different teams within the company.",
                            "Team of 2 developers and mentors"
                        ]}
                        keyTechnologies={
                            ["JavaScript (with JQuery)", "Java"]
                        }
                        timeline={"Jul 19 - Dec 19"}
                    />
                </div>
            </Layout>
        </>
    );
}