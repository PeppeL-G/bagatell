# Quick links
* [Documentation website](https://peppel-g.github.io/bagatell/)

# Introduction
This repository contains code related to the *Bagatell* framework. It consists of the following projects:

1. [core](core): the npm package `@bagatell/core`, which contains the model classes for the Bagatell framework
2. [web-components](web-components): the npm package `@bagatell/web-components`, which contains web components one can use to visualize an app built with `@bagatell/core`
3. [editor](editor): the npm package `@bagatell/editor`, which contains a SPA implemented in Vite and Vue and that functions as a GUI one can use to create Bagatell apps. It exports the root component of the SPA
4. [docs](docs): VuePress 2 application with the documentation for the Bagatell framework. Also contains a page with the root component of the SPA

# Run instructions
1. `git clone ...`
2. `cd bagatell`
3. `docker-compose up`
4. Visit:
	* [localhost:3000](http://localhost:3000) for the SPA testing the GUI editor
	* [localhost:8080](http://localhost:8080) for the docs