import { useEffect, useRef, useState } from "react";


export default function HorizontalAnimatedTextV2({ children, direction }) {
    const [visible, setVisible] = useState(false);
    const targetRef = useRef(null);

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
                setVisible(true);
            } else if (isContentBelow) {
                // Animate to hide
                setVisible(false);
            } else if (isContentAbove) {
                setVisible(true);
            }
        });

        const observer = new IntersectionObserver(reveal, options);
        observer.observe(targetRef.current);

        return () => {
            observer.disconnect();
        };

    }, []);


    return (
        <div className="relative">
            <div className={`${visible ? "" : `${translateClasses[direction]} blur-sm`} transition-all ease-in-out`}>{children}</div>
            {/* This second one helps to trigger the animation */}
            <div ref={targetRef} aria-hidden="true" className="opacity-0 select-none -z-50 absolute top-0 left-0">{children}</div>
        </div>
    );
}