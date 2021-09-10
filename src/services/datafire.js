let datafire = require('datafire');

let personio_de_authentication = require('@datafire/personio_de_authentication').actions;

module.exports = new datafire.Action({
  id: "test_account",
  handler: async (input, context) => {
    let request_Authentication_Token_response = await personio_de_authentication.auth.post({
      client_id: "M2ZlNzk3ZDYzM2ZhOWQ1Mjg3YTZlNzk1",
      client_secret: "YTA3Njg3OGM2MzRkYmFlNzk0YmEwNDZmM2I1MzFkY2VjMzhk",
    }, context);
    return request_Authentication_Token_response;
  },
});
