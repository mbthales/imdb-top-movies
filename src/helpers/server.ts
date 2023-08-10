import scraping from '@services/scraping'

async function reverseTopRatedMovies() {
	const movies = await scraping()
	return movies.sort((a, b) => a.rating - b.rating)
}

async function newestTopRatedMovies() {
	const movies = await scraping()
	return movies.sort((a, b) => b.year - a.year)
}

async function oldestTopRatedMovies() {
	const movies = await scraping()
	return movies.sort((a, b) => a.year - b.year)
}

export { reverseTopRatedMovies, newestTopRatedMovies, oldestTopRatedMovies }
