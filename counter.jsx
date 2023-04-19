import React, {useState} from 'react';

function Counter(){
 const [count,setCount]=useState(0);
 function addition(){
    setCount(count+1);
 }

 function minus (){
    setCount(count-1)

 }

 return(<div>
<button onClick={addition}>add</button>

<p>{count}</p>
<button onClick={minus}>minus</button>


 </div>)

}
export default Counter;
