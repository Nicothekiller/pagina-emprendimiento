<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);

	onMount(() => {
		setTimeout(() => (visible = true), 100);
	});
</script>

<section
	class="flex min-h-[80vh] flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-8 text-center dark:from-black dark:to-gray-900"
>
	<div
		class="text-9xl transition-all duration-700 {visible
			? 'translate-y-0 opacity-100'
			: 'translate-y-5 opacity-0'}"
	>
		🎸
	</div>
	<h1 class="mt-4 text-5xl font-bold text-white">Bienvenido a nuestra tienda</h1>
	<p class="mt-4 text-xl text-gray-300">Descubre el merchandise exclusivo de tus músicos favoritos</p>
	<a
		href="/productos"
		class="mt-8 rounded-full bg-red-600 px-8 py-3 font-bold text-white transition-colors hover:bg-red-700"
		>Ver Productos</a
	>
</section>
