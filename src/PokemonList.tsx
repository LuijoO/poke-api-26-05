import React, { useState, useEffect } from 'react';
import DataGrid, { Column, ColumnFixing } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Pokemon {
  id: number;
  name: string;
}

function PokemonList() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const urlPath = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    axios.get(urlPath)
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  });

  const extractIdFromUrl = (url: string) => {
    const segments = url.split('/');
    return parseInt(segments[segments.length - 2]);
  };

  return (
    <div>
      <h1>Pokemon List</h1>
      <DataGrid
        dataSource={pokemonList}
        showBorders={true}
      >
        <Column
          caption="Details"
          cellRender={(rowData: any) => {
            const pokemon = rowData.data;
            return <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>;
          }}
        />
        <Column dataField="id"
        caption="ID"
        cellRender={(rowData: any) => {
          const pokemon = rowData.data;
          const id = extractIdFromUrl(pokemon.url);
            return <p>{id}</p>;
        }}/>
        <ColumnFixing enabled={true} />
      </DataGrid>
    </div>
  );
  
}

export default PokemonList;
