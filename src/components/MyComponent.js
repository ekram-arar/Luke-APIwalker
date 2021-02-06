import React,{useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
const MyComponent = () => {
    const [starData, setStarData] = useState([]);
    const [formState, setFormState] = useState({resource: "people",id: ""});
    const onChange = e => {
        setFormState({...formState,[e.target.name]: e.target.value});
    }
    
    const onClick = () =>{
        axios.get('https://swapi.dev/api/'+formState.resource +'/'+formState.id+'/')
        .then(response=>{setStarData(response.data);
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        navigate('/' + formState.resource + '/' + formState.id);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                    <label>Search For:</label>
                        <select name="resource" onChange={onChange}>
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                        </select>
                      
                    <label>ID:</label>
                        <input type="number" name="id" onChange={onChange}/>
                                
                    <button onClick={onClick} type="submit">Search</button>
            </form>
            <>
            <h3>{starData.name}</h3>
            { formState.resource === "people" ?
            <>
            <p><strong>Height:</strong> {starData.height} cm</p>
            <p><strong>Mass:</strong> {starData.mass} kg</p>
            <p><strong>Hair Color:</strong> {starData.hair_color}</p>
            <p><strong>Skin Color:</strong> {starData.skin_color}</p>
            </>
        :
        <p></p>

        }
        </>

        { formState.resource === "planets" ?
            <>
            <p><strong>Climate:</strong> {starData.climate}</p>
            <p><strong>Terrain:</strong> {starData.terrain}</p>
            <p><strong>Surface Water:</strong> {starData.surface_water}</p>
            <p><strong>Population:</strong> {starData.population}</p>
            </>
        :
        
        <p></p>
 
        }

        </div>
    )
}

export default MyComponent;                                                                                                    
