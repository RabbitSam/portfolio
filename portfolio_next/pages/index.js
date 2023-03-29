import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import NavBar from '@/components/NavBar';


export default function Home() {

	return (
		<>
			<Head>
				<title>Sheikh Aquib Mahmood</title>
				<meta name="description" content="Sheikh Aquib Mahmood's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="px-3 py-2 flex flex-col justify-between h-full">
                <header className="flex-grow-0 flex-shrink">
					<NavBar />
				</header>
                <main className='flex-auto'>
					Hello
                </main>
				<footer className='flex-shrink flex-grow-0'>
					Hello
				</footer>
            </div>
		</>
	)
}
