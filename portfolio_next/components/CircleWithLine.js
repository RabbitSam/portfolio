import { useEffect, useRef } from "react";


export default function CircleWithLine({hideCircle, hideLine}) {
    const observeTargetRef = useRef(null);
    const circleRef = useRef(null);
    const lineRef = useRef(null);

    const animationFill = "forwards";
    const animationDuration = 500;
    const secondAnimationDelay = hideCircle ? 0 : animationDuration;

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "500px",
            threshold: 1,
        };
    
        const reveal = ([entry]) => {
            const isFullyIntersecting = entry.isIntersecting && entry.intersectionRatio === 1;
            const isContentBelow = entry.boundingClientRect.top > 0;
            const isContentAbove = entry.boundingClientRect.top < 0;

            if (isFullyIntersecting) {
                // Animate to reveal
                const circleKeyframes = [
                    {
                        transform: "scale(0)",
                        easing: "ease-in-out",
                        offset: 0,
                    },
                    {
                        transform: "scale(1.2)",
                        easing: "ease-in-out",
                        offset: 0.6,
                    },
                    {
                        transform: "scale(0.8)",
                        easing: "ease-in-out",
                        offset: 0.8
                    },
                    {
                        transform: "scale(1)",
                        easing: "ease-in-out",
                        offset: 1,
                    }
                ];
    
                const lineKeyframes = [
                    {
                        backgroundPosition: "center 100%",
                        easing: "ease-in-out"
                    },
                    {
                        backgroundPosition: "center top",
                        easing: "ease-in-out"
                    }
                ];
    
                if (circleRef.current && lineRef.current && circleRef.current.dataset.revealed === "false") {
    
                    circleRef.current.dataset.revealed = "true";
                    if (!hideCircle) {
                        circleRef.current.animate(circleKeyframes, {duration: animationDuration, fill: animationFill});
                    }
                    lineRef.current.animate(lineKeyframes, {duration: animationDuration, fill: animationFill, delay: secondAnimationDelay});
                }
            } else if (isContentBelow) {
                // Animate to hidden
                const circleKeyframes = [
                    {
                        transform: "scale(1)",
                        easing: "ease-in-out",
                        offset: 0,
                    },
                    {
                        transform: "scale(1.2)",
                        easing: "ease-in-out",
                        offset: 0.2,
                    },
                    {
                        transform: "scale(0)",
                        easing: "ease-in-out",
                        offset: 1,
                    }
                ];
    
                const lineKeyframes = [
                    {
                        backgroundPosition: "center top",
                        easing: "ease-in-out"
                    },
                    {
                        backgroundPosition: "center 100%",
                        easing: "ease-in-out"
                    }
                ];
    
                if (circleRef.current && lineRef.current) {
                    circleRef.current.dataset.revealed = "false";

                    lineRef.current.animate(lineKeyframes, {duration: animationDuration, fill: animationFill});
                    if (!hideCircle) {
                        circleRef.current.animate(circleKeyframes, {duration: animationDuration, fill: animationFill, delay: secondAnimationDelay});
                    }
                }
            } else if (isContentAbove) {
                // Set to revealed
                if (circleRef.current && lineRef.current) {
                    if (!hideCircle) {
                        circleRef.current.style.transform = "scale(1)";
                    }
                    lineRef.current.style.backgroundPosition = "center top";
                    circleRef.current.dataset.revealed = "true";
                }
            }
        };

        const observer = new IntersectionObserver(reveal, options);
        if (lineRef.current && observeTargetRef.current) {
            observer.observe(observeTargetRef.current);
        }

    }, []);

    return (
        <>
            <div role="presentation" className="relative h-full">
                <div ref={circleRef} data-revealed={"false"} className="relative w-fit scale-0">
                    <div className="bg-transparent w-7 h-7 rounded-full border-slate-950 border-4" />
                    <div className="bg-gradient-to-b from-primary-pink to-primary-red w-9 h-9 absolute -z-10 rounded-full blur-[1px] -left-1 -top-1" />
                </div>
                <div ref={observeTargetRef} aria-hidden="true" className="opacity-0 w-9 h-9 absolute -z-50 rounded-full -left-1 -top-1" />
                <div className={`${hideLine ? "hidden" : ""} h-full`}>
                    <div ref={lineRef} className="absolute top-7 left-[0.6rem] -z-20 bg-[length:100%_300%] w-2 h-full bg-gradient-to-b from-primary-pink via-primary-red via-25% to-transparent to-50% bg-[center_100%] blur-[1px] rounded-md" />
                </div>
            </div>
        </>  
    );
}