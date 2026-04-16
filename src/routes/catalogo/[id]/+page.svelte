<script lang="ts">
	import { page } from '$app/state';

	interface Musician {
		id: string;
		name: string;
		genre: string;
		image: string;
		bio: string;
		email: string;
		social: string[];
		products: { name: string; price: number }[];
	}

	const musiciansData: Record<string, Musician> = {
		'juan-perez': {
			id: 'juan-perez',
			name: 'Juan Pérez',
			genre: 'Rock',
			image: '🎸',
			bio: 'Músico rockero con más de 10 años de experiencia en escenarios locales. Ha participado en numerosos festivales y tiene 3 álbumes publicados.',
			email: 'juan@musico.com',
			social: ['Instagram', 'YouTube', 'Spotify'],
			products: [
				{ name: 'Guitarra Signature JP-1', price: 5500 },
				{ name: 'Álbum "Camino de Piedra"', price: 300 },
				{ name: 'Camiseta oficial', price: 450 }
			]
		},
		'maria-garcia': {
			id: 'maria-garcia',
			name: 'María García',
			genre: 'Jazz',
			image: '🎷',
			bio: 'Jazzista talentosa que combina jazz tradicional con elementos modernos. Ha actuado en clubes de jazz reconocido internacionalmente.',
			email: 'maria@musico.com',
			social: ['Instagram', 'Spotify', 'Bandcamp'],
			products: [
				{ name: 'Álbum "Noches de Azul"', price: 350 },
				{ name: 'Clases de jazz online', price: 500 },
				{ name: 'Vinilo "Sueños"', price: 800 }
			]
		},
		'carlos-lopez': {
			id: 'carlos-lopez',
			name: 'Carlos López',
			genre: 'Pop',
			image: '🎤',
			bio: 'Cantautor pop con varios sencillos en plataformas digitales. Sus canciones han alcanzado más de 1 millón de reproducciones.',
			email: 'carlos@musico.com',
			social: ['Instagram', 'YouTube', 'Spotify'],
			products: [
				{ name: 'EP "Verano"', price: 200 },
				{ name: 'Poster firmado', price: 250 },
				{ name: 'Meet & Greet', price: 1000 }
			]
		},
		'ana-martinez': {
			id: 'ana-martinez',
			name: 'Ana Martínez',
			genre: 'Folk',
			image: '🪕',
			bio: 'Artista folk que rescata tradiciones musicales mexicanas. Su música celebración la riqueza cultural de México.',
			email: 'ana@musico.com',
			social: ['Instagram', 'YouTube', 'Spotify'],
			products: [
				{ name: 'Álbum "Raíces"', price: 280 },
				{ name: 'Ukulele artesanal', price: 1500 },
				{ name: 'Librito de letras', price: 150 }
			]
		},
		'pedro-ramirez': {
			id: 'pedro-ramirez',
			name: 'Pedro Ramírez',
			genre: 'Blues',
			image: '🎸',
			bio: 'Guitarrista blues reconocido por su estilo único y emotivo. Ha compartido escenario con leyendas del blues.',
			email: 'pedro@musico.com',
			social: ['Instagram', 'YouTube', 'Spotify'],
			products: [
				{ name: 'Álbum "Agujas de Blues"', price: 320 },
				{ name: 'Guitarra artesanal', price: 8000 },
				{ name: 'Masterclass de blues', price: 750 }
			]
		},
		'laura-flores': {
			id: 'laura-flores',
			name: 'Laura Flores',
			genre: 'Indie',
			image: '🎤',
			bio: 'Cantante indie con una propuesta sonora innovadora. Su sonido único la ha convertido en una de las artistas más prometedoras.',
			email: 'laura@musico.com',
			social: ['Instagram', 'Spotify', 'Bandcamp'],
			products: [
				{ name: 'Álbum "Espejos"', price: 290 },
				{ name: 'Vinilo edición limitada', price: 650 },
				{ name: 'Camiseta edición especial', price: 400 }
			]
		}
	};

	const musicianId = $derived(page.params.id ?? '');
	const musician = $derived(musicianId ? musiciansData[musicianId] : undefined);
</script>

<svelte:head>
	<title>{musician ? musician.name : 'Músico no encontrado'}</title>
</svelte:head>

<section class="mx-auto max-w-5xl bg-gray-50 px-8 py-8 dark:bg-gray-900">
	{#if musician}
		<div
			class="mb-12 rounded-lg bg-white p-8 shadow-lg md:grid md:grid-cols-[200px_1fr] md:gap-8 dark:bg-gray-800"
		>
			<div class="text-center text-9xl">🎸</div>
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
				href="/catalogo"
				class="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
				>← Volver al catálogo</a
			>
		</div>
	{/if}
</section>
