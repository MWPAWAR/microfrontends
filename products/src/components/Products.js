import faker from 'faker';
import Product from './Product';

const productList = [{
  title: faker.commerce.product(),
  description: faker.lorem.paragraph(),
  imgPath: faker.image.avatar(),
}, {
  title: faker.commerce.product(),
  description: faker.lorem.paragraph(),
  imgPath: faker.image.avatar(),
}, {
  title: faker.commerce.product(),
  description: faker.lorem.paragraph(),
  imgPath: faker.image.avatar(),
}, {
  title: faker.commerce.product(),
  description: faker.lorem.paragraph(),
  imgPath: faker.image.avatar(),
}]

const Products = () => {
  return (
    <div style={{ display: 'flex'}}>
      {productList.map((product) => <Product product={product} />)}
    </div>
  );
};

export default Products;
