import { useState, useEffect} from "react";
import "./index.css";

const TimerItWebApp = () =>{
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // Timer controls
    useEffect(()=>{
        let timer;
        if(isActive){
            timer = setInterval(()=> {
                if (seconds > 0){
                    setSeconds((prev) => prev -1);
                } else if (minutes > 0) {
                    setMinutes((prev) => prev - 1);
                    setSeconds(59);
                } else {
                    setIsActive(false);
                }
            },1000);
        }
        return () => clearInterval(timer);
    }, [isActive, minutes, seconds]);
    
    const startTimer = () => setIsActive(true);
    
    const setPomodoro = () =>{
        setMinutes(25);
        setSeconds(0);
        setIsActive(false);
    };
    const setBreak= () => {
        setMinutes(5);
        setSeconds(0);
        setIsActive(false);
    }


    //To-do list controls

   //ADD ITEM 
    const addItem = () => {
        // var li = document.createElement("li");
        if (inputValue.trim() !== ""){
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    }

    //DELETE ITEM
    const deleteItem = (index) =>{
        setTodos(todos.filter((_,i) => i !== index));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter"){
            addItem();
        }
    };



    
    return(
        <div className="wrapper">
            <div className="heading">
                <h1>Timer It!</h1>
            </div>

            <div className="buttons">
                <div className="top">
                    <button onClick={setPomodoro}>Pomodoro</button>
                    <button onClick={setBreak}>Break</button>
                </div>
                
                <div className="bottom">
                    <button onClick={startTimer}>Start</button>
                </div>
            </div>

            <div className="timer-display">
                <span>{String(minutes).padStart(2, "0")}</span>
                <span>:</span>
                <span>{String(seconds).padStart(2,"0")}</span>
            </div>

            {/* to-do list part */}

            <div id="myList" class="Listing">
                <div className="inputRow">
                    <input 
                        type="text" 
                        className="myInput" 
                        placeholder="To-Do List"
                        value = {inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown = {handleKeyDown}
                    />

                    <button onClick={addItem} className="addBtn">Add</button>
                </div>
                
                <ul>
                {todos.map((todo, index)=>
                    <li key={index}>
                        {todo}{""}
                        <button onClick={()=> deleteItem(index)}className="deleteBtn">Delete</button>
                    </li>
                )}
            </ul>
            </div>

            
        </div>
    );
};

export default TimerItWebApp;


        