import * as cheerio from 'cheerio'

async function fetchHTML() {
	const url = 'https://www.imdb.com/chart/top/'
	const response = await fetch(url)
	return await response.text()
}

function getMovies($: cheerio.CheerioAPI) {
	const moviesCssClass = '.ipc-metadata-list-summary-item__c'
	return $(moviesCssClass).get()
}

function sanitizeMoviePosition(movieName: string) {
	return parseInt(movieName.split('.')[0].trim())
}

function sanitizeMovieName(movieName: string) {
	return movieName.split('.')[1].trim()
}

function getMoviePosition($: cheerio.CheerioAPI, movie: cheerio.Element) {
	const movieNameCssClass = '.ipc-title__text'
	return sanitizeMoviePosition($(movie).find(movieNameCssClass).text())
}

function getMovieName($: cheerio.CheerioAPI, movie: cheerio.Element) {
	const movieNameCssClass = '.ipc-title__text'
	return sanitizeMovieName($(movie).find(movieNameCssClass).text())
}

function getMovieRating($: cheerio.CheerioAPI, movie: cheerio.Element) {
	const movieRatingCssClass =
		'.ipc-rating-star.ipc-rating-star--base.ipc-rating-star--imdb.ratingGroup--imdb-rating'
	return parseFloat($(movie).find(movieRatingCssClass).text())
}

function getMovieYear($: cheerio.CheerioAPI, movie: cheerio.Element) {
	const movieYearCssClass = '.sc-14dd939d-6.kHVqMR.cli-title-metadata-item'
	return parseInt($(movie).find(movieYearCssClass).first().text())
}

export {
	fetchHTML,
	getMovies,
	getMoviePosition,
	getMovieName,
	getMovieRating,
	getMovieYear,
}
