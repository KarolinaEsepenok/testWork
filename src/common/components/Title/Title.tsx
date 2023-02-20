import React from 'react';
import s from './Title.module.scss';

type PropsType={
    name:string
}

export const Title = (props:PropsType) => {
    return (
        <div>
            <h1 className={s.mainName}>
                {props.name}
            </h1>
        </div>
    );
};

