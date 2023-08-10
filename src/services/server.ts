import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from '@schemas/type-defs'
import resolvers from '@schemas/resolvers'

const server = new ApolloServer({
	typeDefs,
	resolvers,
})

async function start() {
	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },
	})
	console.log(`🚀 Server ready at ${url}`)
}

export default start
