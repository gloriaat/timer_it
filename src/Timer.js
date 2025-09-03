// import {useState, useEffect} from "react";
// import "./index.css";

// const Timer = () =>{
//     const [minutes, setMinutes] = useState(25);
//     const [seconds, setSeconds] = useState(0);
//     const [isActive, setIsActive] = useState(false);

    // useEffect(()=>{
    //     let timer;
    //     if(isActive){
    //         timer = setInterval(()=> {
    //             if (seconds > 0){
    //                 setSeconds((prev) => prev -1);
    //             } else if (minutes > 0) {
    //                 setMinutes((prev) => prev - 1);
    //                 setSeconds(59);
    //             } else {
    //                 setIsActive(false);
    //             }
    //         },1000);
    //     }
    //     return () => clearInterval(timer);
    // }, [isActive, minutes, seconds]);

//     const startTimer = () => setIsActive(true);

//     const setPomodoro = () =>{
//         setMinutes(25);
//         setSeconds(0);
//         setIsActive(false);
//     };
//     const setBreak= () => {
//         setMinutes(5);
//         setSeconds(0);
//         setIsActive(false);
//     }

//     return(
//         <div className="wrapper">
//             {/* <h1>Timer</h1> */}

//             <div className="buttons">
//                 <div className="top">
//                     <button onClick={setPomodoro}>Pomodoro</button>
//                     <button onClick={setBreak}>Break</button>
//                 </div>
                
//                 <div className="bottom">
//                     <button onClick={startTimer}>Start</button>
//                 </div>
//             </div>

//             <div className="timer-display">
//                 <span>{String(minutes).padStart(2, "0")}</span>
//                 <span>:</span>
//                 <span>{String(seconds).padStart(2,"0")}</span>
//             </div>


//         </div>


//     );

// };

// export default Timer;