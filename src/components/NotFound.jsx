import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div class="p-not-found">
      <div class="p-not-found__content">
        <div class="u-layout">
          <h1 class="p-not-found__content__heading">Page Not Found</h1>
          <p class="p-not-found__content__txt">
            The page you're looking for does not exists. <br />
            Click the button below to go back to homepage.
          </p>
          <Link to="/" className="p-not-found__content__btn c-button is-pink u-font-serif" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
