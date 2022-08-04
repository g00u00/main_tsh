import React, {useState} from 'react'
import {IObjects} from "./models"


interface ObjectsProps {
    record: IObjects
}

export function Object({record}: ObjectsProps) {
    console.log({record})
    const [info, setInfo] = useState(false)

    const classNameActive=info ? 'active fw-semibold border-botton-0' : ''
    const classNameCurren=['nav-link', classNameActive]

    return (
        <div className="card-body border border-1 border-top-0 p-0">
            <ul className="nav nav-tabs border border-top-0 d-flex justify-content-between">
{/*
                <li><a className="nav-link" onClick={() => setInfo(true)}>{record.title}</a></li>
*/}
                <li><a className={classNameCurren.join(' ')}  onClick={() => setInfo(prevState => !prevState)}>{record.title}</a></li>
                <li><a className="nav-link  text-danger" onClick={() => setInfo(false)}>X</a></li>
            </ul>
            {
                info &&
                <pre> {record.content} </pre>
            }
        </div>


        /*        <div className="accordion-item">
                    <h2 className="accordion-header" >
                        <button type="button" className="accordion-button"   >
                            <a onClick={() => setInfo(true)}>{record.title}</a>
                            <a className="text-danger" onClick={() => setInfo(false)}>X</a>
                        </button>
                    </h2>
                    {
                        info &&
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
