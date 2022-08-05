import React, {useState} from 'react';
import * as http from "http";

function Inputs() {
        const [a, setA] = useState(' ')
    console.log(a)
    return (

        <div className="card card-body">
            <form action="http://nn2000.info">
            <input type="text" placeholder='abc' value={a} onChange={e => setA(e.target.value)} defaultValue='1' />
            <input type='submit'/>
            </form>
        </div>
    );
}

export default Inputs;