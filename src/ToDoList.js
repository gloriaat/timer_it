// import { useState } from "react";
// import "./index.css";

// const ToDoList = () =>{
//     const [checked, setChecked] = useState(false);
//     const [text, setText] = useState ("To-Do List");
    
//     return(
//         <label className="checkbox-container">
//             <input
//                 type="checkbox"
//                 checked={checked}
//                 onChange={() => setChecked(!checked)}
//             /> 

//             <input
//                 type="text"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 // className = "editable-text"
//                 className={`editable-text ${checked ? "completed" : ""}`}
//             />

            
//         </label>
//     );
// };

// export default ToDoList;