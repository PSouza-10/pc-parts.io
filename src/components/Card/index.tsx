import { Container } from './styles'
import { EyeIcon, CartIcon } from '../icons'

export function Card() {
	return (
		<Container className='card'>
			<figure className='img-wrapper'>
				<img
					src='https://img.terabyteshop.com.br/produto/p/processador-intel-core-i7-10700-290ghz-470ghz-turbo-10-geracao-8-cores-16-thread-lga-1200-bx8070110700_95187.jpg'
					alt='Ibagens'
				/>
			</figure>
			<div className='text'>
				<h4>Processador Intel Core i7 10700</h4>
				<h3>R$ 2.439,00</h3>
			</div>

			<div className='button-container'>
				<button>
					<CartIcon />
				</button>
				<button className='eye-button'>
					<EyeIcon />
				</button>
			</div>
		</Container>
	)
}
