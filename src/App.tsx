import React from "react";
import { Store } from "./Store";

interface IEpisode {
  id: number
url: string
name: string
season: number
number: number
airdate: string
airtime: string
airstamp: string
runtime: number
image: {medium: string, original: string}
summary: string
}

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };

  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode!!!</p>
      <section>
        {state.episodes.map((episode: any) => {
          return (
            <section key={episode.id}>
              <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
              <div>{episode.name}</div>
              <section>
                Season: {episode.season} Number: {episode.number}
              </section>
            </section>
          )
        })}
      </section>
    </React.Fragment>
  );
}
