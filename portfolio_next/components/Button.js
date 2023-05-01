export default function Button({ children, textSize, group }) {
    return (
        <button className={`${group ? group : ""} shadow-button bg-opacity-50 bg-slate-950 border-2 lg:text-slate-400 lg:border-slate-600 rounded-md p-2 text-${textSize} transition-all hover:shadow-button hover:border-white hover:text-white lg:shadow-none`}>
            {children}
        </button>
    );
}