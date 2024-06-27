import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export default function AnimatedImageV2({src, alt, className}) {
    const [visible, setVisible] = useState(false);

    const targetRef = useRef(null);
    
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "500px",
            threshold: 0.25
        };

        const reveal = (([entry]) => {
            const isSufficientlyIntersecting = entry.isIntersecting && entry.intersectionRatio >= 0.25;
            const isContentBelow = entry.boundingClientRect.top > 0;
            const isContentAbove = entry.boundingClientRect.top < 0;

            if (isSufficientlyIntersecting) {
                // Animate to reveal
                setVisible(true);

            } else if (isContentBelow) {
                // Animate to hide
                setVisible(false);
            } else if (isContentAbove) {
                // Set to revealed
                setVisible(true);
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
        <Image ref={targetRef} src={src} alt={alt} className={`${className} opacity-0 rounded-md transition-all duration-500 ease-in-out ${visible ? `!opacity-100 -translate-x-[6px] -translate-y-[6px] shadow-image` : ""}`}/>
    )
}