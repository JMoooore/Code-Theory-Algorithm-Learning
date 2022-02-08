# Frontend Capstone
<div align=center>

[![Contributors][contributors-shield]][contributors-url] 
[![Forks][forks-shield]][forks-url] 
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Git last commit][last-commit]]()

</div>

<div align=center>
<a href="https://gitlab.com/m7093/frontend-capstone">
    <img src="./frontend/src/images/empathetic_lions.jpg" alt="Logo" width="200" height="150">
  </a>
</div>


</br>
<details>
  <summary><b>Table of Contents</b></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#visuals">Visuals</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#commands-to-remember">Commands To Remember</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>
</br>

## About The Project
This application serves as an educational tool for developers and students to visualize how algorithms work. Many people find algorithms a difficult concept to fully understand, especially when current resources are mostly text-based. As a team, we decided to contribute to open source learning with an easy-to-navigate website that allows users the ability to experiment with different algorithms and communicate with other like-minded individuals.
<p align="right">(<a href="#top">back to top</a>)</p>

### Built With
* [React.js](https://reactjs.org/)
* [Node.js]()
* [Express.js]()
* [PostgreSQL]()
<p align="right">(<a href="#top">back to top</a>)</p>


### Visuals
[![Application Screen Shot][product-screenshot]](https://example.com)
<p align="right">(<a href="#top">back to top</a>)</p>
</br>

## Getting Started
</br>

### Prequisites
Ensure you have the latest version of npm installed
```sh
npm install npm@latest -g
```
<p align="right">(<a href="#top">back to top</a>)</p>

### Installation
1. Clone the repo
   ```sh
   git clone https://gitlab.com/m7093/frontend-capstone 
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
<p align="right">(<a href="#top">back to top</a>)</p>


### Commands To Remember
</br>

#### Database Commands:
```sh
cd /backend

# create migration file
npm run migrate:make [table_name]

# creates/updates tables
npm run migrate

# create seed files
npx knex seed:make [seed_file_name] --knexfile db/knexfile.js

# run seed files
npm run seed

# rollback migration (so you can reset tables in database and reseed)
npm run rollback
```
#### Backend Commands:
```sh
cd /backend

# run backend server
npm run dev
```
#### Frontend Commands:
```sh
cd /frontend
# start React application
npm start
```
<p align="right">(<a href="#top">back to top</a>)</p>


## Usage
* Study Guide
* Algorithm Familiarization
<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap
- [x] Create all necessary components
- [ ] User authentication
- [ ] Add additional algorithms
- [ ] Mobile-friendly design

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing
Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
<p align="right">(<a href="#top">back to top</a>)</p>

## License
<p align="right">(<a href="#top">back to top</a>)</p>

## Contact
Project Link: [https://gitlab.com/m7093/frontend-capstone](https://gitlab.com/m7093/frontend-capstone)
<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgements
</br>

### Empathetic Lions 
#### Core Team
* [Fernando Curiel-Moysen](https://www.linkedin.com/in/fernando-curiel-moysen/)
* [Paul Devlin](https://www.linkedin.com/in/pmdevlin/)
* [Kevin Heleodoro](https://www.linkedin.com/in/kevin-heleodoro/)
* [John "Hank" Moore](https://www.linkedin.com/in/john-ht-moore/)
* [Isaias Nuno](https://www.linkedin.com/in/isaias-nuno-galindo/)
* [Nicholas Rafaelle](https://www.linkedin.com/in/nick-raffaele/)

### Resources
* [Best README template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)
<p align="right">(<a href="#top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[product-screenshot]: images/screenshot.png
[last-commit]: https://img.shields.io/github/last-commit/google/skia.svg?style=flat