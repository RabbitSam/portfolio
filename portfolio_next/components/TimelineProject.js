import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AnimatedImage from "./AnimatedImage";
import CircleWithLine from "./CircleWithLine";
import AnimatedUnorderedList from "./AnimatedUnorderedList";
import HorizontalAnimatedText from "./HorizontalAnimatedText";
import BoxLink from "./BoxLink";
import { faLink } from "@fortawesome/free-solid-svg-icons";


export default function TimelineProject({ title, timeframe, logo, listContent, technologies, projectLinks, image }) {
    const animationDuration = 500;
    const animationDirection = "left";
    const technologyAnimationDelay = 50;
    const projectLinkAnimationDelay = 50;

    return (
        <>
            <div className="col-span-1 row-span-2 mt-1 mb-5 lg:row-span-1">
                <CircleWithLine />
            </div>
            <div className="col-span-11 mb-7 pt-2 ps-1 pb-2 lg:col-span-5 lg:hidden">
                <AnimatedImage src={image.link} alt={image.alt} className={"h-36 w-auto border-2 border-e-primary-pink border-b-primary-pink md:h-56"}/>
            </div>
            <div className="col-span-11 me-24 mb-7 sm:me-0 lg:col-span-6">
                <div className="flex gap-x-2.5 relative me-4 sm:">
                    {logo}
                    <HorizontalAnimatedText
                        direction={animationDirection}
                        duration={animationDuration}
                        delay={0}
                    >
                        <h2 className="text-3xl font-semibold">{title}</h2>
                    </HorizontalAnimatedText>
                </div>
                <HorizontalAnimatedText
                        direction={animationDirection}
                        duration={animationDuration}
                        delay={0}
                    >
                        <h3 className="font-semibold text-slate-400 contrast-more:text-white text-sm mt-2 mix-blend-screen">
                            {timeframe}
                        </h3>
                </HorizontalAnimatedText>
                
                <div className="mt-4">
                    <AnimatedUnorderedList content={listContent}/>
                </div>
                <div className="mt-4 flex gap-x-2 flex-wrap">
                    <HorizontalAnimatedText direction={animationDirection} duration={animationDuration} delay={0}>
                        <strong>Key technologies:</strong>
                    </HorizontalAnimatedText>
                    {
                        technologies.map((technology, idx) => (
                            <HorizontalAnimatedText key={idx} direction={animationDirection} duration={animationDuration} delay={technologyAnimationDelay * (idx + 1)}>
                                <em>{technology}{idx === technologies.length - 1 ? "." : ","}</em>
                            </HorizontalAnimatedText>
                        ))
                    }
                </div>
                <small className="mt-4 flex gap-x-2 mb-16">
                    {
                        !!projectLinks.github &&
                        <HorizontalAnimatedText direction={animationDirection} duration={animationDuration} delay={0}>
                            <BoxLink href={projectLinks.github}>
                                <FontAwesomeIcon icon={faGithub} className='h-4'/>
                                Github
                            </BoxLink>
                        </HorizontalAnimatedText>
                    }
                    <HorizontalAnimatedText direction={animationDirection} duration={animationDuration} delay={projectLinkAnimationDelay}>
                        <BoxLink href={projectLinks.site}>
                            <FontAwesomeIcon icon={faLink} className='h-4'/>
                            View Site
                        </BoxLink>
                    </HorizontalAnimatedText>
                </small>
            </div>
            <div className="col-span-11 hidden mb-7 lg:col-span-5 lg:block pt-5">
                <AnimatedImage src={image.link} alt={image.alt} className={"h-64 w-auto border-2 border-e-primary-pink border-b-primary-pink lg:h-56 xl:h-64"}/>
            </div>
        </>
    )
}