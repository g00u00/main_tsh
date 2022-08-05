import React from 'react';
import {objects} from "./objects"
import {Object} from "./Object"

export default function Contents() {
    return (
        <div className="card p-0 border-0">
            {objects.map(objects => <Object record={objects} key={objects.id}/>)}
            {/*
            <Object record={objects[0]} />
            <Object record={objects[1]} />
            <Object record={objects[2]} />
*/}

            <input type="text" name="abc" defaultValue='defaultValue'/>
        </div>
    );
}
