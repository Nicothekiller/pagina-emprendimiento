<script lang="ts">
	interface Product {
		id: number;
		name: string;
		price: number;
		image: string;
	}

	const products: Product[] = [
		{ id: 1, name: 'Guitarra Acústica', price: 2500, image: '🎸' },
		{ id: 2, name: 'Guitarra Eléctrica', price: 3500, image: '🎸' },
		{ id: 3, name: 'Batería', price: 5000, image: '🥁' },
		{ id: 4, name: 'Teclado', price: 2800, image: '🎹' }
	];
</script>

<section class="bg-gray-100 px-8 py-16 dark:bg-gray-900">
	<h2 class="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-white">Productos</h2>
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each products as product}
			<div
				class="transform rounded-lg bg-white p-6 text-center shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-700"
			>
				<div class="mb-4 text-6xl">{product.image}</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-800 dark:text-white">{product.name}</h3>
				<p class="mb-4 text-2xl font-bold text-red-600">${product.price.toLocaleString()}</p>
				<a
					href="/productos"
					class="inline-block rounded bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500"
					>Ver más</a
				>
			</div>
		{/each}
	</div>
	<div class="mt-8 text-center">
		<a
			href="/productos"
			class="text-lg font-bold text-gray-800 hover:text-red-600 dark:text-white dark:hover:text-red-400"
			>Ver todos los productos →</a
		>
	</div>
</section>
