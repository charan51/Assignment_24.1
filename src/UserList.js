import React from 'react';
const User = (props) => {
    return (
        <div>
            <h1>UserList</h1>
            <ul>
            {
                props.userList.map(item => {
                    return <li>Name: {item.name} - Age-<span>{item.age}</span></li>
                })
            }
            </ul>
        </div>
    );
};
export default User;