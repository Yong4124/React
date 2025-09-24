import {useState, useRef} from 'react';

function Body() {
    const [text, setText] = useState("");
    const textRef = useRef();
    
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleClick = () => {
        if(text.length < 5){
            textRef.current.focus();
        } else {
            alert(text);
            setText("");
        }
    };

    return( 
    <div>
        <input ref={textRef} type="text" value={text} onChange={handleChange} />
        <button onClick={handleClick}>Alert Text</button>
    </div>
    );
}
export default Body;