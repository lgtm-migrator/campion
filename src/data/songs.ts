export type ITrack = {
	title: string
	artist: string
	album: string
	url: string
	artwork_url: string
}

const songs: ITrack[] = [
	{
		title: "Risin' High (feat Raashan Ahmad)",
		artist: 'Ancient Astronauts',
		album: 'We Are to Answer',
		url: "https://521dimensions.com/song/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
		artwork_url:
			'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg',
	},
	{
		title: 'The Gun',
		artist: 'Lorn',
		album: 'Ask The Dust',
		url: 'https://521dimensions.com/song/08 The Gun.mp3',
		artwork_url: 'https://521dimensions.com/img/open-source/amplitudejs/album-art/ask-the-dust.jpg',
	},
	{
		title: 'Anvil',
		artist: 'Lorn',
		album: 'Anvil',
		url: 'https://521dimensions.com/song/LORN - ANVIL.mp3',
		artwork_url: 'https://521dimensions.com/img/open-source/amplitudejs/album-art/anvil.jpg',
	},
	{
		title: 'I Came Running',
		artist: 'Ancient Astronauts',
		album: 'We Are to Answer',
		url: 'https://521dimensions.com/song/ICameRunning-AncientAstronauts.mp3',
		artwork_url:
			'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg',
	},
	{
		title: 'First Snow',
		artist: 'Emancipator',
		album: 'Soon It Will Be Cold Enough',
		url: 'https://521dimensions.com/song/FirstSnow-Emancipator.mp3',
		artwork_url:
			'https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg',
	},
	{
		title: 'Terrain',
		artist: 'pg.lost',
		album: 'Key',
		url: 'https://521dimensions.com/song/Terrain-pglost.mp3',
		artwork_url: 'https://521dimensions.com/img/open-source/amplitudejs/album-art/key.jpg',
	},
	{
		title: 'Vorel',
		artist: 'Russian Circles',
		album: 'Guidance',
		url: 'https://521dimensions.com/song/Vorel-RussianCircles.mp3',
		artwork_url: 'https://521dimensions.com/img/open-source/amplitudejs/album-art/guidance.jpg',
	},
	{
		title: 'Intro / Sweet Glory',
		artist: 'Jimkata',
		album: 'Die Digital',
		url: 'https://521dimensions.com/song/IntroSweetGlory-Jimkata.mp3',
		artwork_url: 'https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg',
	},
	{
		title: 'Offcut #6',
		artist: 'Little People',
		album: 'We Are But Hunks of Wood Remixes',
		url: 'https://521dimensions.com/song/Offcut6-LittlePeople.mp3',
		artwork_url:
			'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg',
	},
	{
		title: 'Dusk To Dawn',
		artist: 'Emancipator',
		album: 'Dusk To Dawn',
		url: 'https://521dimensions.com/song/DuskToDawn-Emancipator.mp3',
		artwork_url:
			'https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg',
	},
	{
		title: 'Anthem',
		artist: 'Emancipator',
		album: 'Soon It Will Be Cold Enough',
		url: 'https://521dimensions.com/song/Anthem-Emancipator.mp3',
		artwork_url:
			'https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg',
	},
]

export const getSongs = () => songs

export const getSong = (title: string) => songs.find((m) => m.title === title)