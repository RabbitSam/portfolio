import Image from "next/image";
import { useEffect, useRef } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const [pinkColor, redColor] = [fullConfig.theme.colors.primary.pink, fullConfig.theme.colors.primary.red]
const imageBoxShadow = fullConfig.theme.boxShadow.image.replace('theme("colors.primary.pink")', pinkColor).replace('theme("colors.primary.red")', redColor);

export default function AnimatedImage({src}) {
    const targetRef = useRef(null);

    const animationFill = "forwards";
    const duration = 300;
    const delay = 200;
    
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
                if (targetRef.current && targetRef.current.dataset.revealed !== "true") {
                    const keyframes = [
                        {
                            boxShadow: imageBoxShadow,
                            transform: "translate(-6px, -6px)",
                            opacity: 1,
                            easing: "ease-in-out"
                        }
                    ];

                    targetRef.current.animate(keyframes, {fill: animationFill, duration, delay});
                    targetRef.current.dataset.revealed = "true";
                }

            } else if (isContentBelow) {
                // Animate to hide
                if (targetRef.current) {
                    const keyframes = [
                        {
                            opacity: 0,
                            transform: "translate(0%)",
                            boxShadow: "none",
                            easing: "ease-in-out"
                        }
                    ];

                    targetRef.current.animate(keyframes, {fill: animationFill, duration, delay});
                    targetRef.current.dataset.revealed = "false";
                }
            } else if (isContentAbove) {
                // Set to revealed
                if (targetRef.current) {
                    targetRef.current.style.opacity = "1";
                    targetRef.current.style["box-shadow"] = imageBoxShadow;
                    targetRef.current.style.transform = "translate(-6px, -6px)";

                    targetRef.current.dataset.revealed = "true";
                }
            }
        });

        const observer = new IntersectionObserver(reveal, options);
        observer.observe(targetRef.current);
    }, []);


    return (
        <Image ref={targetRef} src={src} data-revealed="false" className="h-auto w-72 rounded-lg border-2 border-e-primary-pink border-b-primary-pink opacity-0 lg:h-60 lg:w-auto" />
    )
}