// The Two Actions - Split into 4
// 1. Adding the Feature Car Parts
//   1a. Adding the Feature Price
// 2. Removing the Feature Car Parts
//   2a. Removing the Feature Price

const ADD_FEATURE = "ADD_FEATURE";
const ADD_FEATURE_PRICE = "ADD_FEATURE_PRICE";

const REMOVE_FEATURE = "REMOVE_FEATURE";
const REMOVE_FEATURE_PRICE = "REMOVE_FEATURE_PRICE";

// 1. Adding the Feature Car Parts
const addFeature = (feature) => {
  return {
    type: ADD_FEATURE,
    payload: feature,
  };
};

//   1a. Adding the Feature Price
const addFeaturePrice = (feature) => {
  return {
    type: ADD_FEATURE_PRICE,
    payload: feature,
  };
};

// 2. Removing the Feature Car Parts
const removeFeature = (featurePrice) => {
  return {
    type: REMOVE_FEATURE,
    payload: featurePrice,
  };
};

//   2a. Removing the Feature Price
const removeFeaturePrice = (featurePrice) => {
  return {
    type: REMOVE_FEATURE_PRICE,
    payload: featurePrice,
  };
};

export {
  ADD_FEATURE,
  addFeature,
  ADD_FEATURE_PRICE,
  addFeaturePrice,
  REMOVE_FEATURE,
  removeFeature,
  REMOVE_FEATURE_PRICE,
  removeFeaturePrice,
};
