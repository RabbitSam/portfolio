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
		<div className='fixed h-full w-full overflow-hidden -z-40 hidden lg:block'>
			<div className='cursor' ref={ref}/>
			<div className='h-full w-full -z-40 fixed backdrop-blur-[1000px]'/>
		</div>
		<Component {...pageProps} />
	</>
	);
}
