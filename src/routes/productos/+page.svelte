<script lang="ts">
	import { asset } from '$app/paths';
	import { getAllMerch } from '$lib/data/merch';

	const products = getAllMerch();
</script>

<svelte:head>
	<title>Merchandise - Tienda de Músicos</title>
</svelte:head>

<section class="mx-auto bg-gray-50 px-8 py-8 dark:bg-gray-900">
	<h1 class="mb-8 text-center text-5xl font-bold text-gray-800 dark:text-white">
		Nuestra Mercancia
	</h1>
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each products as product}
			<div class="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
				<img
					src={asset(`/merch-images/${product.image}`)}
					alt={product.name}
					class="h-64 w-full object-contain bg-gray-50"
				/>
				<div class="p-6">
					<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">{product.name}</h2>
					<p class="mb-4 text-gray-600 dark:text-gray-300">{product.description}</p>
					<p class="mb-4 text-3xl font-bold text-red-600">${product.price.toLocaleString()}</p>
					<button
						class="w-full rounded bg-gray-800 py-3 font-bold text-white transition-colors hover:bg-red-600 dark:bg-gray-600 dark:hover:bg-red-600"
					>
						Agregar al carrito
					</button>
				</div>
			</div>
		{/each}
	</div>
</section>