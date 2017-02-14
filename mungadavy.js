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
      name: {
        type: graphql.GraphqlString,
        resolve() {
          return 'swimming';
        }
      },
    }
  }

})



var schema = new graphql.GraphQLSchema({
  query: queryDefinition
})

var query = 'query { name, hobbies}` //incoming from the client

graphql.graphql(schema, query).then(function(result) {
  console.log(result)
});