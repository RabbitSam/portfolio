import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import sam from '@/public/images/sam.png';

export default function Home() {

	return (
		<>
			<Head>
				<title>Home | Sheikh Aquib Mahmood</title>
				<meta name="description" content="Sheikh Aquib Mahmood's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/headicon.ico" />
			</Head>
			<Layout>
				<div className='flex flex-col-reverse gap-y-14 justify-center items-center h-full overflow-hidden lg:flex-row lg:gap-x-16'>
					<div className="overflow-visible">
						<h1 className={`${styles.headingName} text-5xl leading-tight select-none`}>
							Hey there, I'm<br />
							<span className={styles.headingLetter}>S</span>heikh <span className={styles.headingLetter}>A</span>quib <span className={styles.headingLetter}>M</span>ahmood,<br />
							Web Developer
						</h1>
						<div className='pt-4'>
							<Link href="/">
								<Button textSize="lg" group="group/button">
									See My Work{' '}
									<span className='border-t-2 border-slate-400 inline-block mb-1 translate-x-2 group-hover/button:px-1.5 group-hover/button:border-white transition-all'/>
									<span className='mb-px border-e-2 border-b-2 p-[3px] inline-block -rotate-45 border-slate-400 group-hover/button:border-white' />
								</Button>
							</Link>
						</div>
					</div>
					<Image
						src={sam}
						className={`${styles.image} w-64 h-64 rounded-md`}
						alt={"Sheikh Aquib Mahmood."}
					/>
				</div>
			</Layout>
		</>
	)
}
