import React, {createElement as e, useState} from 'react';

function Tst() {
    useState()
    const [count, setCount] = useState(0)
    console.log(count)
    /*return ( <h2 className="bg-danger">Привет1</h2>);
    */
    /*
    return React.createElement('h2',{className:"bg-danger"}, 'Привет2')
    */

    return e('div', {className: 'd-flex flex-column align-items-start bg-light', title:'title',
        children:[
            e('h1',{className:'text-succes', key:1}, 'h1'),
            e('h6',{className:'text-succes', key:2}, `h6 ${count}`),
            e('button',{className:'btn btn-outline-primary btn-lg', key:3}, 'Кликни'),
            e('button',{className:'btn btn-outline-info', key:4,
            onClick: () => setCount(count+1)
            }, 'Кликни'),
        ]})

/*
    return (
        <div className='d-flex flex-column align-items-start bg-light'>
            <h1>h1</h1>
            <h6 className='text-succes'>h1</h6>
            <button className='btn btn-outline-primary btn-lg'>Кликни</button>
            <button className='btn btn-outline-primary btn-outline-info'>Кликни</button>
        </div>
    );
*/

}

export default Tst;