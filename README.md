# Node.js HTTP Server 🚀

This is a basic Node.js server using the built-in `http` module. It's a simple example for understanding how to create and listen for network requests.

***

## Getting Started 💻

### Prerequisites
You need **Node.js** installed on your computer.

### Running the Code
1.  Save the code as a file, for example, `server.js`.
2.  Open your terminal and run the command: `node server.js`.
3.  The server will start and be accessible at **http://localhost:3001**.

***

## How It Works ⚙️

-   The `http.createServer()` function creates a server instance.
-   The `server.listen()` method starts the server, making it listen for connections on the specified port (**3001**).
-   When a request is made (like visiting the URL in a browser), the `(req, res) => { ... }` function runs.
-   The `console.log(req)` line prints the incoming request object to your terminal.
-   **Note:** The server doesn't send a response back, so your browser will keep loading indefinitely.

***

## Next Steps ✨

To make the server functional, you need to send a response. Add `res.end('Hello, World!');` inside the server's callback function to complete the request.
