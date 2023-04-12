import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <footer className="flex-grow-0 flex-shrink">
            <div className='flex flex-row justify-between items-center'>
                <small className='text-slate-400 mix-blend-screen'>
                    &copy; Sheikh Aquib Mahmood, 2023
                </small>
                <small className='text-slate-400 flex flex-row gap-x-3'>
                    <Link href="https://github.com/RabbitSam" target="_blank" className='flex flex-row gap-x-1 justify-center items-center p-1 border rounded-md border-slate-400 bg-slate-950 bg-opacity-40 hover:text-white hover:border-white'>
                        <FontAwesomeIcon icon={faGithub} className='h-4' />
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/sheikh-aquib-mahmood-0068431b0/" target="_blank" className='flex flex-row gap-x-1 justify-center items-center p-1 border rounded-md border-slate-400 bg-slate-950 bg-opacity-40 hover:text-white hover:border-white'>
                        <FontAwesomeIcon icon={faLinkedin} className='h-4'/>
                        LinkedIn
                    </Link>
                </small>
            </div>
        </footer>
    );
}