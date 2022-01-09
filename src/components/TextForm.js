import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, settext] = useState('')

    const handleOnChange = (event)=>{
        settext(event.target.value);
    }
    const upperCase = ()=>{
        console.log("uppercase clicked")
        let newtext= text;
        newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to UpperCase","success")
    }
    const lowerCase = ()=>{
        let newtext= text;
        newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("Converted to LowerCase","success")
    }

    const copyText= ()=>{
        var text= document.getElementById('myText')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard","success")
    }

    const clear = ()=>{
        let newtext = "";
        settext(newtext);
        props.showAlert("Text Cleared","success")
    }
    
    return (
        <>
            <div className="mb-3" style={{color : props.mode==='dark'?'white':'black'}}>
                <label htmlFor="myText" className="form-label">Enter your text here</label>
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myText" style={{color : props.mode==='light'?'white':'black',backgroundColor:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
                <button onClick={upperCase} className="btn btn-primary">Convert to UpperCase</button>
                <button onClick={lowerCase} className="btn btn-primary m-3">Convert to LowerCase</button>
                <button onClick={copyText} className="btn btn-primary m-3">Copy Text</button>
                <button onClick={clear} className="btn btn-primary m-3">Clear</button>
            </div>
            <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.length} characters and {text.length===0 ?(text.split(' ').length-1): text.split(' ').length } words</p>
                <p>{0.008 * (text.length===0?0:text.split(' ').length)} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
        
    );
}
