import React from 'react';

function TodoLoading() {
    return ( 
        <div className='row'>
            <div className='col-1'>
                <div className="spinner-border text-primary">
                </div>
            </div>
            <div className='col-11'>
                <p> Espere estamos cargado sus datos. </p>
            </div>
        </div>
    );
    }
export { TodoLoading };