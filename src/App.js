import React, { useState, useEffect } from 'react';
import './App.css';
import Routers from './routers'
import productApi from './api/productApi'


function App() {

  const [products, setProducts] = useState([]);

  //danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () =>{
      try {
        const {data} = await productApi.getAll();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

   // Xóa sản phẩm
   const onHandleRemove = async (id) => {
    try {
      const data  = await productApi.remove(id);
      const newProducts = products.filter(product => product.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await productApi.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

   // Cập nhật product 
   const onHandleUpdate = (updateProduct) => {
    const newProducts = products.map(product => (
      product.id === updateProduct.id ? updateProduct : product
    ));
    localStorage.setItem('products', JSON.stringify(newProducts))
    setProducts(newProducts);
  }



  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate}/>
    </div>
  )

}

export default App;