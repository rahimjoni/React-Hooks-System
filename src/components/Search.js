import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Search(props) {
    const [term,setTerm] = useState('')
    const [results,setResult] = useState([])

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
        if (term){
            search()
        }

    },[term])

    const resultData = results.map((result)=>{
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Read</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Items</label>
                    <input value={term} onChange={(e)=>setTerm(e.target.value)}/>
                </div>
            </div>
            <div className="ui celled list">{resultData}</div>
        </div>
    );
}

export default Search;