export interface Musician {
	id: string;
	name: string;
	genre: string;
	image: string;
	bio: string;
	email: string;
	social: string[];
	products: { name: string; price: number }[];
}

export const musicians: Musician[] = [
	{
		id: 'meramusa',
		name: 'Meramusa',
		genre: 'Rock Alternativo',
		image: '/imagenes/Meramusa.jpg',
		bio: 'Banda de rock alternativo nacida en las calles de Lima, mezclando guitarra distorsionada con melodías hipnóticas y letras introspectivas. Sus álbumes exploran la alienación moderna y la búsqueda de significado en un mundo cada vez más digital. Desde 2015, Meramusa ha conquistado una base de fieles seguidores en la escena roquera latinoamericana.',
		email: 'meramusa@musico.com',
		social: ['Instagram', 'YouTube', 'Spotify'],
		products: [
			{ name: 'Camiseta oficial Meramusa', price: 25 },
			{ name: 'Vinilo "Ciudad de Cristal"', price: 45 },
			{ name: 'Poster firmado', price: 20 }
		]
	},
	{
		id: 'delirium',
		name: 'Delirium',
		genre: 'Metal Progresivo',
		image: '/imagenes/Delirium.jpg',
		bio: 'Pioneros del metal progresivo en Perú, Delirium combina estructuras complejas, cambios de ritmo abruptos y temas filosóficos. Con más de una década en la escena, sus presentaciones en vivo son experiencias inmersivas que desafían las fronteras del género. Sus álbumes conceptuales son obras maestras del metal latino.',
		email: 'delirium@musico.com',
		social: ['Instagram', 'YouTube', 'Bandcamp'],
		products: [
			{ name: 'Camiseta Delirium 2024', price: 30 },
			{ name: 'EP "Fragmentos"', price: 15 },
			{ name: 'Gorra bordada', price: 22 }
		]
	},
	{
		id: 'kamaska',
		name: 'Kamaska',
		genre: 'Indie Pop',
		image: '/imagenes/Kamaska.jpg',
		bio: 'Proyecto indie pop argentino que captura la esencia de las noches de Buenos Aires. Sus músicas electrónicas mezclan sintetizadores nostálgicos con vocales aéreas, creando una atmósfera onírica que resuena con la nueva generación. Kamaska es la trilha sonora de las madrugadas porteñas.',
		email: 'kamaska@musico.com',
		social: ['Instagram', 'Spotify', 'Bandcamp'],
		products: [
			{ name: 'Camiseta "Noches de Buenos Aires"', price: 28 },
			{ name: 'Cassette "Aurora"', price: 20 },
			{ name: 'Stickers set', price: 8 }
		]
	},
	{
		id: 'stoke',
		name: 'Stoke',
		genre: 'Post-Rock',
		image: '/imagenes/Stoke.jpg',
		bio: 'Banda instrumental de post-rock de Santiago de Chile, conocida por sus composiciones cinematográficas. Cada tema es un viaje sonoro que construye paisajes sonoros expansivos, perfecto para bandas sonoras de películas y momentos de reflexión. Stoke crea mundos con guitarras y silencio.',
		email: 'stoke@musico.com',
		social: ['Instagram', 'Bandcamp', 'YouTube'],
		products: [
			{ name: 'Vinilo "Sentidos"', price: 50 },
			{ name: 'Camiseta edición limitada', price: 35 },
			{ name: 'Poster formato grande', price: 18 }
		]
	},
	{
		id: 'leonel',
		name: 'Leonel',
		genre: 'Folk Rock',
		image: '/imagenes/Leonel.jpg',
		bio: 'Cantautor folclórico que mezcla tradiciones andinas con rock acústico. Leonel trae historias de campo y montaña, celebrando la cultura indígena mientras crea puentes con sonidos contemporáneos. Su guitarra carga décadas de tradición y su voz es el eco de los Andes.',
		email: 'leonel@musico.com',
		social: ['Instagram', 'YouTube', 'Spotify'],
		products: [
			{ name: 'Camiseta Leonel', price: 25 },
			{ name: 'Álbum "Raíces"', price: 30 },
			{ name: 'Pulsera artesanal', price: 12 }
		]
	},
	{
		id: 'victor-capuli',
		name: 'Victor Capuli',
		genre: 'Cumbia Electrónica',
		image: '/imagenes/Victor Capuli.jpg',
		bio: 'Productor musical que reinventa la cumbia tradicional con ritmos electrónicos. Victor Capuli lleva las fiestas de las montañas directamente a las pistas de baile de Europa, creando un éxito tras otro. Es el maestro que conecta la tradición andina con la electrónica contemporánea.',
		email: 'victor@musico.com',
		social: ['Instagram', 'Spotify', 'YouTube'],
		products: [
			{ name: 'EP "Montaña Digital"', price: 12 },
			{ name: 'Camiseta Victor Capuli', price: 28 },
			{ name: 'Gorra', price: 20 }
		]
	},
	{
		id: 'toriyama',
		name: 'Toriyama',
		genre: 'Noise Rock',
		image: '/imagenes/Toriyama.jpg',
		bio: 'Artista noise rock de São Paulo, conocido por sus agitaciones sonoras extremas. Toriyama explora la interfaz entre caos y melodía, creando obras que desafían las convenciones del rock alternativo brasileño. Su música es una explosión controlada de energía cruda.',
		email: 'toriyama@musico.com',
		social: ['Instagram', 'Bandcamp', 'YouTube'],
		products: [
			{ name: 'Camiseta Toriyama', price: 30 },
			{ name: 'Cassette "São Paulo Noise"', price: 25 },
			{ name: 'Zine limitado', price: 10 }
		]
	},
	{
		id: 'tabacados',
		name: 'Tabacados',
		genre: 'Murga',
		image: '/imagenes/Tabacados.jpg',
		bio: 'Grupo tradicional de murga uruguaya que preserva el arte carnavalesco. Con percusión, vocales armónicos y teatral, Tabacados trae la alegría de los carnavales de Montevideo a todos los escénarios donde toca. Es más que una banda, es una celebración de la identidad cultural uruguaya.',
		email: 'tabacados@musico.com',
		social: ['Instagram', 'YouTube', 'Spotify'],
		products: [
			{ name: 'Camiseta Tabacados', price: 25 },
			{ name: 'Poster carnival', price: 15 },
			{ name: 'Stickers pack', price: 5 }
		]
	},
	{
		id: 'mokaita',
		name: 'Mokaita',
		genre: 'Reggae Dub',
		image: '/imagenes/Mokaita.jpg',
		bio: 'Banda de reggae dub de Jamaica que lleva mensajes de amor y unitarianismo. Mokaita combina líneas de bajo profundas con efectos de eco para crear una vibra relajada que conecta raíces caribeñas con la actualidad. Su música cura alma y cuerpo con ritmo y melodía.',
		email: 'mokaita@musico.com',
		social: ['Instagram', 'Spotify', 'YouTube'],
		products: [
			{ name: 'Camiseta Mokaita', price: 28 },
			{ name: 'Vinilo "One Love"', price: 40 },
			{ name: 'Gorra', price: 18 }
		]
	},
	{
		id: 'mata-ruda',
		name: 'Mata Ruda',
		genre: 'Hip Hop',
		image: '/imagenes/Mata Ruda.jpg',
		bio: 'MC y poeta que usa la palabra como arma de transformación. Mata Ruda escribe letras que dénoncian la injusticia social mientras celebra la resistencia. Su flujo cadenciado y sus rimas afiladas hacen de cada show un acto político. Es la voz de los sin voz.',
		email: 'mataruda@musico.com',
		social: ['Instagram', 'YouTube', 'Spotify'],
		products: [
			{ name: 'Camiseta "Palabra Armada"', price: 30 },
			{ name: 'Álbum "Sin Permiso"', price: 20 },
			{ name: 'Stickers pack', price: 8 }
		]
	},
	{
		id: 'myla-merino',
		name: 'Myla Merino',
		genre: 'Jazz Contemporáneo',
		image: '/imagenes/Myla Merino.jpeg',
		bio: 'Cantante y compositora de jazz contemporáneo que fusiona elementos clásicos con texturas modernas. Myla Merino trae una propuesta elegante y sofisticada que ha conquistado escenarios internacionales. Su voz es un instrumento que navega entre lo íntimo y lo explosivo.',
		email: 'myla@musico.com',
		social: ['Instagram', 'Spotify', 'YouTube'],
		products: [
			{ name: 'Camiseta Myla Merino', price: 28 },
			{ name: 'EP "Noche de Jazz"', price: 18 },
			{ name: 'Poster firmado', price: 22 }
		]
	},
	{
		id: 'nine-quartet',
		name: 'Nine Quartet',
		genre: 'Música de Cámara',
		image: '/imagenes/Nine Quartet.jpeg',
		bio: 'Cuarteto de cuerdas que interpreta tanto obras clásicas como composiciones propias. Nine Quartet trae una propuesta versátil que va desde Beethoven hasta colaboraciones con artistas electrónicos. Su música conecta generaciones.',
		email: 'nine@musico.com',
		social: ['Instagram', 'YouTube', 'Spotify'],
		products: [
			{ name: 'Camiseta Nine Quartet', price: 30 },
			{ name: 'Álbum "Reimaginaciones"', price: 35 },
			{ name: 'Partitura grabada', price: 25 }
		]
	}
];

export function getAllMusicians() {
	return musicians;
}

export function getMusicianById(id: string) {
	return musicians.find(m => m.id === id);
}

export function getFeaturedMusicians(limit = 4) {
	return musicians.slice(0, limit);
}

export function getMusicianProducts(musicianId: string) {
	const musician = getMusicianById(musicianId);
	return musician?.products ?? [];
}