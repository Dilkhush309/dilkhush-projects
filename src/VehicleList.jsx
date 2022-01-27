import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { retrieveVehicles, deleteVehicle } from "../vehicles/actions";

class VehicleList extends Component {

 componentDidMount() {

   this.props.retrieveVehicles();

 }

 removeVehicle = (id) => {

   this.props.deleteVehicle(id).then(() => {

     this.props.retrieveVehicles();

   });

 };

 render() {

   const { vehicles } = this.props;

   return (

     <div className="list row">

       <div className="col-md-6">

         <h4>Vehicle List</h4>

         <div>

           <Link to="/add-vehicle">

             <button className="button-primary">Add vehicle</button>

           </Link>

         </div>

         <table className="u-full-width">

           <thead>

             <tr>

               <th>Name</th>

               <th>Company</th>

               <th>Purchasedate</th>

               <th>Actions</th>

             </tr>

           </thead>

           <tbody>

             {vehicles &&

               vehicles.map(

                 ({ id, name, company, purchasedate }, i) => (

                   <tr key={i}>

                     <td>{name}</td>

                     <td>{company}</td>

                     <td>{purchasedate}</td>

                     <td>

                       <button onClick={() => this.removeVehicle(id)}>

                         Delete

                       </button>

                       <Link to={`/edit-vehicle/${id}`}>

                         <button>Edit</button>

                       </Link>

                     </td>

                   </tr>

                 )

               )}

           </tbody>

         </table>

       </div>

     </div>

   );

 }

}

const mapStateToProps = (state) => {

 return {

   vehicles: state.vehicles,

 };

};

export default connect(mapStateToProps, { retrieveVehicles, deleteVehicle })(VehicleList);