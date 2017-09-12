import React from 'react';

class FirstComponent extends React.Component{
    render(){
        let name = 'angus';
        return <div>{`Hello ${name} well done in React, this is the first react project using webpack`}</div>
    }
}

export default FirstComponent;