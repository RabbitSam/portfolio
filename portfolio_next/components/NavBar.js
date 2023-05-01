import { useRef, useState } from "react";
import Link from "next/link";
import styles from "./css/NavBar.module.css";
import NavLink from "./NavLink";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function NavBar() {
    const navRef = useRef(null);
    const [ariaHidden, setAriaHidden] = useState(true);

    const onNavButtonClicked = (e) => {
        if (navRef.current && ariaHidden && navRef.current.dataset.animation !== "true") {
            console.log(navRef.current["aria-hidden"]);
            navRef.current.dataset.animating = "true";
            const animation = navRef.current.animate([
                {
                    left: "0px",
                }
            ], {fill: "forwards", duration: 150});
            animation.finished.then(() => {
                if (navRef.current) {
                    navRef.current.dataset.animating = "false";
                    setAriaHidden(false);
                }
            });
        } else if (navRef.current && !ariaHidden && navRef.current.dataset.animation !== "true") {
            navRef.current.dataset.animating = "true";
            const animation = navRef.current.animate([
                {
                    left: "110vw",
                }
            ], {fill: "forwards", duration: 150});
            animation.finished.then(() => {
                if (navRef.current) {
                    navRef.current.dataset.animating = "false";
                    setAriaHidden(true);
                }
            });
        }
    }

    return (
        <>
            <div className="w-full flex justify-between items-center">
                <div role="banner" className={styles.logo} aria-roledescription="Page Logo.">
                    <Link href="/">
                        A
                    </Link>
                </div>
                <nav className="lg:flex flex-row gap-x-2 items-center hidden">
                    <NavLink title="Home" href="/"/>
                    <NavLink title="Projects" href="/projects"/>
                    <NavLink title="Work Experience" href="/work-experience"/>
                    <NavLink title="Contact" href="/contact"/>
                    <div className="transition-all">
                        <Button textSize="sm">Resume</Button>
                    </div>
                </nav>
                <button className="lg:hidden z-50" onClick={onNavButtonClicked}>
                    <FontAwesomeIcon icon={faBars} className="h-4 border-2 p-2 box-content overflow-visible inline-block align-middle rounded-md"/>
                </button>
            </div>
            <div ref={navRef} className="flex flex-col gap-y-2 pt-16 pb-3 px-3 left-[110vw] top-0 fixed z-40 bg-slate-950 w-screen h-screen bg-opacity-95 lg:hidden" aria-hidden={ariaHidden} data-animating="false">
                <NavLink title="Home" href="/"/>
                <NavLink title="Projects" href="/projects"/>
                <NavLink title="Work Experience" href="/work-experience"/>
                <NavLink title="Contact" href="/contact"/>
                <div className="transition-all pt-1 text-center">
                    <Button textSize="base">Download Resume</Button>
                </div>
            </div>
        </>
    );
}