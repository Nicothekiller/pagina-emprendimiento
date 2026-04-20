<script lang="ts">
	import { resolve } from '$app/paths';

	interface Musician {
		id: string;
		name: string;
		genre: string;
		image: string;
	}

	const musicians: Musician[] = [
		{ id: 'juan-perez', name: 'Juan Pérez', genre: 'Rock', image: '🎸' },
		{ id: 'maria-garcia', name: 'María García', genre: 'Jazz', image: '🎷' },
		{ id: 'carlos-lopez', name: 'Carlos López', genre: 'Pop', image: '🎤' },
		{ id: 'ana-martinez', name: 'Ana Martínez', genre: 'Folk', image: '🪕' }
	];
</script>

<section class="bg-white px-8 py-16 dark:bg-gray-900">
	<h2 class="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-white">
		Catálogo de Músicos
	</h2>
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each musicians as musician}
			<a
				href={resolve(`/catalogo/${musician.id}`)}
				class="transform rounded-lg bg-gray-50 p-6 text-center shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-700"
			>
				<div class="mb-4 text-6xl">{musician.image}</div>
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
