# Nodejs-react-minimalistic-boilerplate
A minimal Boilerplate for Node.js and React (without db)

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

### License
---
The MIT License (MIT)

Copyright (c) 2018 Panagiotis Karipiadis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
