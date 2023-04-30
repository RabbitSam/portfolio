import { useEffect, useRef } from "react";


export default function HorizontalAnimatedText({ children, direction, duration, delay }) {
    const translateClasses = {
        "left": "-translate-x-[110vw]",
        "right": "translate-x-[110vw]",
    };

    const translateStyles = {
        "left": "-110vw",
        "right": "110vw"
    }

    const animationFill = "forwards";

    const targetRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "500px",
            threshold: 1
        };

        const reveal = (([entry]) => {
            const isFullyIntersecting = entry.isIntersecting && entry.intersectionRatio === 1;
            const isContentBelow = entry.boundingClientRect.top > 0;
            const isContentAbove = entry.boundingClientRect.top < 0;

            if (isFullyIntersecting) {
                // Animate to reveal
                if (textRef.current && targetRef.current && targetRef.current.dataset.revealed !== "true") {
                    const textKeyframes = [
                        {
                            transform: "translateX(0%)",
                            filter: "none",
                            easing: "ease-in-out"
                        }
                    ];

                    textRef.current.animate(textKeyframes, {fill: animationFill, duration, delay});
                    targetRef.current.dataset.revealed = "true";
                }

            } else if (isContentBelow) {
                // Animate to hide
                if (textRef.current && targetRef.current) {
                    const textKeyframes = [
                        {
                            transform: `translateX(${translateStyles[direction]})`,
                            filter: "blur(4px)",
                            easing: "ease-in-out"
                        }
                    ];

                    textRef.current.animate(textKeyframes, {fill: animationFill, duration});
                    targetRef.current.dataset.revealed = "false";
                }
            } else if (isContentAbove) {
                // Set to revealed
                if (textRef.current && targetRef.current) {
                    textRef.current.style.transform = `translateX(0%)`;
                    textRef.current.style.filter = "none";

                    targetRef.current.dataset.revealed = "true";
                }
            }
        });

        const observer = new IntersectionObserver(reveal, options);
        observer.observe(targetRef.current);

    }, []);

    return (
        <div className="relative">
            <div ref={textRef} className={`${translateClasses[direction]} blur-sm`}>{children}</div>
            {/* This second one helps to trigger the animation */}
            <div ref={targetRef} data-revealed="false" aria-hidden="true" className="opacity-0 select-none -z-50 absolute top-0 left-0">{children}</div>
        </div>
    );
}