var graphql = require("graphql")

var queryDefinition = new graphql.GraphQLObjectType({
    name: 'DAVYMUNGA',
    fields: {
        name: {
            type: graphql.GraphQLString,
            resolve() {
                return 'Branson';
            }
        },
        hobbies: {
            type: new graphql.GraphQLObjectType({
                name: "hobby",
                fields: () => {
                    return {
                        name: {
                            type: graphql.GraphQLString
                        }
                    }
                }
            }),
            resolve: () => {
                return {
                    name: "swimming"
                }
            }
        }
    }
})



var schema = new graphql.GraphQLSchema({
    query: queryDefinition
})

var query = `query { name, hobbies {name}}`
    //incoming from the client

graphql.graphql(schema, query).then(function(result) {
    console.log(result)
});
