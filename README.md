# Tiles - Social Travel Tracker

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![GitHub branch status](https://img.shields.io/github/checks-status/dnlaglr/Tiles/main)
![GitHub repo file or directory count](https://img.shields.io/github/directory-file-count/dnlaglr/Tiles)

## Run Locally

Requirements: GNU Make, node.js, npm

Install client dependencies and run locally
```bash
  $ cd tiles
  $ npm install
  $ npm run dev
```

Build server from source and run on port 18080

```bash
  $ cd server
  $ make
  $ ./bin/server
```

## Tasks

| Completed | Language | Task                                                                                        | Author |
|:--------:|:--------:|:---------------------------------------------------------------------------------------------|:------:|
|   [x]    | C++      | Create a simple REST API                                                                     | Daniel |
|   [ ]    | C++      | Write a function that returns all edges of a hexagon given the center point                  |        |
|   [ ]    | C++      | Write a function that determines if two hexagons are touching given two lists of indicies    |        |
|   [ ]    | C++      | Write tests for all REST API endpoints                                                       |        |
|   [ ]    | Python   | Write a script to gather all visited cities given a list of lat. long. coordinates           |        |
|   [ ]    | Docker   | Write a docker-compose file for client and server                                            |        |

## Acknowledgements

 - [Crow Framework](https://github.com/CrowCpp/Crow)