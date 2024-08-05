/*
Copyright 2022 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from "react";
import Container from "./Container.tsx";

/***
 * Displays a grid of Team & People Link to find more details
 */
const Page = () => {
  let pagePath = document.location.pathname;
  let isDefault = false;
  if (pagePath.endsWith(".html")) {
    pagePath = pagePath.substring(0, pagePath.length - 5);
  }
  if (pagePath.startsWith("/aem")) {
    pagePath = pagePath.substring(4);
  }
  if (pagePath === "/") {
    pagePath = "/content/b2b/straumann/com/en/website/home/about";
    isDefault = true;
  }
  
  return (
    <div className="page">
      <h2 className="page__title">WKND Teams</h2>
      {isDefault && (<p className="page__description">Using default "about" page. Please enter proper URL preceeded with /aem/</p>)}

      <Container pagePath={pagePath} componentSubpath="root/container" />
    </div>
  );
}

export default Page;
