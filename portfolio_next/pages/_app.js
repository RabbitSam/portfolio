import Head from 'next/head';
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
	return (
	<>
		<Head>
			<meta name="google-site-verification" content="K-OzgidwXooWciEOPQMeIXvMf_Mfea33ImqJ_Rupd2g" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" href="/headicon.ico" />			
		</Head>
		<div className='fixed h-[100vh] w-[100vw] overflow-hidden -z-40 left-0 top-0'>
			<div className='cursor -z-50'/>
			<div className='-z-40 absolute left-0 top-0 h-full w-full backdrop-blur-3xl'></div>
		</div>
		<Component {...pageProps} />
	</>
	);
}
