import { useState, useEffect } from 'react';
import { Form } from './styles';

const SearchBar = ({ onTermSubmit }) => {
  const [ term, setTerm ] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    onTermSubmit(term.trim());
  }

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <input 
          type="text" 
          placeholder="Busque por algum personagem..."
          value={term}
          onChange={(e) => setTerm(e.target.value)} 
        />
      </Form>
    </>
  );
}

export default SearchBar;

