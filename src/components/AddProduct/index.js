import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { storage } from 'firebase';
import firebase from '../../firebase'
import { Editor } from '@tinymce/tinymce-react';

const AddProduct = ({ onAdd }) => {

    const { register, handleSubmit,  errors } = useForm(); // sử dụng hook fore
    const history = useHistory()

    // const [desc, setDesc] = useState("");

    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    // desc,
                    image: url
                }
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData)
            })
        });
        history.replace('/admin/products')
    }

    // const handleEditorChange = (content, editor) => {
    //     setDesc(content);
    // }

    return (
        <div className="card shadow my-4 form">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-primary"> Thêm sản phẩm</h5>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input
                            placeholder="Tên sản phẩm"
                            type="text"
                            name="name"
                            className="form-control"  
                            ref={register({ required: true })}
                        />
                        {errors.name && errors.name.type === "required" && <span className="text-red">Tên sản phẩm không được để trống</span>}
                        
                    </div>
                    <div className="form-group mt-50">
                        <label htmlFor="exampleInputEmail1">Image</label>
                        <input type="file" name="image" className="form-control-file img1" ref={register({ required: true })} />
                        {errors.image && errors.image.type === "required" && <span className="text-red">Ảnh sản phẩm không được để trống</span>}
                    </div>
                    <div className="form-group mt-50">
                        <label htmlFor="exampleInputEmail1">Price</label>
                        <input
                            placeholder="Giá tiền"
                            type="number"
                            name="price"
                            className="form-control"
                            ref={register({ required: true})} 
                        />
                        {errors.price && <span className="text-red">Giá sản phẩm không được để trống!</span>}
                        {/* {errors.price && errors.price.type === "minLength" && <span className="text-red">Bạn phải nhập ít nhất 5 số!</span>} */}
                    </div>

                    
                    {/* <div className="form-group">
                    <label htmlFor="productDescription">Mô tả chi tiết sản phẩm</label>
                    <Editor
                        init={{
                            height: 500,
                            images_upload_url: 'postAcceptor.php',
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor |  image link\
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help',

                        }}
                        onEditorChange={handleEditorChange}
                    />
                </div> */}


                    <button
                        type="submit"
                        className="btn btn-primary mt-50"
                    >
                        Thêm sản phẩm
                    </button>
                </form>





            </div>




        </div>
    )
}

AddProduct.propTypes = {
    onAdd: PropTypes.func
}

export default AddProduct