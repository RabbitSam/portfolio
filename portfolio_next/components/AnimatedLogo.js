import { useEffect, useRef, useState } from "react";


const DEFAULT_HIDDEN_CLASS_NAME = "opacity-0 blur-sm";
const DEFAULT_VISIBLE_CLASS_NAME = "opacity-1 blur-none";


export default function AnimatedLogoV2({logo, description, className="", hiddenClassName=DEFAULT_HIDDEN_CLASS_NAME, visibleClassName=DEFAULT_VISIBLE_CLASS_NAME}) {
    const [visible, setVisible] = useState(false);

    const targetRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "500px",
            threshold: 1
        };

        const reveal = ([entry]) => {
            const isFullyIntersecting = entry.isIntersecting && entry.intersectionRatio === 1;
            const isContentBelow = entry.boundingClientRect.top > 0;
            const isContentAbove = entry.boundingClientRect.top < 0;

            if (isFullyIntersecting || isContentAbove) {
                // Animate to revealed
                setVisible(true);
            } else if (isContentBelow) {
                // Animate to hidden
                setVisible(false);
            }
        };

        const observer = new IntersectionObserver(reveal, options);
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            observer.disconnect();
        };

    }, []);

    return (
        <div className="relative select-none" role="img" aria-label={description} >
            <div ref={logoRef} className={`${className} transition-all duration-500 ease-in-out ${visible ? visibleClassName : hiddenClassName}`}>
                {logo}
            </div>
            <div ref={targetRef} aria-hidden="true" className={`${className} opacity-0 absolute left-0 top-0`}>
                Reference
            </div>
        </div>  
    );
}