# Donation Collecting System - Monorepo

Welcome to the Donation Collecting Website monorepo! This repository contains both the client and server applications for the website. The client is built using SvelteKit, while the server is developed with NestJS.

## Installation

To run the project locally, you need to have `pnpm` installed on your system. If you don't have it, you can install it by following the instructions on the [pnpm website](https://pnpm.io/installation). 

Once you have `pnpm` installed, you can proceed with the following steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/ezaz-ahmed/dcs.git
cd dcs
```

2. Install dependencies for both the client and server:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

Now, both the client and server applications will be running on your local machine, and you can access the website by navigating to the appropriate URLs.

## Project Structure

The project is organized as a monorepo, which means the client and server applications are located in the `apps` folder. Here's an overview of the project structure:

```
donation-collecting-website/
│
├── apps/
│   ├── client/           # SvelteKit front-end application
│   └── server/           # NestJS backend application
│
├── README.md             # This file, providing information about the project
├── .gitignore            # List of files and folders to ignore in version control
├── package.json          # Project metadata and dependencies
├── pnpm-workspace.yaml   # Monorepo configuation
├── pnpm-lock.yaml        # Lockfile generated by pnpm
└── ...                   # Other project-related files
```

## Client - SvelteKit

The `client` folder contains the front-end application built with SvelteKit. SvelteKit is a modern and efficient framework for building web applications. You can find the source code for the client application in the `apps/client` directory.

## Server - NestJS

The `server` folder contains the back-end application developed with NestJS. NestJS is a powerful and extensible framework for building scalable and maintainable server-side applications. You can find the source code for the server application in the `apps/server` directory.

