import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import BoxLink from "./BoxLink";


export default function Footer() {
    return (
        <>
            <footer className="flex-grow-0 flex-shrink">
                <div className="w-full">
                    <div className='flex flex-col gap-y-3 pb-2 justify-between sm:items-center sm:flex-row sm:mb-0'>
                        <small className='text-slate-400 mix-blend-screen'>
                            &copy; Sheikh Aquib Mahmood, 2023
                        </small>
                        <small className='flex flex-col gap-y-3 sm:flex-row sm:gap-x-2'>
                            <BoxLink href="https://github.com/RabbitSam">
                                <FontAwesomeIcon icon={faGithub} className='h-4' />
                                GitHub
                            </BoxLink>
                            <BoxLink href="https://www.linkedin.com/in/sheikh-aquib-mahmood-0068431b0/">
                                <FontAwesomeIcon icon={faLinkedin} className='h-4'/>
                                LinkedIn
                            </BoxLink>
                        </small>
                    </div>
                </div>
            </footer>
        </>
    );
}