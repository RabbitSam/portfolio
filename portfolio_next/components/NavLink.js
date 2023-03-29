import Link from "next/link";
import styles from "./css/NavLink.module.css";
import { useRouter } from "next/router";

export default function NavLink({ href, title }) {
    const router = useRouter();

    const navStyle = router.pathname === href ? styles.NavLinkActive : styles.NavLink ;

    return (
        <Link href={href} className={`${navStyle} font-semibold text-slate-400 transition-all hover:text-white`}>
            {title}
        </Link>
    );
}