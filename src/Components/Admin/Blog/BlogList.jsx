import React, { Fragment,useEffect,useState } from 'react';
import BlogListItem from './BlogListItem';
import { Link } from 'react-router-dom';
import axios from 'axios';

<<<<<<< HEAD
const BlogList = () => {
    
=======
const url="http://localhost:8000"



const BlogList = () =>
{
    
    const [ getallblog, setallblog ] = useState( [] )

    const getallblogapi=() =>
    {
        
        axios.get( url + "/api/blog" ).then( ( {data} ) =>
        {
            setallblog( data )
            
            
        } )
            .catch( ex =>
            {
                
                console.log( ex );
            } );


    }
    
    
   
    useEffect( () =>
    {
        getallblogapi()
        console.log(getallblog);
        
    }, [] );

>>>>>>> 57b17b82775127bc8f2613fb32e9c579c7d81f3b
    return (
        <Fragment>

            <Link to="/admin/blog/add">
                <div className="AddBlog"  >
                    <i className="fas fa-plus AddItem"></i>
<<<<<<< HEAD
                </div>
            </Link>


            <BlogListItem />
=======
               
            </div>

                
       </Link>
   
     
       
           
                <BlogListItem />
    
          
>>>>>>> 57b17b82775127bc8f2613fb32e9c579c7d81f3b

        </Fragment>
    );
}

export default BlogList;