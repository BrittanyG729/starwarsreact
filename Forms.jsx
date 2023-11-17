import { useState, useEffect } from 'react'
import StarshipCard from './StarshipCard';
function Form(props) {
    // add state to hold the data of the form
    const [formData, setFormData] = useState({
        searchterm: "",
    })
    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        // prevent page from refreshing on form submissin
        event.preventDefault();
        // pass the search term to moviesearch prop (the method that will search)
        props.starwarSearch(formData.searchterm);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <input type="submit" value="submit" />
            </form>
            <p>Type in the starwars to search as "starships"</p>
        </div>
    )
}


function StarWars({starship}) {
    // we are using { movie } instead of props so that we can access it
    // by just using movie, instead of props.movie
    const loaded = () => {
        return (
            <>
                <h1>this is all starship</h1>
                <h3>results</h3>
                {starship.results.map (result => {
                    return (<h4> name: {result.name}</h4>
                    )
                })  }
            </>
        )
    }
    const loading = () => {
        return <h1>starship to Display</h1>
    }
    //The component must return some JSX
    return starship ? loaded() : loading();
}
// We must export the component to use it in other files
export default Forms