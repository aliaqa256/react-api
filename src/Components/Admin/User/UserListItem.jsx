import React, { Fragment } from 'react';

const UserListItem = () => {
    return (
      



        <div className="AdminBlogList text-truncate row ">
            
                <div className="col  BlogListItem text-truncate">User.Username</div>
                <i className="verticalLine"></i>
                <div className="col BlogListItem text-truncate">User.Email</div>
                <i className="verticalLine"></i>
                <div className="col BlogListItem text-truncate">User.Role</div>
                <div className="row BlogListIcon">
                    <div className="col BlogListItem">
                        <i className="fas fa-edit EditIcon"></i>
                    </div>
                    <div className="col BlogListItem">
                        <i className="fas fa-trash-alt TrashIcon"></i>
                    </div>
            </div>
            
            </div>





       


    );
}

export default UserListItem;