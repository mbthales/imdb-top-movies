import * as cheerio from 'cheerio'

import {
	fetchHTML,
	getMovies,
	getMovieName,
	getMovieYear,
	getMovieRating,
	getMoviePosition,
} from '@helpers/scraping'

async function scraping() {
	const html = await fetchHTML()
	const $ = cheerio.load(html)
	return getMovies($).map((movie) => {
		return {
			position: getMoviePosition($, movie),
			name: getMovieName($, movie),
			year: getMovieYear($, movie),
			rating: getMovieRating($, movie),
		}
	})
}

export default scraping
