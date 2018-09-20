# Nodejs-react-minimalistic-boilerplate
A minimal Boilerplate for Node.js and React (without database)

### Prerequisites

[Node.js](https://nodejs.org/en/)

### Getting Started

```
# Go to your project directory
cd my-project

# Clone the repository
git clone https://github.com/pankaryp/Nodejs-react-minimalistic-boilerplate.git

# Install server dependencies
npm install

# Install client dependencies
npm run client-install

# Start the server-client concurrently
npm run dev
```

#### Notes:
*Inside client/package.json there is a proxy configured "proxy": "http://localhost:5000"*. This tells the React development server to proxy its API requests to the API server, given that the Express server is running on localhost:5000.

Using the ‘concurrently’ module, React dev server and Express server (through nodemon) start concurrently.


### Contributing
---
If something is unclear, wrong, or needs to be refactored, please let me know. Pull requests are always welcome. Please open an issue before submitting a pull request. 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

