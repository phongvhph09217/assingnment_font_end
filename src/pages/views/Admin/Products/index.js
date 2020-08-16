import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductsManager = ({ products, onRemove }) => {
    const removeHandle = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa không?')) { //eslint-disable-line
            console.log(id);
            onRemove(id)

        }
    }
    return (
        <div>
            <Link to="/admin">
                <button type="button" className="btn btn-primary mb-20" >Add product</button>
            </Link>
            <div className="card shadow mb-4">

                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Product List</h6>
                </div>

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {products.map(({ id, name, image, price }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="100" height="200" /></td>
                                        <td>{price}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandle(id)}>Delete</button>&nbsp;
                                            <Link className="btn btn-primary" to={`/admin/products/${id}`}>Edit</Link>

                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {
    products: PropTypes.array,
    onRemove: PropTypes.func
}

export default ProductsManager
