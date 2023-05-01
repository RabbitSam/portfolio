import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <footer className="flex-grow-0 flex-shrink">
            <div className='flex flex-col gap-y-3 mb-2 justify-between sm:items-center sm:flex-row sm:mb-0'>
                <small className='text-slate-400 mix-blend-screen'>
                    &copy; Sheikh Aquib Mahmood, 2023
                </small>
                <small className='text-slate-400 flex flex-col gap-y-3 sm:flex-row sm:gap-x-2'>
                    <a href="https://github.com/RabbitSam" target="_blank" className='flex flex-row gap-x-1 justify-center items-center p-1 border rounded-md border-slate-400 bg-slate-950 bg-opacity-40 hover:text-white hover:border-white'>
                        <FontAwesomeIcon icon={faGithub} className='h-4' />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/sheikh-aquib-mahmood-0068431b0/" target="_blank" className='flex flex-row gap-x-1 justify-center items-center p-1 border rounded-md border-slate-400 bg-slate-950 bg-opacity-40 hover:text-white hover:border-white'>
                        <FontAwesomeIcon icon={faLinkedin} className='h-4'/>
                        LinkedIn
                    </a>
                </small>
            </div>
        </footer>
    );
}