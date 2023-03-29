// import styles from "./css/Button.module.css";


export default function Button({ children }) {
    return (
        <button className="border-2 text-slate-400 border-slate-600 rounded-md p-2 text-sm transition-all hover:shadow-button hover:border-white hover:text-white">
            {children}
        </button>
    );
}