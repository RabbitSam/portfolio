export default function Layout({ children }) {
    return (
        <div className="px-3 py-2 flex flex-col justify-between h-full">
            {children}
        </div>
    );
}