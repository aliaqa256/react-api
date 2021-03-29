import React, { Fragment } from 'react';
import BlogListItem from './BlogListItem';
import { Link } from 'react-router-dom';




const BlogList = () => {


    return (
        <Fragment>
       <Link to="/admin/blog/add">

     <div className="AddBlog"  >
          
                    <i className="fas fa-plus AddItem"></i>
               
            </div>

                
       </Link>


            <BlogListItem />

        </Fragment>
    );
}

export default BlogList;