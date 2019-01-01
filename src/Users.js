import React, {Component} from 'react';
import User from './UserList';
class Users extends Component {
    render() {
        const userList = [
            {
                name: 'Charan',
                age: 25
            },
            {
                name: 'Raj',
                age: 33
            },
            {
                name: 'Tom',
                age: 24
            }
        ]
        return(
            <div>
                <User userList={userList} />
            </div>
        );
    }
}
export default Users;