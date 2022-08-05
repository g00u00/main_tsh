import React, {useState} from 'react'
import {IObjects} from "./object_interface"

interface ObjectsProps {
    record: IObjects
}

export function Object({record}: ObjectsProps) {
    console.table(record)

    const [rend, setrend] = useState(false)
    const classNameActive=rend ? 'active fw-semibold' : ''
    const classNameCurren=["nav-link", classNameActive]

    return (
        <div className="card-body border border-1 border-top-0 p-0" >
            <ul className="nav nav-tabs border border-top-0 d-flex justify-content-between">
                <li  className={classNameCurren.join(' ')}  onClick={() => setrend(prevState => !prevState)} >{record.title} </li>
                <li  className="nav-link  text-danger" onClick={() => setrend(false)} >X</li>
            </ul>
            {
                rend &&
                <pre style={{backgroundColor: 'lightblue'}}> {record.content} </pre>
            }
         </div>


        /*        <div className="accordion-item">
                    <h2 className="accordion-header" >
                        <button type="button" className="accordion-button"   >
                            <a onClick={() => setrend(true)}>{record.title}</a>
                            <a className="text-danger" onClick={() => setrend(false)}>X</a>
                        </button>
                    </h2>
                    {
                        rend &&
                        <div id="collapseOne"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong>
                                <pre> {record.content} </pre>
                            </div>
                        </div>
                    }
                </div>
*/


        /*
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            {record.title}

                        </button>
                    </h2>
                    <div id={record.id} className="accordion-collapse collapse" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <pre>
                            {record.content}
                                </pre>
                        </div>
                    </div>
                </div>
        */

    )
        ;
}
