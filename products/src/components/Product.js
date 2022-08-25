import { Card } from 'antd';

const { Meta } = Card;

const Product = ({ product }) => (
  <Card
    hoverable
    style={{
      width: 240,
      margin: 20
    }}
  >
    <Meta title={product.title} description={product.description} />
  </Card>
);

export default Product;
