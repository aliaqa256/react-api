import React, { Fragment } from 'react';
import BlogListItem from './BlogListItem';

const BlogList = () => {
    return (
        <Fragment>
            <div className="AddBlog">
                <i className="fas fa-plus AddItem"></i>
            </div>


            <BlogListItem />

        </Fragment>
    );
}

export default BlogList;