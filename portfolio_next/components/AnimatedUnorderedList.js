import { useEffect, useRef, useState } from "react";


function AnimatedListItemV2({ children }) {
    const [visible, setVisible] = useState(false);
    const targetRef = useRef(null);
    
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
                setVisible(true);
            } else if (isContentBelow) {
                // Animate to hide
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
        <>
            <li className={`flex gap-x-3`}>
                <div className="relative">
                    <div role="presentation" className={`${visible ? "scale-100" : "scale-0"} transition-all duration-500 ease-in-out`}>
                        &bull;
                    </div>
                    <div aria-hidden="true" ref={targetRef} className="opacity-0 absolute left-0 top-0">
                        &bull;
                    </div>
                </div>
                <div className={`${visible ? "" : "-translate-x-[110vw] blur-sm"} transition-all duration-500 ease-in-out`}>
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
                    <AnimatedListItemV2 key={idx}>
                        {item}
                    </AnimatedListItemV2>
                ))
            }
        </ul>
    );
}