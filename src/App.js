import { Routes, Route } from 'react-router-dom';

import MainLayout from './layout/main-layout.component';
import ProductLayout from './layout/product-layout.component';

import Home from './routes/home/home.component';
import ProductDetail from './routes/product-detail/product-detail.component';
import Category from './routes/category/category.component';
import Checkout from './routes/checkout/checkout.component';

import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

// const renderMultiRoutes = ({ element, paths, children, }) =>
//   paths.map((path) => <Route key={path} path={path} element={element} >
//     {children}
//   </Route>);

//   {renderMultiRoutes({
//     element: <ProductLayout />,
//     paths: ['headphones', 'speakers', 'earphones'],
//     children: <Fragment>
//       <Route index element={<Category />} />
//       <Route path=':productid' element={<ProductDetail />} />
//     </Fragment>
//   })}

const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='/*' element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path='headphones' element={<ProductLayout />} >
            <Route index element={<Category title='headphones' />} />
            <Route path=':productid' element={<ProductDetail />} />
          </Route>
          <Route path='speakers' element={<ProductLayout />} >
            <Route index element={<Category title='speakers' />} />
            <Route path=':productid' element={<ProductDetail />} />
          </Route>
          <Route path='earphones' element={<ProductLayout />} >
            <Route index element={<Category title='earphones' />} />
            <Route path=':productid' element={<ProductDetail />} />
          </Route>
          <Route path='checkout' element={<Checkout />} />
          <Route
            path="*"
            element={<p>There's nothing here!</p>}
          />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
