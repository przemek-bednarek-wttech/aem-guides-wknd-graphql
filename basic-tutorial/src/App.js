/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import logo from "./images/wknd-icon.svg";
import "./App.scss";
import Page from "./components/Page.tsx";

function App() {
return (
    <HelmetProvider>
        <div className="App">
            <Helmet>
              {/* AEM Universal Editor :: CORE Library
                  Loads the LATEST Universal Editor library
              */}
              <script
                src="https://universal-editor-service.experiencecloud.live/corslib/LATEST"
                async
              />
              {/* AEM Universal Editor :: Connection metadata
                  Connects to local AEM instance
              */}
              <meta
                name="urn:adobe:aue:system:aemconnection"
                content={`aem:https://localhost:8443`}
              />
              {/* AEM Universal Editor :: Configuration for Service
                  Using locally running Universal Editor service
              */}
              <meta
                name="urn:adobe:aue:config:service"
                content={`https://localhost:8001`}
              />
            </Helmet>
            <Router>
                <header>
                    <Link to={"/"}>
                    <img src={logo} className="logo" alt="WKND Logo" />
                    </Link>
                    <hr />
                </header>
                <Routes>
                    <Route path="/*" element={<Page />} />
                </Routes>
            </Router>
        </div>
    </HelmetProvider>
);
}

export default App;

