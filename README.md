# Node.js Server Resource Exhaustion Bug

This repository demonstrates a common yet easily overlooked bug in Node.js applications: resource exhaustion due to unhandled exceptions or memory leaks.  The server, while seemingly simple, can crash under sustained load if proper exception handling and resource management aren't implemented.

## Bug Description
The `server.js` file contains a basic HTTP server.  While functional, it lacks crucial error handling and resource management, leading to potential crashes under load.  Unhandled exceptions or memory leaks can cause the process to consume excessive resources, eventually resulting in server unresponsiveness and requiring a manual restart.

## How to Reproduce
1. Clone this repository.
2. Run `node server.js`.
3. Send a large number of requests to the server (e.g., using tools like `wrk` or `ab`).
4. Monitor the server's resource usage (CPU, memory).  You'll likely observe resource exhaustion if the server is stressed enough.

## Solution
The solution is implemented in `serverSolution.js`.  It utilizes appropriate error handling mechanisms and resource management techniques to prevent the server from crashing even under heavy load. 

## Learning Points
* Always handle exceptions appropriately using `try...catch` blocks.
* Implement proper resource management to prevent memory leaks and avoid exhaustion of system resources.
* Use monitoring tools to proactively detect and prevent resource exhaustion in production environments.