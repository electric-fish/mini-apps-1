import React from 'react';

var Form2 = (props) => (
    <div className="div-form2">
        <div><h1>Form 2:</h1></div><p />
        <div>addressline: <textarea id="textarea-addressline"></textarea></div><p />
        <div>city: <textarea id="textarea-city"></textarea></div><p />
        <div>state: <textarea id="textarea-state"></textarea></div><p />
        <div>zipcode: <textarea id="textarea-zipcode"></textarea></div><p />
        <div><button className="buttonNext" onClick={() => props.F2Handler( {addressline: 'a'} )}>Onward Button</button></div>
    </div>
);
  
export default Form2;