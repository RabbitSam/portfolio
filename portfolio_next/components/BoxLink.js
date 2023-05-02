export default function BoxLink({ href, children }) {
    return (
        <a href={href} target="_blank" className='flex flex-row gap-x-1 justify-center items-center p-1 border rounded-md lg:border-slate-400 contrast-more:lg:border-white lg:text-slate-300 contrast-more:lg:text-white bg-slate-950 bg-opacity-40 hover:text-white hover:border-white'>
            {children}
        </a>
    );
}