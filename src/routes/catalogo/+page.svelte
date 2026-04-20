<script lang="ts">
	import { resolve } from '$app/paths';

	interface Musician {
		id: string;
		name: string;
		genre: string;
		image: string;
		bio: string;
	}

	const musicians: Musician[] = [
		{
			id: 'juan-perez',
			name: 'Juan Pérez',
			genre: 'Rock',
			image: '🎸',
			bio: 'Músico rockero con más de 10 años de experiencia en escenarios locales.'
		},
		{
			id: 'maria-garcia',
			name: 'María García',
			genre: 'Jazz',
			image: '🎷',
			bio: 'Jazzista talentosa que combina jazz tradicional con elementos modernos.'
		},
		{
			id: 'carlos-lopez',
			name: 'Carlos López',
			genre: 'Pop',
			image: '🎤',
			bio: 'Cantautor pop con varios sencillos en plataformas digitales.'
		},
		{
			id: 'ana-martinez',
			name: 'Ana Martínez',
			genre: 'Folk',
			image: '🪕',
			bio: 'Artista folk que rescata tradiciones musicales mexicanas.'
		},
		{
			id: 'pedro-ramirez',
			name: 'Pedro Ramírez',
			genre: 'Blues',
			image: '🎸',
			bio: 'Guitarrista blues reconocido por su estilo único y emotivo.'
		},
		{
			id: 'laura-flores',
			name: 'Laura Flores',
			genre: 'Indie',
			image: '🎤',
			bio: 'Cantante indie con una propuesta sonora innovadora.'
		}
	];
</script>

<svelte:head>
	<title>Catálogo de Músicos</title>
</svelte:head>

<section class="mx-auto w-full min-h-screen bg-gray-50 px-8 py-8 dark:bg-gray-900">
	<h1 class="mb-8 text-center text-5xl font-bold text-gray-800 dark:text-white">Catálogo de Músicos</h1>
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each musicians as musician}
			<a
				href={resolve(`/catalogo/${musician.id}`)}
				class="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
			>
				<div class="bg-gray-100 px-8 py-12 text-center dark:bg-gray-700">
					<span class="text-7xl">{musician.image}</span>
				</div>
				<div class="p-6">
					<h2 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">{musician.name}</h2>
					<p class="mb-2 font-semibold text-red-600">{musician.genre}</p>
					<p class="text-gray-600 dark:text-gray-300">{musician.bio}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
