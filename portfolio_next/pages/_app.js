import Head from 'next/head';
import '@/styles/globals.css'
import { useEffect, useRef } from 'react';


export default function App({ Component, pageProps }) {
	const ref = useRef();

	useEffect(() => {
		window.onmousemove = (e) => {
			const { clientX, clientY } = e;

			ref.current.animate({
			top: `${clientY}px`,
			left: `${clientX}px`
			}, {duration: 1000, fill: "forwards"});
		};
	}, []);

	return (
	<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" href="/headicon.ico" />			
		</Head>
		<div className='fixed h-[100vh] w-[100vw] overflow-hidden -z-40 hidden lg:block left-0 top-0'>
			<div className='cursor -z-50' ref={ref}/>
			<div className='-z-40 absolute left-0 top-0 h-full w-full backdrop-blur-3xl'></div>
		</div>
		<Component {...pageProps} />
	</>
	);
}
