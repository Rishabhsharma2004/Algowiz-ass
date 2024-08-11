# WebSocket Real-Time Updates - README

## Overview

Welcome to the WebSocket Real-Time Updates project! This is a simple Node.js application that demonstrates how to build a WebSocket server that broadcasts real-time updates to connected clients. The server handles incoming data, filters out duplicate updates, and sends the processed data to the clients. This README provides instructions on how to set up, run, and contribute to the project.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- Real-time data updates using WebSocket
- Duplicate update filtering
- Simple HTML client to display WebSocket messages
- Lightweight and easy to set up

## Technology Stack

- **Node.js**: JavaScript runtime for the back-end server
- **WebSocket**: Protocol for real-time communication
- **HTML/CSS**: For the front-end client

## Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/websocket-real-time-updates.git
    cd websocket-real-time-updates
    ```

2. **Install server dependencies:**

    ```sh
    npm install
    ```

3. **Install client dependencies:**

    The client is a simple HTML file, so no additional dependencies are needed.

## Running the Application

### Steps

To get a local copy of the project up and running, follow these steps:

1. **Start the WebSocket server:**

    ```sh
    node server.js
    ```

    The WebSocket server will start on `ws://localhost:8080`.

2. **Serve the HTML client:**

    You can use a simple HTTP server to serve the HTML file.

    Option 1: Using `http-server` (install if needed):

    ```sh
    npm install -g http-server
    cd client
    http-server
    ```

    Option 2: Using Node.js:

    ```sh
    cd client
    node server.js
    ```

    The client will be available on `http://localhost:8081`.

3. **Open the HTML client in your browser:**

    Navigate to `http://localhost:8081` in your browser to view the real-time updates.

## Project Structure

```text
websocket-real-time-updates/
│
├── client/                 # Front-end code
│   ├── index.html          # HTML client for displaying WebSocket messages
│   └── server.js           # Simple HTTP server for serving the HTML file
│
├── server.js               # WebSocket server handling real-time updates
├── README.md               # Project documentation
└── package.json            # Project metadata and dependencies
