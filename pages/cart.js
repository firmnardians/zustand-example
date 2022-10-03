import React from 'react';
import useCartStore from '../zustand/store';

export default function Cart() {
	const { carts, removeAllCart } = useCartStore();

	return (
		<div className='container'>
			<h4>My Cart</h4>

			{carts.length > 0 ? (
				<div>
					{carts.map((item, index) => {
						return (
							<div key={index} className=''>
								<ul>
									<li>{item.name}</li>
								</ul>
							</div>
						);
					})}

					<div>
						<h4 onClick={removeAllCart} style={{ color: 'red', cursor: 'pointer' }}>
							Remove Cart
						</h4>
					</div>
				</div>
			) : (
				<p>Empty Cart</p>
			)}
		</div>
	);
}
