<script lang="ts">
	import { resolve, asset } from '$app/paths';
	import { getFeaturedMerch } from '$lib/data/merch';

	const products = getFeaturedMerch(4);
</script>

<section class="bg-gray-100 px-8 py-16 dark:bg-gray-900">
	<h2 class="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-white">Mercancia</h2>
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each products as product}
			<div
				class="transform rounded-lg bg-white p-6 text-center shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-700"
			>
				<img
					src={asset(`/merch-images/${product.image}`)}
					alt={product.name}
					class="mb-4 h-48 w-full object-contain bg-gray-50 rounded-lg"
				/>
				<h3 class="mb-2 text-xl font-semibold text-gray-800 dark:text-white">{product.name}</h3>
				<p class="mb-2 text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
				<p class="mb-4 text-2xl font-bold text-red-600">${product.price.toLocaleString()}</p>
				<button
					class="w-full rounded bg-gray-800 py-2 font-bold text-white transition-colors hover:bg-red-600 dark:bg-gray-600 dark:hover:bg-red-600"
					>Comprar</button
				>
			</div>
		{/each}
	</div>
	<div class="mt-8 text-center">
		<a
			href={resolve('/productos')}
			class="text-lg font-bold text-gray-800 hover:text-red-600 dark:text-white dark:hover:text-red-400"
			>Ver todos los productos →</a
		>
	</div>
</section>

