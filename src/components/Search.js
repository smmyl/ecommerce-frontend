import React, {useState} from 'react'


const Search = (props) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
  
    const handleSearch = async (event) => {
      event.preventDefault();
      const response = await fetch(`/api/search/?query=${query}`);
      const data = await response.json();
      setResults(data);
    };
  
    return (
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
        {results.map((result) => (
          <div key={result.id}>{result.name}</div>
        ))}
      </form>
    );
}

export default Search