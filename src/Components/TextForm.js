import React, { useState } from "react";


let TextForm = props => {
    const [Text, setText] = useState('');

    const handleUpClick = () =>{
        let NewText = Text.toUpperCase();
        setText(NewText)
        props.showAlert("Text has been converted to Upper Case","primary");
    }
    const handleLoClick = () =>{
        let NewText = Text.toLowerCase();
        setText(NewText)
        props.showAlert("Text has been converted to Lower Case","primary");
    }

    const handleOnChange = (e) =>{
        setText(e.target.value)
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been Copied","primary");
    }

    const clear = () =>{
        setText("")
    }


    return(
        <div>
            <div className="container my-4">
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.heading}</label>
                    <textarea style={
                        {
                            backgroundColor : props.mode === "light"?"white":"black",
                            color : props.mode === "light"?"black":"white"
                        }
                    }
                 className="form-control" id="myBox" placeholder="Enter your text" value={Text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button disabled={Text.length === 0} className="btn btn-primary m-1" onClick={handleUpClick}>
                    Convert to Upper Case 
                </button>
                <button disabled={Text.length === 0} className="btn btn-primary m-1" onClick={handleLoClick}>
                    Convert to Lower Case 
                </button>
                <button disabled={Text.length === 0} className="btn btn-primary m-1" onClick={clear}>
                    Clear 
                </button>
                <button disabled={Text.length === 0} className="btn btn-primary m-1 " onClick={handleCopy}>
                    Copy 
                </button>
            </div>
            <div className="container my-4">
                <h2>Your Text Summary</h2>
                <p>{Text.split(" ").filter((element) => {return element.length!==0}).length} words and {Text.length} characters</p>
                <p>{0.008 *Text.split(" ").filter((element) => {return element.length!==0}).length } Minutes to Read </p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:"Enter text to Preview"}</p>
            </div>
        </div>
    )
}

export default TextForm