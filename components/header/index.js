import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Header() {
	const { pathname } = useRouter();

	return (
		<header>
			<div className='main-header'>
				<nav>
					<ul>
						<Link href='/'>
							<a className={pathname === '/' ? 'text-primary' : 'text-black'}>
								<li>Home</li>
							</a>
						</Link>

						<Link href='/cart'>
							<a className={pathname === '/cart' ? 'text-primary' : 'text-black'}>
								<li>Cart</li>
							</a>
						</Link>
					</ul>
				</nav>
			</div>
		</header>
	);
}
