[![david badge](https://img.shields.io/david/juanjosalvador/tanuki-server.svg)](https://david-dm.org/juanjosalvador/tanuki-server)
[![Maintainability](https://api.codeclimate.com/v1/badges/c4c82f9438de71054f55/maintainability)](https://codeclimate.com/github/JuanjoSalvador/tanuki-server/maintainability)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<p align="center">
    <img src="https://image.flaticon.com/icons/svg/235/235394.svg" width="250" />
</p>

# Tanuki Server

### Node.js server for Tanuki

Tanuki is an opensource anime schedule built for **Kitsu community**. It uses the Kitsu.io API to get current airing and upcoming shows, and Angular with Bulma to create a schedule with your favourite shows.

Currently is under development, you can see the [stable version here](https://tanuki.surge.sh).

## Development

Tanuki runs over **nginx http server**, however it has its own specific server-side application that makes it faster, secure and functional.

* **Tanuki App**. The frontend of Tanuki. It's a responsive website based on Angular and Bulma. You can found it [here](https://github.com/JuanjoSalvador/tanuki).

* **Tanuki Server**. The server-side application, where the magic occurs. Using [wopian's kitsu module](https://github.com/wopian/kitsu) and some JavaScript magic powders, it can build a anime schedule, just for you! You can found it on this repository.

## Contributing

See CONTRIBUTING.md

## License

See [LICENSE](./LICENSE)
