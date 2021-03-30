import React, { Fragment } from 'react';
import UserListItem from './UserListItem';
import { Link } from 'react-router-dom';

const UserList = () => {

    return (
        <Fragment>

            <Link to="/admin/user/add">
                <div className="AddUser">
                    <i className="fas fa-plus AddItem" />
                </div>
            </Link>


            <UserListItem />

        </Fragment>
    );
}

export default UserList;