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
                            <EducationTitle institutionTitle={"Monash University Malaysia, Malaysia"} degreeTitle={"Bachelor of Software Engineering (Honours)"} />
                        }
                        listContent={[
                            "Graduated with First Class Honours.",
                            "Graduated with a GPA of 3.625."
                        ]}
                        timeline={"Jan 17 - Jan 21"}
                    />
                </div>
            </Layout>
        </>
    );
}