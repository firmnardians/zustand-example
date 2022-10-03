import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { products } from '../data';
import useCartStore from '../zustand/store';

export default function Home() {
	const { addToCart } = useCartStore();

	const router = useRouter();

	function handleAddToCart(item) {
		addToCart([item]);
		router.push('/cart');
	}

	return (
		<div className='container'>
			{products.map((item) => {
				return (
					<Fragment key={item.id}>
						<h4 style={{ marginBottom: 2 }}>{item.name}</h4>
						<div style={{ marginBottom: 10 }}>
							<small>{item.desc}</small>
						</div>
						<button onClick={() => handleAddToCart(item)}>Add to cart</button>
					</Fragment>
				);
			})}
		</div>
	);
}
