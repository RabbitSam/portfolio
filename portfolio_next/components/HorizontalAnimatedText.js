import { useEffect, useRef, useState } from "react";


export default function HorizontalAnimatedTextV2({ children, direction }) {
    const [visible, setVisible] = useState(false);
    const targetRef = useRef(null);
    const textRef = useRef(null);

    const translateClasses = {
        "left": "-translate-x-[110vw]",
        "right": "translate-x-[110vw]",
    };

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
                    setVisible(true);
                }

            } else if (isContentBelow) {
                // Animate to hide
                if (textRef.current && targetRef.current) {
                    setVisible(false);
                }
            } else if (isContentAbove) {
                setVisible(true);
            }
        });

        const observer = new IntersectionObserver(reveal, options);
        observer.observe(targetRef.current);

        return () => {
            observer.unobserve(targetRef.current);
        };

    }, []);


    return (
        <div className="relative">
            <div ref={textRef} className={`${visible ? "" : `${translateClasses[direction]} blur-sm`} transition-all `}>{children}</div>
            {/* This second one helps to trigger the animation */}
            <div ref={targetRef} data-revealed="false" aria-hidden="true" className="opacity-0 select-none -z-50 absolute top-0 left-0">{children}</div>
        </div>
    );
}