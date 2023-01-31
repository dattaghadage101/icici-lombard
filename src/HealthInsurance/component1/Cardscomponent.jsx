import React from 'react';

function Cardscomponent({img,title,date,paragraph,style}) {
    console.log(date)
    return (
        <>
            <div style={style}>
                <div className="card cardscomponent">
                    <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title" >{title}</h5>
                            <p className="card-text">{paragraph}</p>
                            <p className="card-text">{date}</p>
                           
                        </div>
                </div>
            </div>
        </>
    );
}

export default Cardscomponent;