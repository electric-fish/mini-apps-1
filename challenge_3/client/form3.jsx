import React from 'react';

var Form3 = (props) => (
    <div className="div-form3">
        <div><h1>Form 3:</h1></div><p />
        <div>creditcard: <textarea id="textarea-creditcard"></textarea></div><p />
        <div><button className="buttonNext" onClick={() => props.F3Handler( {creditcard: 'a'} )}>Totally Safe Button</button></div>
    </div>
);

export default Form3;