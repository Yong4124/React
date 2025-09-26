import { useState, useRef } from "react";

function BodyRef() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleOnClick = () => {
    setText(inputRef.current.value);
    setText(value);
  };

 

  return (
    <>
      <h1>This is Body Component</h1>
      <input type="text" ref={inputRef} />
      <p>{text}</p>
      <button onClick={handleOnClick}>클릭</button>
    </>
  );
}

export default BodyRef;
