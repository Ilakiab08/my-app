
import "./App.css";
import React, { useState } from 'react';


import NavBar from "./components/Navbar";

import Footer from "./components/Footer";

function App() {
  const posts = [
    {
      title: "My First React",
      body: "Simply said, a script is a set of instructions that instructs tasks that need to be executed by a program. ",
      sourceUrl:
        "https://unsplash.com/photos/a-woman-with-dreadlocks-sitting-in-front-of-a-laptop-computer--ZFvSWK4L28",
    },
    {
      title: "node and npm",
      body: "NPM is commonly used in package management and version control, whereas Node. js is used for executing JavaScript code. The NPM package management system makes it easy for developers to install, update, and manage the dependencies a project needs.",
      sourceUrl:
        "https://unsplash.com/photos/turned-on-gray-laptop-computer-XJXWbfSo2f0",
    },
  ];
  }
  return (
    <div className ='App'>
      <header className='header'>
        <h1>Welcome to our website!</h1>
        <p>This is a simple web application built using React.</p>
        </header>
        <main>
          <NavBar />
          <section className="content">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing el
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqu
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              quia non numquam ei deseruit. Amantium enim neque qui
              est in his tempus voluptatibus ut cumque nulla facere possim
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed </p>
              </section>
              </main>
              <Footer/>
              </div>
              );
              }
              export default App;



        


            
     