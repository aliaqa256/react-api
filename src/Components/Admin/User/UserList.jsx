import React, { Fragment } from 'react';
import UserListItem from './UserListItem';

const UserList = () => {
    return (

        <Fragment>

            <div className="AddBlog">
                <i className="fas fa-plus AddItem"/>
            </div>

            <UserListItem />
        </Fragment>
    );
}

export default UserList;