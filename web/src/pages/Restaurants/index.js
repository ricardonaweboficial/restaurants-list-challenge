import React, { useState, useEffect } from 'react';

//Utils
import openOrClose from '../../utils/openOrClose';

//Icons
import { FaSearch } from 'react-icons/fa';

// Styles
import './styles.css';


export default function Restaurants() {
	const [ restaurants, setRestaurants ] = useState([]);

	useEffect(() => {
		async function loadRestaurants() {
			const response = await fetch('https://challange.goomer.com.br/restaurants');
			const data = await response.json();

			setRestaurants(data);
			console.log(data);
			//console.log(data.map(restaurant => restaurant.hours));
		}

		loadRestaurants();
	}, []);

	return (
		<div className="restaurants-container">	
			<header>	
			</header>

			<section>	
				<form>
					<h1>Bem Vindo a Lista de Restaurantes</h1>

					<div className="group-form">
						<input placeholder="Buscar estabelecimento"/>
						<button type="submit"><FaSearch size={16} color="#404040"/></button>
					</div>
				</form>

				<ul>	
					{restaurants.map(restaurant => (
						<li key={restaurant.id}>	
							<img src={restaurant.image} alt={restaurant.name}/>

							<div className="info-address">
								<h1>{restaurant.name}</h1>
								<p>{restaurant.address}</p>
							</div>
							{restaurant.hours && (//openOrClose(restaurant.hours) === 'Aberto agora' ? '#2B0D61' : '#B5ABD4'
								<div className="open-or-close" style={{ backgroundColor: '#2B0D61'}}>	
									<p>{openOrClose(restaurant.hours)}</p>								
								</div>
							)}
						</li>	
					))}
				</ul>
			</section>
		</div>
	);
}