import React from "react";
import PropTypes from "prop-types";

const foodILike = [

  {
    id : 1,
    name : "kimchi",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831.jpg",
    rating : 5
},
  {
    id : 2,
    name : "deounjangjjikae",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2018/06/DSC_0672.jpg",
    rating : 4.9
},
  {
    id : 3,
    name : "bulgogi",
    image : "https://chefjulieyoon.com/wp-content/uploads/2015/12/Bulgogi-22-1.jpg",
    rating : 3.3
},
  {
    id : 4,
    name : "donkkassu",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2017/06/DSC_1922-1-e1496660923866.jpg",
    rating : 3
} 

];

// child component
function Food({name, image, rating}) { // {} in argument or props.name ...
  
  return ( 
    App
    <div>

    <h1>I Like {name} </h1>
    <img src={image} alt={name}/> {/* alt : blind people*/}
    <h3>{rating}/5.0</h3>
    
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired, // isRequired...
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

// must name is PropTypes
// refer site : https://ko.reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper


// father component
function App() {
  return (
    <div className="App">
        {foodILike.map(dish => <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>)}
    </div> // map : render >> each
  );
}

// react : unique, all element different.. >> cause id use..

export default App;