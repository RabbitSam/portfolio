import CircleWithLine from "./CircleWithLine";
import { useEffect, useRef, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";


export default function DualTimelineItemV2({ position, title, timeline, listContent, keyTechnologies }) {
    const [visible, setVisible] = useState(false);
    const targetRef = useRef(null);

    const positionMap = {
        keyframes: {
            right: "-6px",
            left: "6px"
        },
        className: {
            right: "lg:-translate-x-1.5",
            left: "lg:translate-x-1.5"
        },
        order: {
            right: {
                circle: "lg:order-first",
                content: "lg:order-last"
            },
            left: {
                circle: "lg:order-last",
                content: "lg:order-first"
            }
        },
        leftTriangle: {
            right: "",
            left: "lg:hidden"
        },
        rightTriangle: {
            right: "hidden",
            left: "lg:block"
        },
        shadow: {
            right: "lg:shadow-image",
            left: "lg:shadow-image-reverse"
        },
        translate: {
            right: "lg:-translate-x-6",
            left: "lg:translate-x-6"
        }
    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "500px",
            threshold: 1
        };

        const reveal = (([entry]) => {
            const isSufficientlyIntersecting = entry.isIntersecting && entry.intersectionRatio === 1;
            const isContentBelow = entry.boundingClientRect.top > 0;
            const isContentAbove = entry.boundingClientRect.top < 0;

            if (isSufficientlyIntersecting || isContentAbove) {
                setVisible(true);

            } else if (isContentBelow) {
                // Animate to hide
                setVisible(false);
            }
        });

        const observer = new IntersectionObserver(reveal, options);
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            observer.disconnect();
        };

    }, []);

    return (
        <>
            <div className="grid grid-cols-12 mb-12 sm:gap-x-2 lg:gap-x-0 lg:grid-cols-11">
                <div className={`col-span-2 sm:col-span-1 -mb-4 flex lg:col-start-6 lg:items-center lg:justify-center ${positionMap.order[position].circle}`} >
                    <CircleWithLine />
                </div>
                <div className={`col-span-10 flex flex-row sm:col-span-11 lg:col-span-5 transition-all ease-in-out delay-[50ms] duration-500 ${visible ? "" : `opacity-0 ${positionMap.order[position].content} ${positionMap.className[position]} sm:-translate-x-1.5`}`}>
                    <div className={`border-[20px] border-y-transparent border-s-transparent lg: bg-transparent border-white w-0 h-0 -translate-x-6 -translate-y-1.5 z-10 ${positionMap.leftTriangle[position]}`}></div>
                    <div className={`border-2 w-full -translate-x-6 ${positionMap.translate[position]} -translate-y-10 p-3 rounded-lg shadow-image bg-slate-950 bg-opacity-60 ${positionMap.shadow[position]}`}>
                        <h2 ref={targetRef} className="text-xl sm:text-2xl sm:self-center mb-2">
                            {title}
                        </h2>
                        <h3 className="font-semibold text-slate-400 contrast-more:text-white text-sm mix-blend-screen">
                            {timeline}
                        </h3>
                        <ul className="mt-2">
                            {
                                listContent.map((item, index) => (
                                    <li className="flex gap-x-2" key={index}>
                                        <div role="presentation">
                                            &bull;
                                        </div>
                                        <div>
                                            {item}
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        { keyTechnologies && keyTechnologies.length &&
                            <div className="flex mt-4 gap-x-2 flex-wrap">
                                <strong>Key Technologies:</strong>
                                {keyTechnologies.map((item, index) => (
                                    <em key={index}>{item}{index === keyTechnologies.length - 1 ? "" : ","}</em>
                                ))}
                            </div>
                        }
                    </div>
                    <div className={`border-[20px] hidden border-y-transparent border-e-transparent ${positionMap.rightTriangle[position]} bg-transparent border-white w-0 h-0 -translate-x-6 ${positionMap.translate[position]} -translate-y-1.5 z-10`}></div>
                </div>
            </div>
        </>
    );
}