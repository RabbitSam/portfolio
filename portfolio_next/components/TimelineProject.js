import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AnimatedImage from "./AnimatedImage";
import CircleWithLine from "./CircleWithLine";
import AnimatedUnorderedList from "./AnimatedUnorderedList";
import HorizontalAnimatedText from "./HorizontalAnimatedText";
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
                <AnimatedImage src={image.link} alt={image.alt}/>
            </div>
            <div className="col-span-11 mb-7 lg:col-span-6">
                <div className="flex gap-x-2.5 relative">
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
                <div className="mt-4 flex gap-x-2">
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
                    <HorizontalAnimatedText direction={animationDirection} duration={animationDuration} delay={0}>
                        <a href={projectLinks.github} target="_blank" className='flex flex-row gap-x-1 justify-center items-center p-1 border rounded-md border-slate-400 bg-slate-950 bg-opacity-40 hover:text-white hover:border-white'>
                            <FontAwesomeIcon icon={faGithub} className='h-4'/>
                            Github
                        </a>
                    </HorizontalAnimatedText>
                    <HorizontalAnimatedText direction={animationDirection} duration={animationDuration} delay={projectLinkAnimationDelay}>
                        <a href={projectLinks.site} target="_blank" className='flex flex-row gap-x-1 justify-center items-center p-1 border rounded-md border-slate-400 bg-slate-950 bg-opacity-40 hover:text-white hover:border-white'>
                            <FontAwesomeIcon icon={faLink} className='h-4'/>
                            View Site
                        </a>
                    </HorizontalAnimatedText>
                </small>
            </div>
            <div className="col-span-11 hidden mb-7 lg:col-span-5 lg:block">
                <AnimatedImage src={image.link} alt={image.alt}/>
            </div>
        </>
    )
}