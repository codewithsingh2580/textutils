import React,{useState} from 'react'


export default function Form(props) {
    const handleUpClick=() =>{
        // console.log("UpperCase was clicked" + text)
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLoClick=() =>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleonChange=(event) =>{
        setText(event.target.value)
    }
    const handleRemove=() =>{
        setText("")
    }
    const handleCopy = () =>{
        let text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)

    }
  const [text, setText] = useState('Enter text here');

  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{background:props.mode === 'dark'?'#26135d':'white',color:props.mode === 'dark'?'white':'black'}} onChange={handleonChange}id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={handleRemove}>Remove</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Click copy</button>
    </div>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black',}}>
        <h2>Count world or charactors</h2>
        <p>{text.split(" ").length} word and {text.length} charactors</p>
        <h3>Reading ratio</h3>
        <p>{0.008 * text.split(" ").length} word and {text.length} charactors</p>
        <h4>Preview</h4>
        <p id="text">{text}</p>
    </div>
    </>
  )
}
