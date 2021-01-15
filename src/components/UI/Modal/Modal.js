import React from 'react';
import classes from './Modal.css';
import BackDrop from '../BackDrop/BackDrop';
import Auxi from '../../../hoc/Auxi';

const modal = (props) => {

    return(
        <Auxi>
            <BackDrop show={props.modal} modalDisplay={props.modalDisplay} />
            <div className={props.modal ? classes.Modal : null}
                 style={{transform:props.modal ? 'translateY(0)' : 'translateY(-100vh)',opacity:props.modal ? '1' : '0'}}>
                {props.children}
            </div>
        </Auxi>
    );

}

export default modal;