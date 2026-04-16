<script lang="ts">
	const company = {
		description:
			'Somos una plataforma dedicada a promover y vender productos de músicos independientes. Apoyamos a artistas locales conectándolos con amantes de la música.',
		mission:
			'Promover la música independiente y proporcionar una plataforma de venta segura para músicos.',
		vision: 'Ser la principal plataforma de música independiente en México y Latinoamérica.'
	};
</script>

<section class="bg-gray-900 px-8 py-16 text-white dark:bg-black">
	<div class="mx-auto max-w-4xl text-center">
		<h2 class="mb-8 text-4xl font-bold text-gray-100">Sobre Nosotros</h2>
		<p class="mb-8 leading-relaxed text-gray-300">{company.description}</p>
	</div>

	<div
		class="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 border-t border-gray-800 pt-8 md:grid-cols-2"
	>
		<div class="text-center">
			<h3 class="mb-4 text-2xl font-semibold text-red-500">Misión</h3>
			<p class="leading-relaxed text-gray-300">{company.mission}</p>
		</div>

		<div class="text-center">
			<h3 class="mb-4 text-2xl font-semibold text-red-500">Visión</h3>
			<p class="leading-relaxed text-gray-300">{company.vision}</p>
		</div>
	</div>
</section>
