import React from 'react'


function Alert(props) {

    const capitilize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
            props.alert && <div class="alert alert-success  alert-dismissible fade show" role="alert">
                <strong>{capitilize(props.alert.type)}</strong> : {props.alert.msg}
            </div>
    )
}

export default Alert
