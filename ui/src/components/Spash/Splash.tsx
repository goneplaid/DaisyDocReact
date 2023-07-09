import React, { FC } from "react";
import DaisyDocReact from "../DaisyDocReact/DaisyDocReact";

interface SplashProps {
  docsUrl: string;
}

const Splash: FC<SplashProps> = ({ docsUrl }) => {
  return (
    <main className="p-8 absolute w-full h-full flex items-center justify-center">
      <div className="w-1/4 flex flex-col gap-8 items-start">
        <h1 className="text-center">
          <DaisyDocReact size="xlarge" />
        </h1>
        <div className="text-base flex flex-col gap-4 items-start">
          <p className="indent-3">
            <DaisyDocReact size="medium" hideLogos className="indent-0" /> is an
            experimental tool for generating React components based on the docs
            for the <a href="https://daisyui.com/">daisyUI</a> Tailwind CSS
            component library by utilizing data scraping and generative ai.
          </p>
          <p>
            Before we can generate components, we'll need to scan the docs to
            discover the current set of available components.
          </p>
        </div>
        <form className="flex flex-col gap-8 items-start">
          <div className="form-control w-full">
            <label className="label text-base text-daisy-green font-bold">
              Daisy Docs will be scraped from this URL:
            </label>
            <input
              name="docs_url"
              type="text"
              className="input input-bordered w-full border-daisy-green"
              value={docsUrl}
            />
          </div>
          <button className="btn bg-react-blue">Scan for components</button>
        </form>
      </div>
    </main>
  );
};

export default Splash;
