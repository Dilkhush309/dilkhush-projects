import React, { Component } from "react";

import { connect } from "react-redux";

import { updateVehicle } from "../vehicles/actions";

import { Redirect } from "react-router-dom";

import VehicleService from "../vehicles/vehiclesService";

class EditVehicle extends Component {

 constructor(props) {

   super(props);

   this.onChangeName = this.onChangeName.bind(this);

   this.onChangeCompany = this.onChangeCompany.bind(this);

   this.onChangePurchasedate = this.onChangePurchasedate.bind(this);

   this.saveVehicle = this.saveVehicle.bind(this);

   this.state = {

     currentPet: {

       name: "",

       company: "",

       purchasedate: "",

     },

     redirect: false,

   };

 }

 componentDidMount() {

   this.getVehicle(window.location.pathname.replace("/edit-vehicle/", ""));

 }

 onChangeName(e) {

   const name = e.target.value;

   this.setState(function (prevState) {

     return {

       currentVehicle: {

         ...prevState.currentVehicle,

         name: name,

       },

     };

   });

 }

 onChangeCompany(e) {

   const company = e.target.value;

   this.setState(function (prevState) {

     return {

       currentVehicle: {

         ...prevState.currentVehicle,

         company: company,

       },

     };

   });

 }

 onChangePurchasedate(e) {

   const purchasedate = e.target.value;

   this.setState(function (prevState) {

     return {

        currentVehicle: {

         ...prevState.currentVehicle,

         purchasedate: purchasedate,

       },

     };

   });

 }

 getVehicle(id) {

   VehicleService.get(id).then((response) => {

     this.setState({

       currentVehicle: response.data,

     });

   });

 }

 saveVehicle() {

   this.props

     .updateVehicle(this.state.currentVehicle.id, this.state.currentVehicle)

     .then(() => {

       this.setState({

         redirect: true,

       });

     });

 }

 render() {

   const { redirect, currentVehicle } = this.state;

   if (redirect) {

     return <Redirect to="/" />;

   }

   return (

     <div className="submit-form">

       <div>

         <div className="form-group">

           <label htmlFor="name">Name</label>

           <input

             type="text"

             className="form-control"

             id="name"

             required

             value={currentVehicle.name}

             onChange={this.onChangeName}

             name="name"

           />

         </div>

         <div className="form-group">

           <label htmlFor="company">Company</label>

           <input

             type="text"

             className="form-control"

             id="company"

             required

             value={currentVehicle.company}

             onChange={this.onChangeCompany}

             name="company"

           />

         </div>

         <div className="form-group">

           <label htmlFor="purchasedate">Purchasedate</label>

           <input

             type="text"

             className="form-control"

             id="purchasedate"

             required

             value={currentVehicle.purchasedate}

             onChange={this.onChangePurchasedate}

             name="purchasedate"

           />

         </div>

         <button onClick={this.saveVehicle} className="btn btn-success">

           Submit

         </button>

       </div>

     </div>

   );

 }

}

export default connect(null, { updateVehicle })(EditVehicle);