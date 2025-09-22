import {useState} from 'react'
import './Body.css'

function Body(props) {
    const [count, setCount] = useState(0);
    
    const onCountIncrease = () => {
        setCount(count + 1);
    };

    function handleOnClick(e1) {
        console.log(e1.target.name)
    }

    function handleOnClick2(e2) {
        console.log(e2.target.value);
    }
   

    return (
        <div className="body">
            <input type="text" onChange={handleOnClick2} />
            <h1>{props.name}은 {props.location}에 삽니다.</h1>
            <h2>{count}</h2>
            <button onClick={onCountIncrease}>카운트 증가</button>
            <button onClick={handleOnClick} name="A버튼">클릭</button>
        </div>
    );
}

export default Body;

