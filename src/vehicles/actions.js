import {

    CREATE_VEHICLE,
   
    RETRIEVE_VEHICLES,
   
    UPDATE_VEHICLE,
   
    DELETE_VEHICLE,
   
   } from "./actionTypes";
   
   import VehiclesService from "./vehiclesService";
   
   export const createVehicle =
   
    (name, company, purchasedate) => async (dispatch) => {
   
      try {
   
        const res = await VehiclesService.create({
   
          name,
   
          company,
   
          purchasedate,
   
        });
   
        dispatch({
   
          type: CREATE_VEHICLE,
   
          payload: res.data,
   
        });
   
        return Promise.resolve(res.data);
   
      } catch (err) {
   
        return Promise.reject(err);
   
      }
   
    };
   
   export const retrieveVehicles = () => async (dispatch) => {
   
    try {
   
      const res = await VehiclesService.getAll();
   
      dispatch({
   
        type: RETRIEVE_VEHICLES,
   
        payload: res.data,
   
      });
   
    } catch (err) {
   
      console.log(err);
   
    }
   
   };
   
   export const updateVehicle = (id, data) => async (dispatch) => {
   
    try {
   
      const res = await VehiclesService.update(id, data);
   
      dispatch({
   
        type: UPDATE_VEHICLE,
   
        payload: data,
   
      });
   
      return Promise.resolve(res.data);
   
    } catch (err) {
   
      return Promise.reject(err);
   
    }
   
   };
   
   export const deleteVehicle = (id) => async (dispatch) => {
   
    try {
   
      await VehiclesService.delete(id);
   
      dispatch({
   
        type: DELETE_VEHICLE,
   
        payload: { id },
   
      });
   
    } catch (err) {
   
      console.log(err);
   
    }
   
   };