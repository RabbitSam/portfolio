import Link from "next/link";
import styles from "./css/NavBar.module.css";
import NavLink from "./NavLink";
import Button from "./Button";


export default function NavBar() {
    return (
        <nav className="w-full flex justify-between items-center">
            <div className={styles.logo}>
                <Link href="/">
                    SAM
                </Link>
            </div>
            <div className="flex flex-row gap-x-2 items-center">
                <NavLink title="Home" href="/"/>
                <NavLink title="Projects" href="/projects"/>
                <NavLink title="Work Experience" href="/work-experience"/>
                <div className="transition-all">
                    <Button>Resume</Button>
                </div>
            </div>
        </nav>
    );
}