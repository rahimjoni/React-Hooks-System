import React, {useState} from 'react';

function Search(props) {
    const [term,setTerm] = useState('')
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