import React, { useState } from "react";

export default function TextForm(props) {
  const sentenceCase = () => {
    let newText = text.toLowerCase();
    newText = newText.charAt(0).toUpperCase() + newText.slice(1);
    setText(newText);
    props.showAlert("Converted to sentencecase", "success");
  };
  const titleCase = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("Converted to titlecase", "success");
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  // Counting words from 0
  const wordCount = text === "" ? 0 : text.split(" ").length;

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <div>
          <button className="btn-primary my-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          &nbsp; &nbsp; &nbsp;
          <button className="btn-primary my-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          &nbsp; &nbsp; &nbsp;
          <button className="btn-primary my-2" onClick={sentenceCase}>
            Sentence Case
          </button>
          &nbsp; &nbsp; &nbsp;
          <button className="btn-primary my-2" onClick={titleCase}>
            Title Case
          </button>
          &nbsp; &nbsp; &nbsp;
          <button className="btn-primary my-2 text-left" onClick={clearText}>
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {wordCount} {wordCount === 1 ? "Word" : "Words"} and {text.length}{" "}
          Characters
        </p>
        <p>{0.008 * wordCount} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text in text-box"}</p>
      </div>
    </>
  );
}
