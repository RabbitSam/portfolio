import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedHeading from "@/components/AnimatedHeading";
import CircleWithLine from "@/components/CircleWithLine";
import TimelineExperience from "@/components/TimelineExperience";
import wtLogo from "@/public/images/wtLogo.png";
import configuraLogo from "@/public/images/configuraLogo.png";


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
                    
                    <TimelineExperience
                        position={"right"}
                        companyTitle={"Wunderman Thompson Studios, Bangladesh"}
                        jobTitle={"Web Developer"}
                        listContent={[
                            "Created and deployed Landing Pages and EDM's (emails) for Microsoft."
                        ]}
                        keyTechnologies={
                            ["Vanilla JavaScript"]
                        }
                        timeline={"Jan 22 - Mar 23"}
                    />

                    <TimelineExperience
                        position={"left"}
                        companyTitle={"Configura, Malaysia"}
                        jobTitle={"Application Developer Intern"}
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