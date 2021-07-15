import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', price: 6, title: 'My first book', description: 'The first book i ever used' },
  { id: 'p2', price: 6, title: 'My second book', description: 'The second book i ever used' }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map((item) => {
            return (
              <ProductItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            )
          })
        }
      </ul>
    </section>
  );
};

export default Products;
