# Tik-Tok MERN(MongoDB, Express Server, React JS Node JS) Stack Developer:

**Front-End Technology**

- React JS
- Firebase hosting
- Material UI
- Flexbox
- 3rd party Ticker
- Scroll snap

**Backend Technology**

- Node.js
- Express.js
- Mongodb
- Mongoose
- Hosting on Heroku

## Some important point about this project:

- Let me clear about the fact that what do you mean by mern stack. so here `M` stand for `mongoDB`, `E` stand for `Express`, `R` stand for `React JS` and `N` for `Node JS`.
- We will go in depth and make the tiktok-clone app using React.
- we will also be using `Firebase` for frontend hosting, `Mongo` for database and `Heroku` for backend hosting.
- `Firebase` is great tool to get started with project quickly. we will also using `HTML & CSS`.
- Please make sure, you need to have [Visual Studio Code](https://code.visualstudio.com) and [NodeJS](https://nodejs.org/en/) installed.

**Are you Pumped? Let's Gooooo 🔥🚀**

- To get started let's make a new folder name as `tiktok`. and inside make another two folder- `tiktok-frontend` and `tiktok-backend` respectively & open it.

- As soon as you are in the folder, right click and open with the code.

- After you click Open with code you'll see a huge weird window. Don't worry we got you covered. This is what you might be seeing.

  ![alt text](https://github.com/nitish166/tiktok/blob/main/VS.JPG?raw=true)

- So, Visual Studio code is a code editor we are going to use. but you can use Atom or any other editor too, but it will make your life easier. 😏

- Now that you're in Visual studio code, press ctrl+ J (Windows) and you should see a terminal at the bottom just like shown below.

  ![alt text](https://github.com/nitish166/tiktok/blob/main/terminal.JPG?raw=true)

- Don't freak out, this is just a regular terminal, we're not hacking anything. 😀

- Now that's you're in terminal, we can now install and setup React app. and this is usually a headache when doing manually. So `facebook`, the creator of React made a script which installs and setup React for you without any type of headache.

- To use this script, just type the following in the terminal and press `Enter`. this will take some time so till then either grap some ☕ or you can read what the script actually does below.
- `npx create-react-app`
- Here's how this works. `npx` is part of npm (node package manager) except npx runs a remote script instead of installing it locally. this is done so you have always a latest version of react installed in your project.
- _create react-app_ is the name of remote script and `"."` specifies that we want the script to make a react project in the SAME FOLDER and not make a new folder for it.
- if you had to make a new folder name, you could just provide the name of folder insited of `"."` and it would make a folder for you.
- you know that it is finished when you see _"Happy Hacking"_ on your terminal. If you see this, we are ready to move on.

  ![alt text](https://github.com/nitish166/tiktok/blob/main/Happy.JPG?raw=true)

- Now that we have our react app installed, now we can start it. in the terminal type the following command. this command will start the react app.
  - `npm start`
- After, you hit enter you should see your default browser open. Although I suggest google chrome of it's development tool making life easier, it's still your persional preferences, but we can not guarantee development quality with other browsers.

  ![alt text](https://github.com/nitish166/tiktok/blob/main/local.JPG?raw=true)

- If you did everything correct, you must see the above screen on your browser.
- if you do not see the bowser tab,
  - [http://localhost:3000](http://localhost:3000)
- then go to the above URL or even better, I've something for you. [This](http://localhost:3000) will take you to your app.

  ![alt text](https://github.com/nitish166/tiktok/blob/main/app.JPG?raw=true)

- This is the welcome screen of react. but we want to build a tik-tok clone. So, we need to clean up our React Project a bit so that we can get started with the Tik-tok clone.

  ![alt text](https://github.com/nitish166/tiktok/blob/main/clean.JPG?raw=true)

- Delete (optional) three files from the `src` folder from the React App. Those three files are
  - App.test.js
  - logo.svg
  - setupTest.js
- We are deleting these files because these are not relevent to us in any project.

- That's not all, if you check the browser window logo, I know what you're seeing, do not freak out, we have the solution, go tho App.js and remove following lines form code.
  ```
   import logo from “./logo.svg”;
  ```
- Also, remove everything under the first `<div>` element from your App.js file. You're code should look like the following.
  ```
  import React from “react”;
  import “./App.css”;
  function App() {
      return <div className=”app”>React App</div>;
  }
  export default App;
  ```
- Now, let's clean up the CSS files a bit.
- Go to `app.css` and remove all the contents of your files.
- Now, go to `index.css` and add this piece of code on the top. and look at the change on the app. what do you see?

  ```
  *{
      margin: 0;
      padding: 0;
  }
  ```

- This will get rid of the margin and padding of the page.
- Now we have React project perfectly setup. now we can start making the Tik-Tok clone. **LET'S Gooo 🔥🚀**
