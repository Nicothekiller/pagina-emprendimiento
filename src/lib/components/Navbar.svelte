<script lang="ts">
	import { page } from '$app/state';
	import { resolve, asset } from '$app/paths';

	interface Props {
		toggleTheme: () => void;
		theme: 'dark' | 'light';
	}

	let { toggleTheme, theme }: Props = $props();

	let links = [
		{ href: resolve('/productos'), label: 'Productos' },
		{ href: resolve('/catalogo'), label: 'Catálogo' }
	];
</script>

<nav
	class="sticky top-0 z-50 flex items-center justify-between bg-white px-8 py-4 shadow-md dark:bg-gray-900 dark:shadow-gray-800"
>
	<div class="flex items-center">
		<a href={resolve('/')} class="flex items-center">
			<img src={asset('/logo.png')} alt="Inicio" class="h-12 w-auto" />
		</a>
	</div>

	<div class="flex gap-8">
		{#each links as link}
			{@const isActive =
				page.url.pathname === link.href || page.url.pathname.startsWith(link.href + '/')}
			<a
				href={link.href}
				class="text-gray-600 transition-colors hover:text-gray-800 dark:text-gray-300 dark:hover:text-white {isActive
					? 'font-semibold text-gray-800 dark:text-white'
					: ''}"
			>
				{link.label}
			</a>
		{/each}
	</div>

	<div class="flex items-center gap-4">
		<button
			onclick={toggleTheme}
			class="rounded-full p-2 text-2xl hover:bg-gray-100 dark:hover:bg-gray-800"
			aria-label="Toggle theme"
		>
			{theme === 'dark' ? '☀️' : '🌙'}
		</button>
	</div>
</nav>
