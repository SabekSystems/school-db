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
        age: {
            type: graphql.GraphQLString,
            resolve() {
                return '21';
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
        },
        qualifications: {
            type: new graphql.GraphQLObjectType({
                name: "qualification",
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
                    name: "digree certificate"
                }
            }
        }
    }
})



var schema = new graphql.GraphQLSchema({
    query: queryDefinition
})

var query = `query { name, hobbies {name} qualifications {name}}`
    //incoming from the client

graphql.graphql(schema, query).then(function(result) {
    console.log(result)
});
