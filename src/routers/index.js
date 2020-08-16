import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'

//Views
import Home from '../pages/views/Main/Home'
import AddProduct from '../components/AddProduct';
import ProductList from '../pages/views/Main/ProductList';
import About from '../pages/views/Main/About';
import EditProduct from '../components/EditProduct';
// import AppL from '../components/AppL';

const Routers = ({ products, onRemove, onAdd, onUpdate }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }

    const onHandleAdd = (products) => {
        onAdd(products)
    }

    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }

    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <AddProduct products={products} onAdd={onHandleAdd} />
                            </Route>

                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route path="/admin/products/:path?">
                    <LayoutAdmin>
                        <Route path='/admin/products/:id'>
                            <EditProduct products={products} onUpdate={onHandleUpdate} />
                        </Route>

                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/about" exact>
                                <About />
                            </Route>
                            <Route path="/list">
                                <ProductList products={products} />

                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
