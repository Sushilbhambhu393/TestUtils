import React, { useState } from "react";

export default function Textfrom(props) {
  const handleupclick = () => {
    // console.log("uppercase was clicked");
    var newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("UpperCase conversion !!","success");
  };

  const handlelowclick = () => {
    // console.log("lowercase was clicked");
    var newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("LowerCase conversion !!","success");
  };

  const handleCopy = () => {
  let text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showalert("Copy !!","success");
  }

  const handleClearclick= ()=>{
    var newtext = "";
    setText(newtext);
    props.showalert("Cleared !!","success");
  }

  const handleExtraSpace = () =>{
    var newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra Space Is Removed!!","success");

  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("enter text here");
 
  

  return (
    <>
      <div className="container" style={{ backgroundColor: props.mode === "dark" ? "#042743 " : "white", color: props.mode === 'dark'?'white':'black'}}  >
        <div className="mb-3">
          <label htmlFor="eTextarea1" className="form-label" id="a">
            <h1> {props.heading}</h1>
          </label>
          <textarea className="form-control" value={text} id="myBox" style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white", color: props.mode === 'dark'?'white':'black' }} onChange={handleOnChange} rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupclick}> Convert to UpperCase   </button>
        <button className="btn btn-primary mx-1" onClick={handlelowclick}>Convert to LowerCase    </button>
        <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear Text   </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text    </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces    </button>
      </div>
      <div className="container my-3"  style={{ backgroundColor: props.mode === "dark" ? "#042743 " : "white",color: props.mode === 'dark'?'white':'black' }} >
        <h2>Your Text Summary</h2>
        <p>
          { text.split(" ").length }  words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read to this text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here "}</p>
      </div>
    </>
  );
}
