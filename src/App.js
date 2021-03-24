import React from "react";
import axios from "axios";
import Movie from "./Movies";
import "./App.css";
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
getMovies = async () => { // async : wait
  const {data: {data : {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
  this.setState({ movies, isLoading: false });
} // await : wait, async must use // desturctung


  componentDidMount(){
    this.getMovies();
  }
  
  render (){ // render method
    const {isLoading, movies} = this.state;
    return (
        <section class="container">
            {isLoading ? ( 
                
                <div class="loader">
                  <span class="loader_text">Loading...</span>
                 </div>
                 
            ) : (

                <div class="movies">
                    {movies.map(movie => (
                      <Movie 
                      key={movie.id}
                      id={movie.id} 
                      year={movie.year} 
                      title={movie.title} 
                      summary={movie.summary} 
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                      />
                  ))}
               </div>

             )}
        </section>
    )
  };
}

export default App;
