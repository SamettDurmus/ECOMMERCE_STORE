import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Slider, Typography, Checkbox, FormControlLabel, Select, MenuItem, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Filters = () => {
  const dispatch = useDispatch();
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    dispatch({
      type: 'SET_FILTERS',
      payload: { priceRange: newValue, categories, sortBy }
    });
  };

  const handleCategoryChange = (event) => {
    const newCategories = event.target.checked 
      ? [...categories, event.target.name] 
      : categories.filter(cat => cat !== event.target.name);

    setCategories(newCategories);
    dispatch({
      type: 'SET_FILTERS',
      payload: { priceRange, categories: newCategories, sortBy }
    });
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    dispatch({
      type: 'SET_FILTERS',
      payload: { priceRange, categories, sortBy: event.target.value }
    });
  };

  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Fiyat Aralığı</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Kategoriler</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={<Checkbox name="Electronics" onChange={handleCategoryChange} />}
            label="Elektronik"
          />
          <FormControlLabel
            control={<Checkbox name="Clothing" onChange={handleCategoryChange} />}
            label="Giyim"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Sırala</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Select value={sortBy} onChange={handleSortChange} fullWidth>
            <MenuItem value="priceAsc">Fiyat: Düşükten Yükseğe</MenuItem>
            <MenuItem value="priceDesc">Fiyat: Yüksekten Düşüğe</MenuItem>
            <MenuItem value="nameAsc">İsim: A-Z</MenuItem>
            <MenuItem value="nameDesc">İsim: Z-A</MenuItem>
          </Select>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Filters;
