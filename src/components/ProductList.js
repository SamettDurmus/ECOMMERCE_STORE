import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const ProductList = () => {
  const products = useSelector(state => state.products.filteredItems);

  return (
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body2">Fiyat: ${product.price}</Typography>
              <Typography variant="body2">Kategori: {product.category}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
