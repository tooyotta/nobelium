import React from 'react';
/* 最新バージョンではreact from reactなくても動くらしい */

const GradientBox=(props)=>{
    return(
        <div className='p-4 bg-gradient-to-r from-sky-200 to-pink-200 rounded-2xl'>
            {props.children}
        </div>
    );
};

export default GradientBox;