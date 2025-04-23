// index.js
AppRegistry.registerComponent('appName', () => App);



// App.js
const PRODUCTS = [
    { category: '水果', price: '￥1', name: 'PingGuo' },
];

export default function App() {
    return (
        <SafeAreaView style={{ marginHorizontal: 30 }}>
            <ProductTable products={PRODUCTS} />
        </SafeAreaView>
    );
}

// ProductTable.js
import Category from './Category';
import Product from './Product';

export default function ProductTable({ products }) {
    return (
        <View>
            <Category category={products[i].category}></Category>
  // ...
            <Product product={products[i]} ></Product>
  // ...
        </View>
    )
    // ...
}

// Category.js
export default function Category({ category }) { }

// ProductTable.js
export default function Product({ product }) { }