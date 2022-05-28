import React, { useState } from "react";

export default function Textform(props) {
  const [Text, setText] = useState("");
  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const buttonclick = () => {
    var copyText = document.getElementById("Mytextbox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    // alert("Copied the text: " + copyText.value);
  };

  const handleUpcase = () => {
    let newtext = Text.toUpperCase();
    setText(newtext);
  };

  const handleLocase = () => {
    let newtext = Text.toLowerCase();
    setText(newtext);
  };

  const reversecase = () => {
    let newtext = Text.split("").reverse().join("");
    setText(newtext);
  };

  const sortcase = () => {
    let newtext = Text.split("").sort().join("");
    setText(newtext);
  };

  const clearcase = () => {
    let newtext = "";
    setText(newtext);
  };
  const blankspaces = () => {
    let newtext = Text.split(" ");
    let newstring = "";
    for (let i = 0; i < newtext.length; i++) {
      if (newtext[i].length > 1) {
        newstring = newstring + newtext[i] + " ";
      }
    }
    setText(newstring);
  };

  const removewhitelines = () => {
    let newtext = Text.split("\n");
    let newstring = "";
    for (let i = 0; i < newtext.length; i++) {
      if (newtext[i].length != "\n") {
        newstring = newstring + newtext[i] + "\n";
      }
    }
    setText(newstring);
  };

  return (
    <div className="container">
      <h1 className="my-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={Text}
          onChange={handleonchange}
          id="Mytextbox"
          rows="8"
        ></textarea>
      </div>

      <div className="container-fluid">
        <button
          className="btn btn-md btn-dark mx-1 my-1"
          onClick={handleUpcase}
        >
          Change to UpperCase
        </button>
        <button
          className="btn btn-md btn-dark mx-1 my-1"
          onClick={handleLocase}
        >
          Change to LowerCase
        </button>
        <button className="btn btn-md btn-dark mx-1 my-1" onClick={reversecase}>
          Reverse String
        </button>
        <button className="btn btn-md btn-dark mx-1 my-1" onClick={sortcase}>
          Sort String
        </button>
        <button className="btn btn-md btn-dark mx-1 my-1" onClick={blankspaces}>
          Remove WhiteSpaces
        </button>
        <button
          className="btn btn-md btn-dark mx-1 my-1"
          onClick={removewhitelines}
        >
          Remove Extra lines
        </button>
        <button className="btn btn-dark" id="copypaste" onClick={buttonclick}>
          <i className="fa fa-clipboard"></i>
        </button>
        <button
          className="btn btn-md btn-primary mx-1 my-1"
          onClick={clearcase}
        >
          Clear Text
        </button>
      </div>

      <div className="container">
        <h2>Your Text Analysis:</h2>
        <p>
          Total Characters: {Text.length} <br />
          Total Words: {Text.split(" ").length} <br />
          Total Sentence: {Text.split(".").length - 1} <br />
          Total lines: {Text.split("\n").length - 1} <br />
        </p>
      </div>
    </div>
  );
}
