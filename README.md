# JSON Placeholder API SDK

A Node.js SDK to interact with the JSON Placeholder API, providing a simple interface to fetch TODO items.

## Installation

Install the package using npm:

```bash
npm install json-placeholder-api-sdk-testing
```

### Usage

Here's an example of how to use the SDK:

```bash
const { JSONPlaceHolderSDK } = require("json-placeholder-api-sdk-testing");

const sdk = new JSONPlaceHolderSDK();

sdk.fetchTodo(1)
  .then((todo) => {
    console.log(todo);
  })
  .catch((error) => {
    console.error(error);
  });


### API Methods

`fetchTodo(todoIndex: number): Promise<IFetchTodo>`
Fetch a TODO item by its index from the JSON Placeholder API.

Parameters:
* todoIndex (number): The index of the TODO item to fetch.
Returns:

* A promise that resolves to the TODO item object

### Example
```

const { JSONPlaceHolderSDK } = require("json-placeholder-api-sdk-testing");

const sdk = new JSONPlaceHolderSDK();

async function getTodo() {
try {
const todo = await sdk.fetchTodo(1);
console.log(todo);
} catch (error) {
console.error('Error fetching TODO:', error);
}
}

getTodo();

### Configuration

This SDK uses the axios library to make HTTP requests. The base URL for the JSON Placeholder API can be configured in the config.js file, but it defaults to:

```
Javascript :

module.exports = {
  JSON_PLACEHOLDER_API_BASE_URL: "https://jsonplaceholder.typicode.com"
};
```

### Types

The SDK includes TypeScript type definitions for TODO items:

```
interface IFetchTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
```
