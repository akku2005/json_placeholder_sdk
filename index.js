const { JSONPlaceHolderSDK } = require("json-placeholder-api-sdk-testing");

const sdk = new JSONPlaceHolderSDK();

sdk
  .fetchTodo(5)
  .then((value) => console.log(value))
  .catch((error) => console.error(error));
