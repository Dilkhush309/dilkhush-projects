import { configureStore } from "@reduxjs/toolkit";

import vehicleReducer from "./vehicles/reducers";

export default configureStore({

 reducer: {

    vehicles: vehicleReducer,

 },

});