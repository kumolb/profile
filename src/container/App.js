import './App.css';
import {useState, useEffect} from "react";
import axios from 'axios';
const url = "https://jsonplaceholder.typicode.com/photos"
function App() { 
  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    async function fetchData(){
          const request = await axios.get(url);
          setMovies(request.data);
          return request;
    }
    fetchData();
}, [])
  return (
    
    <div className="App">
      {movies?.map((movie,index) => 
        (<img key={movie.url+index} src={`${movie.url}${index}`} alt={movie.title} />)
      )}
    </div>
  );
}

export default App;
