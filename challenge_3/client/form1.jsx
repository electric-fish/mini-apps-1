import React from 'react';

var Form1 = (props) => (
    <div className="div-form1">
        <div><h1>Form 1:</h1></div><p />
        <div>name: <textarea id="textarea-name"></textarea></div><p />
        <div>email: <textarea id="textarea-email"></textarea></div><p />
        <div><button className="buttonNext" onClick={() => props.F1Handler()}>Onward Button</button></div>
    </div>
);

export default Form1;