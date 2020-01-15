import React from "react";
import { Store } from "./Store";
import {IEpisodeProps } from './interfaces'
import { toggleFavAction } from './Actions'

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props = {
      episodes: state.favorites,
      store: { state, dispatch },
      toggleFavAction,
      favorites: state.favorites
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
