import React from 'react'

/**
 * 1. stateless component
 * 2. component using ES6 syntax
 */

// function HelloWorld (props) {
//     return (
//         <h1>Hello {props.name}</h1>
//     )
// }

class HelloWorld extends React.Component {
    render () {
        return (
            <h1>
                Hello {this.props.name}
            </h1>
        )
    }
}

export default HelloWorld