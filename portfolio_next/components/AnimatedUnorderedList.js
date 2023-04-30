import { useEffect, useRef } from "react";


function AnimatedListItem({ children }) {
    const contentRef = useRef(null);
    const markerRef = useRef(null);
    const targetRef = useRef(null);

    const animationDuration = 500;
    const animationDelay = 0;
    const animationFill = "forwards";
    
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
                const markerKeyframes = [
                    {
                        transform: "scale(0)",
                        easing: "ease-in-out",
                    },
                    {
                        transform: "scale(1)",
                        easing: "ease-in-out",
                    }
                ];
        
                const contentKeyframes = [
                    {
                        filter: "blur(4px)",
                        transform: "translateX(-110vw)",
                        easing: "ease-in-out"
                    },
                    {
                        filter: "blur(0px)",
                        transform: "translateX(0%)",
                        easing: "ease-in-out"
                    }
                ];

                if (markerRef.current && contentRef.current && targetRef.current.dataset.revealed !== "true") {
                    markerRef.current.dataset.revealed = "true";
                    markerRef.current.animate(markerKeyframes, {fill: animationFill, duration: animationDuration});
                    contentRef.current.animate(contentKeyframes, {fill: animationFill, duration: animationDuration, delay: animationDelay});
                }
            } else if (isContentBelow) {
                // Animate to hide
                const markerKeyframes = [
                    {
                        transform: "scale(1)",
                        easing: "ease-in-out",
                    },
                    {
                        transform: "scale(0)",
                        easing: "ease-in-out",
                    }
                ];
        
                const contentKeyframes = [
                    {
                        filter: "blur(0px)",
                        transform: "translateX(0%)",
                        easing: "ease-in-out"
                    },
                    {
                        filter: "blur(4px)",
                        transform: "translateX(-110vw)",
                        easing: "ease-in-out"
                    }
                ];

                if (markerRef.current && contentRef.current) {
                    targetRef.current.dataset.revealed = "false";
                    markerRef.current.animate(markerKeyframes, {fill: animationFill, duration: animationDuration});
                    contentRef.current.animate(contentKeyframes, {fill: animationFill, duration: animationDuration, delay: animationDelay});
                    
                }

            } else if (isContentAbove) {
                // Keep revealed
                if (markerRef.current) {
                    targetRef.current.dataset.revealed = "true";
                    markerRef.current.style.transform = "scale(1)";

                    if (contentRef.current) {
                        contentRef.current.style.transform = "translateX(0%)";
                        contentRef.current.style.filter = "none";
                    }
                }
                
            }
        };

        const observer = new IntersectionObserver(reveal, options);
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

    }, []);

    return (
        <>
            <li className={`flex gap-x-3`}>
                <div className="relative">
                    <div role="presentation" ref={markerRef} className="scale-0">
                        &bull;
                    </div>
                    <div aria-hidden="true" data-revealed="false" ref={targetRef} className="opacity-0 absolute left-0 top-0">
                        &bull;
                    </div>
                </div>
                <div ref={contentRef} className="-translate-x-[110vw] blur-sm">
                    {children}
                </div>
            </li>
        </>
    );
}


export default function AnimatedUnorderedList({ content }) {
    return (
        <ul role="list" className="list-disc">
            {
                content.map((item, idx) => (
                    <AnimatedListItem key={idx}>
                        {item}
                    </AnimatedListItem>
                ))
            }
        </ul>
    );
}