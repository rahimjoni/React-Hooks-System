import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'

function Accordion({items}) {
    const [useItem, setItems] = useState(null)
    const titleItem =(index)=>{
        setItems(index)
    }
    const renderarItems = items.map((item, index)=>{
        return <React.Fragment key={item.title}>
            <div className="title active" onClick={()=>titleItem(index)}>
                <i className="dropdown icon"></i>{item.title}
            </div>
            <div className="content active">
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })
    return (
        <div className="ui styled accordion">
            {renderarItems}
            <h2>{useItem}</h2>
        </div>
    );
}

export default Accordion;