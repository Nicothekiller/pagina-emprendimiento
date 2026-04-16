<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { children } = $props();
	let isDark = $state(false);

	onMount(() => {
		if (browser) {
			const stored = localStorage.getItem('theme');
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			isDark = stored === 'dark' || (!stored && prefersDark);
			document.documentElement.classList.toggle('dark', isDark);
		}
	});

	function toggleTheme() {
		if (browser) {
			isDark = !isDark;
			document.documentElement.classList.toggle('dark', isDark);
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script>
		if (typeof localStorage !== 'undefined') {
			if (
				localStorage.theme === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	</script>
</svelte:head>

<Navbar {toggleTheme} theme={isDark ? 'dark' : 'light'} />
<main class="min-h-screen">
	{@render children()}
</main>
<Footer />
