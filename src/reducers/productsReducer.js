const initialState = {
  items: [],
  filteredItems: [],
  filters: {
    priceRange: [0, 1000],
    categories: [],
    sortBy: '', 
  },
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case 'FILTER_PRODUCTS':
      return {
        ...state,
        filteredItems: applyFilters(state.items, state.filters),
      };
    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.payload,
        filteredItems: applyFilters(state.items, action.payload),
      };
    default:
      return state;
  }
};

const applyFilters = (items, filters) => {
  let filteredItems = items.filter(item => {
    const meetsPriceRange = item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    const meetsCategory = filters.categories.length === 0 || filters.categories.includes(item.category);
    return meetsPriceRange && meetsCategory;
  });

  // Sıralama uygulaması
  if (filters.sortBy === 'priceAsc') {
    filteredItems = filteredItems.sort((a, b) => a.price - b.price);
  } else if (filters.sortBy === 'priceDesc') {
    filteredItems = filteredItems.sort((a, b) => b.price - a.price);
  } else if (filters.sortBy === 'nameAsc') {
    filteredItems = filteredItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filters.sortBy === 'nameDesc') {
    filteredItems = filteredItems.sort((a, b) => b.name.localeCompare(a.name));
  }

  return filteredItems;
};

export default productsReducer;
