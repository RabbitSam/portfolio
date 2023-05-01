import { useEffect, useRef } from "react"


export default function AnimatedLogo({logo, description, className, keyframes, keepStyles}) {
    const targetRef = useRef(null);
    const logoRef = useRef(null);

    const animationFill = "forwards";
    const animationDuration = 500;

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

            if (isFullyIntersecting) {
                // Animate to revealed
                if (logoRef.current && targetRef.current && targetRef.current.dataset.revealed !== "true") {
                    logoRef.current.animate(keyframes.reveal, {fill: animationFill, duration: animationDuration});
                    targetRef.current.dataset.revealed = "true";
                }
            } else if (isContentBelow) {
                // Animate to hidden
                if (logoRef.current && targetRef.current) {
                    logoRef.current.animate(keyframes.hide, {fill: animationFill, duration: animationDuration});
                    targetRef.current.dataset.revealed = "false";
                }
            } else if (isContentAbove) {
                // Set to revealed
                if (logoRef.current && targetRef.current) {
                    Object.assign(logoRef.current.style, keepStyles);
                    targetRef.current.dataset.revealed = "true";
                }
            }
        };

        const observer = new IntersectionObserver(reveal, options);
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

    }, []);

    return (
        <div className="relative select-none" role="img" aria-label={description} >
            <div ref={logoRef} className={className}>
                {logo}
            </div>
            <div ref={targetRef} data-revealed="false" aria-hidden="true" className={`${className} opacity-0 absolute left-0 top-0`}>
                Reference
            </div>
        </div>  
    );
}