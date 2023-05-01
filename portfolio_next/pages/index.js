import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import sam from '@/public/images/sam.png';

export default function Home() {

	return (
		<>
			<Head>
				<title>Home | Sheikh Aquib Mahmood</title>
				<meta name="description" content="Sheikh Aquib Mahmood's Portfolio" />
			</Head>
			<Layout>
				<div className='flex flex-col-reverse gap-y-14 justify-center items-center h-full overflow-hidden lg:flex-row lg:gap-x-16'>
					<div className="overflow-visible">
						<h1 className={`text-white text-4xl leading-tight select-none lg:text-5xl`}>
							Hey there, I'm <br />
							<span className='font-semibold'>Sheikh <span className={styles.headingLetter}>A</span>quib <br className='sm:hidden' />Mahmood,<br /></span>
							Web Developer
						</h1>
						<div className='pt-4'>
							<a href="/projects">
								<Button textSize="lg" group="group/button">
									See My Work{' '}
									<span className='border-t-2 lg:border-slate-400 inline-block mb-1 translate-x-2 group-hover/button:px-1.5 group-hover/button:border-white transition-all'/>
									<span className='mb-px border-e-2 border-b-2 p-[3px] inline-block -rotate-45 lg:border-slate-400 group-hover/button:border-white' />
								</Button>
							</a>
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
