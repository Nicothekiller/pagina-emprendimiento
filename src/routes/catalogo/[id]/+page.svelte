<script lang="ts">
	import { page } from '$app/state';
	import { resolve, asset } from '$app/paths';
	import { getMusicianById } from '$lib/data/musicians';

	const musicianId = $derived(page.params.id ?? '');
	const musician = $derived(getMusicianById(musicianId));
</script>

<svelte:head>
	<title>{musician ? musician.name : 'Músico no encontrado'}</title>
</svelte:head>

<section class="mx-auto min-h-screen w-full bg-gray-50 px-8 py-8 dark:bg-gray-900">
	{#if musician}
		<div
			class="mb-12 rounded-lg bg-white p-8 shadow-lg md:grid md:grid-cols-[300px_1fr] md:gap-8 dark:bg-gray-800"
		>
			<img
				src={asset(`/images/${musician.image}`)}
				alt={musician.name}
				class="w-full rounded-lg object-cover shadow-md"
			/>
			<div>
				<h1 class="mb-2 text-4xl font-bold text-gray-800 dark:text-white">{musician.name}</h1>
				<p class="mb-4 font-semibold text-red-600">{musician.genre}</p>
				<p class="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">{musician.bio}</p>
				<div class="text-gray-500">
					<p class="mb-2">📧 {musician.email}</p>
					<div class="flex gap-2">
						{#each musician.social as platform}
							<span
								class="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-300"
								>{platform}</span
							>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div>
			<h2 class="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
				Productos de {musician.name}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each musician.products as product}
					<div class="rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-800">
						<h3 class="mb-2 text-xl font-semibold text-gray-800 dark:text-white">{product.name}</h3>
						<p class="mb-4 text-2xl font-bold text-red-600">${product.price.toLocaleString()}</p>
						<button
							class="w-full rounded bg-gray-800 py-2 font-bold text-white transition-colors hover:bg-red-600 dark:bg-gray-600 dark:hover:bg-red-600"
							>Comprar</button
						>
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<div class="py-16 text-center">
			<h1 class="mb-4 text-3xl font-bold text-gray-800 dark:text-white">Músico no encontrado</h1>
			<a
				href={resolve('/catalogo')}
				class="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
				>← Volver al catálogo</a
			>
		</div>
	{/if}
</section>