import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store/store.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router>
            <ChakraProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </ChakraProvider>
        </Router>
    </React.StrictMode>
);
