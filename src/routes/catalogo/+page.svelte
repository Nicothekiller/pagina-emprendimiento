<script lang="ts">
	import { resolve, asset } from '$app/paths';
	import { getAllMusicians } from '$lib/data/musicians';

	const musicians = getAllMusicians();
</script>

<svelte:head>
	<title>Catálogo de Músicos</title>
</svelte:head>

<section class="mx-auto min-h-screen w-full bg-gray-50 px-8 py-8 dark:bg-gray-900">
	<h1 class="mb-8 text-center text-5xl font-bold text-gray-800 dark:text-white">
		Catálogo de Músicos
	</h1>
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each musicians as musician}
			<a
				href={resolve('/catalogo/[id]', { id: musician.id })}
				class="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
			>
				<img src={asset(`/images/${musician.image}`)} alt={musician.name} class="h-64 w-full object-cover" />
				<div class="p-6">
					<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">{musician.name}</h2>
					<p class="mb-2 font-semibold text-red-600">{musician.genre}</p>
					<p class="text-gray-600 dark:text-gray-300">{musician.bio}</p>
				</div>
			</a>
		{/each}
	</div>
</section>