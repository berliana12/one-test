import React from 'react'
import axios from 'axios'

class Api extends React.Component{

    constructor(){
        super()
        this.state = {
            users: []
        }
    }
    componentWillMount(){
        const url = 'https://jsonplaceholder.typicode.com/users'
        axios.get(url)
            .then( users => {
                console.log(users.data);
                
                this.setState({
                    users: users.data
                })
            })
    }

    render(){
        return(
            <div>
                <hr/>
                <h1 style={{textAlign:'center', padding:'8px', backgroundColor:'black', color:'white',marginTop: 0}}>This is Api page</h1>
                {this.state.users.map((user) => {
                    return (
                        <div style={{textAlign:'center'}}>{user.username}</div>
                    )
                })}
            </div>
        )
    }
}

export default Api