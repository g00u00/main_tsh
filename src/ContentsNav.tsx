import React from 'react';
import {objects} from "./objects"
import {Object} from "./Object"

export default function Contents() {
    return (
        <div>
            <Object record={objects[0]} />
        </div>
    );
}
