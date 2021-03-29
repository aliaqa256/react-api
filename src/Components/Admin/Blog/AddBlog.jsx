import React, { Fragment, Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';







const AddBlog = () => {






    return (


        <Fragment>

            <div className="MainAddBlog row" id="modalforaddblog"  >


                <div className="SidebarAddBlog col col-lg-3">
                    <div className="ContentAddBlogImage"></div>

                    <button className="BtnAddBlog btn btn-info" />



                    <div className="ContentAddBlogCustom">
                        <div>
                            <input type="text" className="InputDivAddBlog" />









                        </div>


                        <div className="SelectDivAddBlog">
                            <ul>
                                <li>
                                    <label>One</label>
                                    <input type="checkbox" />
                                </li>


                            </ul>

                        </div>


                    </div>
                </div>






                <div className="ContentAddBlog col col-lg-9">
                    <input type="text" className="TitleInputAddBlog" />

                    <div className="EditorAddBlog">
                        <div id="editor">


                            <h2>Using CKEditor 5 build in React</h2>
                            <CKEditor                               
                                editor={ClassicEditor}
                                data=""
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    // console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
                                }}
                                onBlur={(event, editor) => {
                                    // console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                    // console.log('Focus.', editor);
                                }}


                                config={{ckfinder: {
                   
                      uploadUrl: '/img'
                    }}}
                            />






                        </div>


                    </div>

                </div>



            </div>

        </Fragment>

    );
}

export default AddBlog;