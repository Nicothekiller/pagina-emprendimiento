export interface Merch {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string;
	type: 'camiseta' | 'gorra' | 'taza' | 'termo' | 'poster' | 'llavero' | 'tote-bag';
}

export const merchItems: Merch[] = [
	{
		id: 'camiseta',
		name: 'Camiseta Oficial',
		description: 'Camiseta de algodón de alta calidad con el logo de la plataforma. 100% algodón.',
		price: 25,
		image: 'camiseta.jpg',
		type: 'camiseta'
	},
	{
		id: 'gorra',
		name: 'Gorra Bordada',
		description: 'Gorra con bordado del logo. Ajustable y elegante.',
		price: 20,
		image: 'gorra.jpg',
		type: 'gorra'
	},
	{
		id: 'taza',
		name: 'Taza Cerámica',
		description: 'Taza cerámica de 11oz. Perfecta para tu café o té.',
		price: 15,
		image: 'taza.jpg',
		type: 'taza'
	},
	{
		id: 'termo',
		name: 'Termo',
		description: 'Termo de acero inoxidable. Mantiene tu bebida caliente o fría por horas.',
		price: 30,
		image: 'termo.jpg',
		type: 'termo'
	},
	{
		id: 'poster',
		name: 'Poster',
		description: 'Poster de alta calidad 24x36 pulgadas. Ideal para enmarcar.',
		price: 18,
		image: 'poster.jpg',
		type: 'poster'
	},
	{
		id: 'llavero',
		name: 'Llavero',
		description: 'Llavero de acrílico con diseño exclusivo.',
		price: 8,
		image: 'llavero.jpg',
		type: 'llavero'
	},
	{
		id: 'tote-bag',
		name: 'Bolso Tote',
		description: 'Bolso tote de tela resistente. Reutilizable y ecológico.',
		price: 22,
		image: 'tote-bag.jpg',
		type: 'tote-bag'
	}
];

export function getAllMerch() {
	return merchItems;
}

export function getMerchById(id: string) {
	return merchItems.find(m => m.id === id);
}

export function getFeaturedMerch(limit = 4) {
	return merchItems.slice(0, limit);
}