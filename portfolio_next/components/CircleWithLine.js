import { useEffect, useRef, useState } from "react";
import styles from "./css/CircleWithLine.module.css";


export default function CircleWithLineV2({hideCircle}) {
    const [firstTime, setFirstTime] = useState(true);
    const [visible, setVisible] = useState(false);

    const observeTargetRef = useRef(null);

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

            if (isFullyIntersecting || isContentAbove) {
                // Animate to reveal
                setVisible(true);
            } else if (isContentBelow) {
                // Animate to hidden
                setVisible(false);
            }

            setFirstTime(false);
        };

        const observer = new IntersectionObserver(reveal, options);
        if (observeTargetRef.current) {
            observer.observe(observeTargetRef.current);
        }

        return () => {
            observer.disconnect();
        };

    }, []);

    return (
        <>
            <div role="presentation" className="relative h-full">
                <div className={`${styles.circle} ${hideCircle ? "" : visible ? styles.circleVisible : firstTime ? "" : styles.circleHidden}`}>
                    <div className="bg-transparent w-7 h-7 rounded-full border-slate-950 border-4" />
                    <div className="bg-gradient-to-b from-primary-pink to-primary-red w-9 h-9 absolute -z-10 rounded-full blur-[1px] -left-1 -top-1" />
                </div>
                <div ref={observeTargetRef} aria-hidden="true" className="opacity-0 w-9 h-9 absolute -z-50 rounded-full -left-1 -top-1" />
                <div className={`h-full`}>
                    <div className={`${styles.line} ${visible ? styles.lineVisible : firstTime ? "" : styles.lineHidden} ${hideCircle ? "" : styles.animationDelay}`} />
                </div>
            </div>
        </>  
    );
}