import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Search(props) {
    const [term,setTerm] = useState('programming')
    const [result,setResult] = useState([])

    console.log(result)
    useEffect(()=>{
        const search =async ()=>{
            const{data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term,
                }
            })
            setResult(data.query.search)
        }

        search()

    },[term])
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Items</label>
                    <input value={term} onChange={(e)=>setTerm(e.target.value)}/>
                </div>
            </div>
        </div>
    );
}

export default Search;