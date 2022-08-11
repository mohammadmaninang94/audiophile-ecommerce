import { Routes, Route } from 'react-router-dom';

import { default as MainLayout } from './layout/main';
import Home from './routes/home/home.component';
import ProductDetail from './routes/product-detail/product-detail.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path="product-detail" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
