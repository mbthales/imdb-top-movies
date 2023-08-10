const typeDefs = `#graphql
	type Query {
		topRatedMovies: [Movie!]!
		reverseTopRatedMovies: [Movie!]!
		newestTopRatedMovies: [Movie!]!
		oldestTopRatedMovies: [Movie!]!
	}

	type Movie{
		position: Int!
		name: String!
		year: Int!
		rating: Float!
	}
`

export default typeDefs
