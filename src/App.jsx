import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudent";
import { useState,useEffect } from 'react';

function App() {
 
  const [show,setshow] = useState(true)
  

  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>{
        setshow(!show)
      }}>Add Student</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      {show?<ShowStudents/>:<AddStudent/>}
    </div>
  );
}

export default App;