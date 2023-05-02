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

		if (navigator.userAgent.match("/Android/i")) {
			window.scrollTo(0, 1);
		}
	}, []);

	return (
	<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" href="/headicon.ico" />			
		</Head>
		<div className='fixed h-full w-full overflow-hidden -z-40 hidden lg:block'>
			<div className='cursor' ref={ref}/>
			<div className='h-full w-full -z-40 fixed backdrop-blur-[1000px]'/>
		</div>
		<Component {...pageProps} />
	</>
	);
}
