export default function Button({ children, textSize, group, type, disabled }) {
    return (
        <button type={type ? type : "button"} className={`${group ? group : ""} shadow-button bg-opacity-50 bg-slate-950 border-2 lg:text-slate-300 lg:border-slate-600 rounded-md p-2 text-${textSize} transition-all hover:shadow-button hover:border-white hover:text-white lg:shadow-none contrast-more:lg:border-white contrast-more:lg:text-white disabled:cursor-not-allowed disabled:shadow-none`} disabled={!!disabled}>
            {children}
        </button>
    );
}