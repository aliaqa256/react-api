import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItem = (props) => {
    return (

      
            
        <div className="AdminBlogList text-truncate row ">
<<<<<<< HEAD
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
=======
            {console.log( props )}

                    <div className="col  BlogListItem text-truncate">blog.title </div>
                    <i className="verticalLine"></i>
                    <div className="col BlogListItem text-truncate">Blog.User</div>
                    <i className="verticalLine"></i>
                    <div className="col BlogListItem text-truncate">Blog.Date</div>
                    <div className="row BlogListIcon">
                        <div className="col BlogListItem">
                            <i className="fas fa-edit EditIcon"></i>
                        </div>
                        <div className="col BlogListItem">
                            <i className="fas fa-trash-alt TrashIcon"></i>
                        </div>
                    </div>
>>>>>>> 57b17b82775127bc8f2613fb32e9c579c7d81f3b
                </div>

    
       
        
    
            

   
        
    

    
    
       
      
    );
}

export default BlogListItem;