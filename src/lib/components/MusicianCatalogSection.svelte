<script lang="ts">
	import { resolve, asset } from '$app/paths';
	import { getFeaturedMusicians } from '$lib/data/musicians';

	const musicians = getFeaturedMusicians(4);
</script>

<section class="bg-white px-8 py-16 dark:bg-gray-900">
	<h2 class="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-white">
		Catálogo de Músicos
	</h2>
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each musicians as musician}
			<a
				href={resolve('/catalogo/[id]', { id: musician.id })}
				class="transform rounded-lg bg-gray-50 p-6 text-center shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-700"
			>
				<img
					src={asset(`/images/${musician.image}`)}
					alt={musician.name}
					class="mb-4 h-32 w-32 rounded-full object-cover mx-auto"
				/>
				<h3 class="mb-2 text-xl font-semibold text-gray-800 dark:text-white">{musician.name}</h3>
				<p class="text-gray-500 dark:text-gray-400">{musician.genre}</p>
			</a>
		{/each}
	</div>
	<div class="mt-8 text-center">
		<a
			href={resolve('/catalogo')}
			class="text-lg font-bold text-gray-800 hover:text-red-600 dark:text-white dark:hover:text-red-400"
			>Ver todos los músicos →</a
		>
	</div>
</section>