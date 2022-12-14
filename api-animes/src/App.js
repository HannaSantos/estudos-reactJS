import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import './styles.css';

const api = 'https://kitsu.io/api/edge/';

export default function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if(text){
      fetch(`${api}anime?filter[text]=${text}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
      });
    }
  }, [text]);

  return (
    <div className="App">
      <h1>Animes</h1>

      <SearchInput
      value={text}
      onchange={(search) => setText(search)}/>

      {info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img src={anime.attributes.posterImage.small}
                   alt={anime.attributes.canonicalTitle}/>
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


