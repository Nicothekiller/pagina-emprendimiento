<script lang="ts">
	import { resolve } from '$app/paths';

	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-900 px-8 py-8 text-white dark:bg-black">
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
		<div>
			<h3 class="mb-4 text-lg font-semibold text-gray-100">Contacto</h3>
			<p class="text-gray-400">Email: contacto@empresa.com</p>
			<p class="text-gray-400">Teléfono: +52 123 456 7890</p>
		</div>

		<div>
			<h3 class="mb-4 text-lg font-semibold text-gray-100">Políticas</h3>
			<a href={resolve('/politicas-privacidad')} class="block text-gray-400 hover:text-white"
				>Política de Privacidad</a
			>
			<a href={resolve('/terminos-condiciones')} class="block text-gray-400 hover:text-white"
				>Términos y Condiciones</a
			>
			<a href={resolve('/politicas-envio')} class="block text-gray-400 hover:text-white">Política de Envío</a>
		</div>

		<div>
			<h3 class="mb-4 text-lg font-semibold text-gray-100">Síguenos</h3>
			<div class="flex gap-4">
				<span class="cursor-not-allowed text-gray-400">Facebook</span>
				<span class="cursor-not-allowed text-gray-400">Instagram</span>
				<span class="cursor-not-allowed text-gray-400">Twitter</span>
			</div>
		</div>
	</div>

	<div class="mx-auto mt-8 max-w-6xl border-t border-gray-800 pt-8 text-center text-gray-500">
		<p>&copy; {currentYear} Empresa. Todos los derechos reservados.</p>
	</div>
</footer>
