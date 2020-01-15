import React from "react";
import { useContext } from 'react'
import { Store } from "./Store";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  const count = useContext(Store).state.favorites.length;

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode!!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/FavPage">Favorites: {count}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
