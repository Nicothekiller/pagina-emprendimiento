<script lang="ts">
	interface Product {
		id: number;
		name: string;
		price: number;
		image: string;
		description: string;
	}

	const products: Product[] = [
		{
			id: 1,
			name: 'Camiseta Oficial',
			price: 25,
			image: '👕',
			description: 'Camiseta de algodón premium con diseño exclusivo del artista.'
		},
		{
			id: 2,
			name: 'Stickers',
			price: 5,
			image: '🧴',
			description: 'Pack de 5 stickers con diseños únicos de tu artista favorito.'
		},
		{
			id: 3,
			name: 'Gorra',
			price: 20,
			image: '🧢',
			description: 'Gorra ajustable con bordado del logo del artista.'
		},
		{
			id: 4,
			name: 'Llavero',
			price: 10,
			image: '🔑',
			description: 'Llavero de acrylic con diseño personalizado.'
		},
		{
			id: 5,
			name: 'Poster',
			price: 15,
			image: '🖼️',
			description: 'Poster de alta calidad tamaño 24x36 pulgadas.'
		},
		{
			id: 6,
			name: 'Taza',
			price: 12,
			image: '☕',
			description: 'Taza cerámica con diseño del artista.'
		}
	];
</script>

<svelte:head>
	<title>Merchandise - Tienda de Músicos</title>
</svelte:head>

<section class="mx-auto bg-gray-50 px-8 py-8 dark:bg-gray-900">
	<h1 class="mb-8 text-center text-5xl font-bold text-gray-800 dark:text-white">
		Nuestros Productos
	</h1>
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each products as product}
			<div class="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
				<div class="bg-gray-100 px-8 py-12 text-center dark:bg-gray-700">
					<span class="text-8xl">{product.image}</span>
				</div>
				<div class="p-6">
					<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">{product.name}</h2>
					<p class="mb-4 text-gray-600 dark:text-gray-300">{product.description}</p>
					<p class="mb-4 text-3xl font-bold text-red-600">${product.price.toLocaleString()}</p>
					<button
						class="w-full rounded bg-gray-800 py-3 font-bold text-white transition-colors hover:bg-red-600 dark:bg-gray-600 dark:hover:bg-red-600"
						>Agregar al carrito</button
					>
				</div>
			</div>
		{/each}
	</div>
</section>
