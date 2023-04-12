import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default function Layout({ children }) {
    return (
        <div className="px-3 py-2 flex flex-col justify-between h-full">
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </div>
    );
}