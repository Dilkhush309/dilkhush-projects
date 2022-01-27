import React, { Component } from "react";

import { connect } from "react-redux";

import { createVehicle } from "../vehicles/actions";

import { Redirect } from "react-router-dom";

class AddVehicle extends Component {

 constructor(props) {

   super(props);

   this.onChangeName = this.onChangeName.bind(this);

   this.onChangeCompany = this.onChangeCompany.bind(this);

   this.onChangePurchasedate = this.onChangePurchasedate.bind(this);

   this.saveVehicle = this.saveVehicle.bind(this);

   this.state = {

     name: "",

     company: "",

     purchasedate: "",

     redirect: false,

   };

 }

 onChangeName(e) {

   this.setState({

     name: e.target.value,

   });

 }

 onChangeCompany(e) {

   this.setState({

    company: e.target.value,

   });

 }

 onChangePurchasedate(e) {

   this.setState({

    purchasedate: e.target.value,

   });

 }

 saveVehicle() {

   const { name, company, purchasedate } = this.state;

   this.props.createVehicle(name, company, purchasedate).then(() => {

     this.setState({

       redirect: true,

     });

   });

 }

 render() {

   const { redirect } = this.state;

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

             value={this.state.name}

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

             value={this.state.company}

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

             value={this.state.purchasedate}

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

export default connect(null, { createVehicle })(AddVehicle);