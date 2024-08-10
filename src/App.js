import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Box, Typography } from '@mui/material';
import ProductList from './components/ProductList';
import Filters from './components/Filter';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const products = [
      { id: 1, name: 'Laptop', price: 800, category: 'Electronics' },
      { id: 2, name: 'T-Shirt', price: 20, category: 'Clothing' },
    ];
    dispatch({ type: 'SET_PRODUCTS', payload: products });
  }, [dispatch]);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          E-ticaret Mağazası
        </Typography>
        <Filters />
        <ProductList />
      </Box>
    </Container>
  );
};

export default App;
