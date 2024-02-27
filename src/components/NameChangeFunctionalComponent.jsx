import { useState } from "react";

export function NameChangeFunctionalComponent(){

    const [name,setName]=useState("Virat")
    const [counter,setCounter] =useState(0)

    const changeName= () =>{
        setName(name.concat(" Kohli"))
    }

    return(
            <div>
                Name : {name}
                <br/>
                <button onClick={changeName}>Change Name</button>
            </div>

    );
}