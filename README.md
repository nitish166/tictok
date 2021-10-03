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

# Organize the clone application:

- As we are fully setup. So, we need to think how we are going to run a project in a way that it is going to be the most effective and cleanest code of all.

- that's why let's think what we have in TikTok?

- So, basically we have full video on the screen and we have a footer in the bottom and sidebar on the side of the screen.

- Now, let's deduct in even more further, now if we start looking at the footer we see three things, first the name of the user, secound caption and third the name of the song.

- Looking of the sidebar we have three icons: first in the heart, second is messages and third is number if shares.

- Now, we know how we have to keep our components in organised manner so let's get into coding.

## Alright, are you still pumped? let's goooo 🚀🔥

- let's start with editing `app.js`. at first we will write some dummy content so that we know in our web app that it is running.

  ```
  import React from "react";
  import "./App.css";

  function App() {
    return (
      //BEM
      <div className="App">
        <h1>Let's build Tik-Tok clone</h1>
        <div className="app__videos">
          <Video/>
          <Video/>
          <Video/>
          <Video/>
        </div>
      </div>
    );
  }

  export default App;
  ```

- if your're app is returning properly till now that means you're good to go.

- Now, we will make a `<Vidoe>` component cause we want more than one video in tik-tok clone.

  - for creating the `video` component go to your `src` folder and create `video.js` and `video.css` files.
  - once you're done with this. let's setup `video.js`
    file. which must be looking like this-

    ```
    import React from “react";
    import "./vedio.css";


    const Video = () => {
      return (
        <div className="vedio">
          <h1>hi</h1>
          {/* <VedioFooter/> */}
          {/* <VedioSidebar/> */}
        </div>
      );
    };

    export default Video;
    ```

  - And, oh yeah, you don't forget to import video.css
  - As soon as you setup `video.js` file. now you need to place a video in the `<div>` section so that it can show your video on the screen.
  - your video component which is inbuilt in React library, it will automatically make your life eaiser to import a video in your web app.

    ```
        const Video = () => {
        return (
          <div className="vedio">
            <video
              className="vedio__player"
              loop
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            />
            {/* <VedioFooter/> */}
            {/* <VedioSidebar/> */}
          </div>
        );
      };
    ```

- Now, don't scratch your head if you do not see it because we have not edited our `app.css` file yet.
- As soon as we edit our `app.css` file you will start seeing this video in the format of Tik-Tok video

  ```
      html {
      scroll-snap-stop: y mandatory;
    }

    .App {
      background-color: black;
      height: 100vh;
      display: grid;
      place-items: center;
    }

    .app__videos {
      position: relative;
      height: 800px;
      overflow: scroll;
      width: 80%;
      max-width: 500px;
      scroll-snap-type: y mandatory;
    }
  ```

- you must be seeing the video in the way you see in your Tik-Tok app.

- But, what's make tik-tok video so special?
  - it's reapeated running loop videos. but also one thing. whenever we swipe to next video we do not stop in between we are either in the previous video or next video, right?
- So, now let's get into it and make it work.
  ```
    vedio {
    position: relative;
    border: 1px solid red;
    background-color: white;
    height: 100%;
    width: 100%;
    scroll-snap-align: start;
  }
  .vedio__player {
    background-color: black;
    height: 100%;
    object-fit: fill;
    width: 100%;
  }
  ```
- By doing this you must be same your video at a fixed place but still the video are not coming into right position when we scroll it.

  - let's add add scroll functionality in `app.css` file.

    ```

    /* Hide scrollbar for Chrome, Safari adn Opera */
    .app_vedios::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar ofr IE, Edge, and Firefox */
    .app__vedios {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    ```

  - Now if you try to scroll you're video, you will only be stopped at a video not in between. Am I right?
