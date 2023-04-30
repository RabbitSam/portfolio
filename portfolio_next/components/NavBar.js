import Link from "next/link";
import styles from "./css/NavBar.module.css";
import NavLink from "./NavLink";
import Button from "./Button";
import { useEffect } from "react";


export default function NavBar() {

    return (
        <div className="w-full flex justify-between items-center">
            <div role="banner" className={styles.logo} aria-roledescription="Page Logo.">
                <Link href="/">
                    A
                </Link>
            </div>
            <nav className="flex flex-row gap-x-2 items-center">
                <NavLink title="Home" href="/"/>
                <NavLink title="Projects" href="/projects"/>
                <NavLink title="Work Experience" href="/work-experience"/>
                <NavLink title="Contact" href="/contact"/>
                <div className="transition-all">
                    <Button textSize="sm">Resume</Button>
                </div>
            </nav>
        </div>
    );
}