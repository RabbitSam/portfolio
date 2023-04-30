import styles from "./css/AnimatedHeading.module.css";


export default function AnimatedHeading({ content }) {
    return (
        <h1 className={`${styles.heading}`}>
            {content}
        </h1>
    );
}