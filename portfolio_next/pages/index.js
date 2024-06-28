import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import AnimatedHeading from '@/components/AnimatedHeading';
import sam from '@/public/images/sam.png';

export default function Home() {

	const skills = [
		"JavaScript", "TypeScript", "Python", "Java", "HTML/CSS", "React.js", "Angular", "Next.js", "Express.js", "Node.js", "MongoDB", "Mongoose",
		"Redux", "React-Router", "Flask", "Django", "TailwindCSS", "Bootstrap", "PostgreSQL", "SCSS/SASS", "Figma", "AdobeXD"
	];

	return (
		<>
			<Head>
				<title>Home | Sheikh Aquib Mahmood</title>
				<meta name="description" content="Sheikh Aquib Mahmood's Portfolio" />
			</Head>
			<Layout>
				<div className="relative text-center order-1">
					<AnimatedHeading content="About"/>
				</div>
				<div className='flex flex-col-reverse gap-y-5 justify-end pt-5 pb-1 items-center h-full overflow-hidden lg:flex-row lg:gap-x-16 lg:justify-center lg:items-start lg:pt-20 lg:pb-0'>
					<div className="overflow-visible flex flex-col justify-center items-center lg:items-start gap-y-3 sm:w-3/4 md:w-2/3 lg:w-1/3 mx-4 lg:mx-0">
						<div className={`text-white select-none italic`}>
							Web Developer with 2 years of experience. Equipped with a versatile set of skills.
						</div>
						<div className='flex flex-wrap gap-2 text-sm w-full'>
							{
								skills.map((skill) => (
									<div className='border-2 border-slate-600 text-white lg:text-slate-100 bg-slate-950 bg-opacity-50 px-2 py-1 rounded-md hover:border-slate-500 hover:text-white' key={skill}>
										{skill}
									</div>
								))
							}
						</div>
						<div className='pt-4 self-center md:self-start'>
							<a href="/projects">
								<Button textSize="lg" group="group/button">
									See My Work{' '}
									<span aria-hidden="true" className='border-t-2 lg:border-slate-400 inline-block mb-1 translate-x-2 group-hover/button:px-1.5 group-hover/button:border-white transition-all'/>
									<span aria-hidden="true" className='mb-px border-e-2 border-b-2 p-[3px] inline-block -rotate-45 lg:border-slate-400 group-hover/button:border-white' />
								</Button>
							</a>
						</div>
					</div>
					<Image
						src={sam}
						className={`${styles.image} w-64 h-64 rounded-md object-cover`}
						alt={"Sheikh Aquib Mahmood."}
					/>
				</div>
			</Layout>
		</>
	)
}
