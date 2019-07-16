# nodejs-react-minimalistic-boilerplate

![project boilerplate](https://img.shields.io/badge/project-boilerplate-blue.svg?style=flat-square)

> Minimal nodejs-react boilerplate

### Prerequisites

[Node.js](https://nodejs.org/en/)

### Getting Started

```sh
# Clone the repository
git clone https://github.com/pankaryp/nodejs-react-minimalistic-boilerplate.git
cd nodejs-react-minimalistic-boilerplate

# Install server dependencies
npm install

# Install client dependencies
npm run client-install

# Start the server-client concurrently
npm run dev
```

#### Notes:
*Inside client/package.json there is a proxy configured "proxy": "http://localhost:5000"*. That tells the React development server to proxy its API requests to the API server, given that the Express server is running on localhost:5000.

Using the ‘concurrently’ module, React dev server and Express server (through nodemon) start concurrently.


### Contributing
If something is unclear, wrong, or needs to be refactored, please let me know. Pull requests are always welcome. Please open an issue before submitting a pull request. 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

