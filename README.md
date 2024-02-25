# Transaction Analysis API

This project is a Node.js API that fetches transaction data from a JSON file, stores it in a MongoDB database, and provides endpoints for analyzing the data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB

### Installing

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the server with `npm start`

## API Endpoints

- `GET /products`: Returns all products from the database.
- `GET http://localhost:3000/salesMonth?keyword=January`: Returns the total sales, number of sales, and number of unsold items for the specified month.
- `GET /barChart?keyword=January`: Returns the number of items in each price range for the specified month.
- `GET /pieChart?keyword=January`: Returns the number of items in each category for the specified month.

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [cors](https://www.npmjs.com/package/cors)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
