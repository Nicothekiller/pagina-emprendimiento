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
			name: 'Guitarra Acústica',
			price: 2500,
			image: '🎸',
			description: 'Guitarra acústica de alta calidad, perfecta para principiantes y profesionales.'
		},
		{
			id: 2,
			name: 'Guitarra Eléctrica',
			price: 3500,
			image: '🎸',
			description: 'Guitarra eléctrica con sonido versátil, ideal para rock y blues.'
		},
		{
			id: 3,
			name: 'Batería',
			price: 5000,
			image: '🥁',
			description: 'Batería completa con todos los accesorios incluidos.'
		},
		{
			id: 4,
			name: 'Teclado',
			price: 2800,
			image: '🎹',
			description: 'Teclado digital con 88 teclas y sonidos integrados.'
		},
		{
			id: 5,
			name: 'Bajo Eléctrico',
			price: 3200,
			image: '🎸',
			description: 'Bajo eléctrico de 4 cuerdas con sonido potente.'
		},
		{
			id: 6,
			name: 'Micrófono',
			price: 800,
			image: '🎤',
			description: 'Micrófono profesional para voz e instrumentos.'
		}
	];
</script>

<svelte:head>
	<title>Productos - Tienda de Músicos</title>
</svelte:head>

<section class="mx-auto max-w-6xl bg-gray-50 px-8 py-8 dark:bg-gray-900">
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
