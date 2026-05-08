import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedHeading from "@/components/AnimatedHeading";
import CircleWithLine from "@/components/CircleWithLine";
import DualTimelineItem from "@/components/DualTimelineItem";


function EducationTitle({ institutionTitle, degreeTitle}) {
    return (
        <>
            {institutionTitle} <br/>&ndash; <em className="font-semibold">{degreeTitle}</em>
        </>
    );
}


export default function Education() {
    return (
        <>
            <Head>
				<title>Education | Sheikh Aquib Mahmood</title>
				<meta name="description" content="Sheikh Aquib Mahmood's Education" />
			</Head>
            <Layout>
                <div className="relative text-center">
                    <AnimatedHeading content="Education"/>
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
                            <EducationTitle institutionTitle={"Monash University Malaysia"} degreeTitle={"Bachelor of Software Engineering (Honors)"} />
                        }
                        listContent={[
                            "Graduated with First Class Honours.",
                            "GPA of 3.63 out of 4.00.",
                            "Other achievements: Monash University Faculty of Engineering Dean’s Honors List, Monash High Achiever Award, Monash Industry-Based Learning Scholarship"
                        ]}
                        timeline={""}
                    />
                </div>
            </Layout>
        </>
    );
}