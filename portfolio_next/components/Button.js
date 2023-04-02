// import styles from "./css/Button.module.css";


export default function Button({ children, textSize, group }) {
    return (
        <button className={`${group} bg-opacity-50 bg-slate-950 border-2 text-slate-400 border-slate-600 rounded-md p-2 text-${textSize} transition-all hover:shadow-button hover:border-white hover:text-white`}>
            {children}
        </button>
    );
}