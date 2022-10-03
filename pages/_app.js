import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../components/header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<title>Zustand Example</title>
			</Head>

			<Header />
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
