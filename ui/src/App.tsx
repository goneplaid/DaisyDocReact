import React, { useEffect } from "react";
import "./styles.css";
import useSystemStore from "./system-store";
import Splash from "./components/Spash/Splash";

function App() {
  const { docsUrl, fetchData } = useSystemStore((state) => state);

  useEffect(() => {
    console.log("fetching data");
    fetchData();
  }, [fetchData]);

  return <Splash docsUrl={docsUrl} />;
}

export default App;
