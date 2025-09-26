import { useState } from "react";

function Body() {
  const [text, setText] = useState("");

  const handleOnClick = () => {
    alert(text); 
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>This is Body Component</h1>
      <input type="text" value={text} onChange={handleOnChange} />
      <p>{text}</p>
      <button onClick={handleOnClick}>클릭</button>
    </>
  );
}

export default Body;
