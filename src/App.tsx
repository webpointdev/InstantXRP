import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Landing from "./pages/Landing";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

import "antd/dist/antd.css";

import configureStore, { history } from "./store";

function App() {
  //@ts-ignore
  const store = configureStore();
  return (
    <Provider store={store}>
      <Landing />
      <ScrollToTop
        smooth
        viewBox="0 0 1024 1024"
        svgPath="M128 128h768a64 64 0 0 1 64 64v640a64 64 0 0 1-64 64H128a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64z m32 64a32 32 0 0 0-32 32v576a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V224a32 32 0 0 0-32-32H160z m329.28 41.376a32.256 32.256 0 0 1 45.472 0l159.872 159.584c12.544 12.512 12.48 32.896-0.16 45.504a32.224 32.224 0 0 1-45.6 0.16L512 302.048l-136.864 136.576a32.32 32.32 0 0 1-45.6-0.16 32.064 32.064 0 0 1-0.16-45.504l159.872-159.584z m0 557.248l-159.872-159.584a32.064 32.064 0 0 1 0.16-45.504 32.32 32.32 0 0 1 45.6-0.16l136.864 136.576 136.832-136.576a32.224 32.224 0 0 1 45.6 0.16c12.64 12.608 12.704 32.992 0.16 45.504l-159.872 159.584a32.256 32.256 0 0 1-45.44 0zM416 480h192a32 32 0 0 1 0 64h-192a32 32 0 0 1 0-64z"
      />
    </Provider>
  );
}

export default App;
