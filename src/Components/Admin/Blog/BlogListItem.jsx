import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItem = () => {
    return (

        <div className="AdminBlogList text-truncate row ">
            <div className="col  BlogListItem text-truncate">Blog.Title</div>
            <i className="verticalLine"></i>
            <div className="col BlogListItem text-truncate">Blog.User</div>
            <i className="verticalLine"></i>
            <div className="col BlogListItem text-truncate">Blog.Date</div>
            <div className="row BlogListIcon">

                <Link to="/admin/blog/edit">
                    <div className="col BlogListItem">
                        <i className="fas fa-edit EditIcon"></i>
                    </div>
                </Link>

                <div className="col BlogListItem">
                    <i className="fas fa-trash-alt TrashIcon"></i>
                </div>
            </div>
        </div>
    );
}

export default BlogListItem;