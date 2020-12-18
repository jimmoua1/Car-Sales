// The "store Reducer" of Car Parts, pulled from App.js to here 

// Going to involve two Actions. Since there are two Component Each of "Adding, and Removing" total 4. 
//                                       In "src/components"

// 1. Adding the Parts 
// 2. Removing the Parts

const App = () => {
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

// Of course Reducer of the Two Actions
  const storeReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FEATURE:
        return state.filter((feature) => feature.id !== action.payload.id);
      case REMOVE_FEATURE:
        return [...state, action.payload];
      default:
        return state;
    }
};
  
export default storeReducer;
  