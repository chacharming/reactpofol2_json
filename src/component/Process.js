import React from 'react';
import processcss from '../css/process.module.css';

function Process(props) {
    return (
        <div id={props.id} className={`${processcss.process} pt-5`}>
            <h2 className='text-md-center py-2'>{props.title}</h2>
            <div style={ {height: '100vh'}}></div>
        </div>
    );
}

export default Process;