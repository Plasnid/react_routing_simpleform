import React from 'react';
import {withRouter} from 'react-router-dom';
import './form.css';

function NameForm(props){   
    function goToThanks(e){
        e.preventDefault();
        console.log(props);
        console.log("will we go anywhere?");
        props.history.push('/thanks');
    }
        return (
            <form onSubmit={goToThanks}>
                <label>
                Name:
                <input type="text" onChange={props.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    
}
export default withRouter(NameForm);