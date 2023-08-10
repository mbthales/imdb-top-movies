import scraping from '@services/scraping'
import {
	reverseTopRatedMovies,
	newestTopRatedMovies,
	oldestTopRatedMovies,
} from '@helpers/server'

const resolvers = {
	Query: {
		topRatedMovies: async () => await scraping(),
		reverseTopRatedMovies: async () => await reverseTopRatedMovies(),
		newestTopRatedMovies: async () => await newestTopRatedMovies(),
		oldestTopRatedMovies: async () => await oldestTopRatedMovies(),
	},
}

export default resolvers
