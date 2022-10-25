import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalTextArea=({value})=>{
    return (
        <div id="portal-textarea">
            <textarea id="textarea" value={value}></textarea>
        </div>
    )
}
export default PortalTextArea;
//portal-textarea id will be used here for portal purpose
