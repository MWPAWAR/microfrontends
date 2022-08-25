import { Suspense, lazy, useState } from "react";
import { Layout, Menu } from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styles from './App.module.css';
import Home from './Home';

const Products = lazy(() => import('productsApp/Products'))
const { Header, Content } = Layout;

const items = [{
  key: 'products',
  label: 'Products'
}, {
  key: 'cart',
  label: 'Cart'
}];

const App = () => {
  const [selectedKey, setSelectedKey] = useState();
  const navigate = useNavigate();
  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
    if (key === 'products') navigate('/products');
  };

  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <div className={styles.componentsLayoutDemoFixedLogo} />
          <Menu
            className={styles.navMenu}
            onClick={handleMenuClick}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedKey]}
            items={items}
          />
        </Header>
        <Content className={styles.siteLayout}>
          <div className={styles.siteLayoutBackground}>
            <Suspense fallback={<h3>Loading...</h3>} >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
              </Routes>
            </Suspense>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default App;
