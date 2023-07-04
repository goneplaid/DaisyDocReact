import React from "react";
import "./styles.css";
import DaisyDocReact from "./components/DaisyDocReact/DaisyDocReact";

function App() {
  return (
    <div className="p-8 absolute w-full h-full flex items-center justify-center ">
      <div className="w-1/4 flex flex-col gap-8">
        <h1 className="text-center">
          <DaisyDocReact size="xlarge" />
        </h1>
        <div className="text-base flex flex-col gap-4 items-start">
          <p className="indent-3">
            <DaisyDocReact size="medium" hideLogos className="indent-0" /> is an
            experimental tool for generating React components from the{" "}
            <a href="https://daisyui.com/">official daisyUI docs</a> by
            utilizing data scraping and generative ai.
          </p>
          <p>
            To get started, click the button below to scrape the public site for
            the initial list of components. From there, you will be able to
            generate React components for some or all components.
          </p>
        </div>
        <input
          type="text"
          className="input input-bordered"
          value="http://daisyui.com/"
        />
        <button className="btn btn-accent">Load components</button>
      </div>
    </div>
  );
}

export default App;
