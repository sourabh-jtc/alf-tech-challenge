import Products from '../models/products.js';

export const getProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const rawProducts = await Products.find({ category: { $ne: category } });

    const products = [
      {
        belowThousandProducts: [],
        equaltoOrAboveThousandProducts: [],
      },
    ];

    for (let i = 0; i < rawProducts.length; i++) {
      let product = rawProducts[i];
      if (product.price < 1000) {
        products[0].belowThousandProducts.push({
          _id: product._id,
          name: product.name,
          price: product.price,
          category: product.category,
          specifications: product.specifications,
        });
      } else {
        products[0].equaltoOrAboveThousandProducts.push({
          _id: product._id,
          name: product.name,
          price: product.price,
          category: product.category,
          specifications: product.specifications,
        });
      }
    }
    res.status(200).send(products);
  } catch (error) {}
};
