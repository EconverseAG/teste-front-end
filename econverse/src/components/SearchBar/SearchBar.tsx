import { useState } from 'react';
import type { FormEvent } from 'react';
import { SearchIcon } from '../Icons/Icons';
import './SearchBar.scss';

export function SearchBar() {
  const [query, setQuery] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //logica de envio aqui
  }

  return (
    <form className="search-bar" role="search" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="search-input">
        Buscar produtos
      </label>
      <input
        id="search-input"
        className="search-bar__input"
        type="search"
        placeholder="O que você está buscando?"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button className="search-bar__button" type="submit" aria-label="Buscar">
        <SearchIcon size={26} />
      </button>
    </form>
  );
}
