import React from 'react';


const QuoteBox = ({Quote, Author}) => {
    return(
        <div>
            <div className="d-flex">
                <div className="quote">
                    <i class="fas fa-quote-left"></i>
                </div>
                <div>
                    <p>
                    {Quote}
                    </p>
                </div> 
            </div>
            <p className="author">{Author}</p>
        </div>
    )
}
export default QuoteBox;