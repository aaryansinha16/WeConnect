<!-- Improved compatibility of back to top link: See: https://github.com/aaryansinha16/MohallaMart/pull/73 -->
<a id="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
<!-- [![MIT License][license-shield]][license-url] -->
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/aaryansinha16/MohallaMart">
    <img src="./images/logo.png" alt="Logo" width='300' style="border-radius:100%">
  </a>

  <h3 align="center">We-Connect</h3>

  <p align="center">
    An awesome Real time chat application with message encryption!
    <br />
    <!-- <a href="https://github.com/aaryansinha16/MohallaMart"><strong>Explore the docs »</strong></a> -->
    <br />
    <br />
    <a href="https://we-connect-now.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/aaryansinha16/weconnect/issues">Report Bug</a>
    ·
    <a href="https://github.com/aaryansinha16/weconnect/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

WeConnect is a Real time chat application with message encryption & password hashing. This is an individual project with took around 8 days to complete.

Features:
* End to End encryption done (users messeges do not go to server side directly, they are encrypted with a key which is only accessable to client side. They are only decrypted once the messeges are fetched in client side using the key which was used for encrypting it)
* Messenging (Single/Group chat)
* Authentication (JWT + httpOnly Cookies)
* Responsiveness
* Profile Images using cloudinary (Users can upload their profile images)
* Searching users from database 
* Debouncing (a debounce of 500ms is implemented in search results)
* Context API
* Creating groups in individual chats
* Loading indicators 
* Dark/Light themes
* Chat update time is dynamic

Currently Working on:-
* OAuth
* Adding Multer to make user profile

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![React][React.js]][React-url]
* [![ChakraUI][ChakraUI.js]][ChakraUI-url]
* [![NodeJs][Node.com]][Node-url]
* [![Express][Express.com]][Express-url]
* [![MongoDB][MongoDB.com]][MongoDB-url]
* [![Mongoose][Mongoose.com]][Mongoose-url]
* [![SocketIO][SocketIO.com]][SocketIO-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

The setup of the project is quite easy. Clone the repository, there are two main folders named "Frontend" & "Backend". You need to setup both server(Backend) & frontend(Frontend) seperately.

### Prerequisites

Node version 14 OR 14+ is preferable, to check your current node version you can use the command below-
* npm
  ```sh
  node -v
  ```

### Installation

_Step by step setup of the project in local environment._

1. Clone the repo
   ```sh
   git clone https://github.com/aaryansinha16/weconnect.git
   ```
2. First let's start the backend server
   ```sh
   cd backend
   ```
3. Install node modules
   ```sh
   npm i
   ```
4. Finally Start Command
   ```sh
   npm start
   ```
   With this your backend server is live now(locally), Now to start the frontend create a new instance of terminal in the same folder then:-

5. Go to the frontend folder
   ```sh
   cd frontend
   ```
6. Install node modules
   ```sh
   npm i
   ```
7. Finally Start Command
   ```sh
   npm run dev
   ```
NOTE: I have used Vite + React in frontend, thus remember to use `npm run dev` for start command

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Some Screenshots of the Project
[![encrypt][encryption]](https://we-connect-now.vercel.app/)
[![abc][dark]](https://we-connect-now.vercel.app/)
[![lig][light]](https://we-connect-now.vercel.app/)
[![chatP][chatPage]](https://we-connect-now.vercel.app/)
[![src][search]](https://we-connect-now.vercel.app/)
[![grp][group]](https://we-connect-now.vercel.app/)
<!-- Hero-
[![mainHero][main-screenshot]](https://mohallamart.vercel.app)
Footer-
[![Footer][footer-screenshot]](https://mohallamart.vercel.app)
Single Product-
[![Single-Product][single-product]](https://mohallamart.vercel.app)
Responsiveness-
[![Responsive][resp-screenshot]](https://mohallamart.vercel.app) -->



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->


See the [open issues](https://github.com/aaryansinha16/weconnect/issues) for a full list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Aaryan - [@aaryansinha16](https://linkedin.com/in/aaryansinha16) - aaryansinha16@gmail.com

Project Link: [https://we-connect-now.vercel.app/](https://we-connect-now.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/aaryansinha16/weconnect.svg?style=for-the-badge
[contributors-url]: https://github.com/aaryansinha16/weconnect/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/aaryansinha16/weconnect.svg?style=for-the-badge
[forks-url]: https://github.com/aaryansinha16/weconnect/network/members
[stars-shield]: https://img.shields.io/github/stars/aaryansinha16/weconnect.svg?style=for-the-badge
[stars-url]: https://github.com/aaryansinha16/weconnect/stargazers
[issues-shield]: https://img.shields.io/github/issues/aaryansinha16/weconnect.svg?style=for-the-badge
[issues-url]: https://github.com/aaryansinha16/weconnect/issues
[license-shield]: https://img.shields.io/github/license/aaryansinha16/weconnect.svg?style=for-the-badge
[license-url]: https://github.com/aaryansinha16/weconnect/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=00f
[linkedin-url]: https://linkedin.com/in/aaryansinha16
[product-screenshot]: /images/logo.png
[main-screenshot]: /mohallaMain.png
[footer-screenshot]: /footer.png
[single-product]: /singleProd.png
[resp-screenshot]: /resp.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux.js]: https://img.shields.io/badge/Redux-fff?style=for-the-badge&logo=redux&logoColor=A020F0
[Redux-url]: https://reduxjs.org/
[ChakraUI.js]: https://img.shields.io/badge/chakraUI-teal?style=for-the-badge&logo=chakraui&logoColor=white
[ChakraUI-url]: https://chakra-ui.com/
[Node.com]: https://img.shields.io/badge/Node-fff?style=for-the-badge&logo=node.js&logoColor=0f0
[Node-url]: https://nodejs.org
[Express.com]: https://img.shields.io/badge/Express-000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com
[MongoDB.com]: https://img.shields.io/badge/mongodb-white?style=for-the-badge&logo=mongodb&logoColor=green
[MongoDB-url]: https://mongodb.com 
[Mongoose.com]: https://img.shields.io/badge/mongoose-white?style=for-the-badge&logo=mongoose.js&logoColor=red
[Mongoose-url]: https://mongoosejs.com 
[SocketIO.com]: https://img.shields.io/badge/socket.io-black?style=for-the-badge&logo=socket.io&logoColor=white
[SocketIO-url]: https://socket.io


[dark]: /frontend/src/assets/dark.png
[light]: /frontend/src/assets/light.png
[search]: /frontend/src/assets/search.png
[group]: /frontend/src/assets/group.png
[chatPage]: /frontend/src/assets/chatPage.png
[encryption]: /frontend/src/assets/encryption.png