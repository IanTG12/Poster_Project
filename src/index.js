//Remder application

import React from "react";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { reducers } from "./Reducers/index_R";

import App from "./App";
import Nav from "./Components/Navbar/navbar";

const store = configureStore(
  { reducer: reducers },
  compose(applyMiddleware(thunk))
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Nav />);
