import React from 'react'
import Header from '../Header';
import Footer from '../Footer';

let Contact=()=>{
    return(
        <div>
            <Header/>
            <br/>
            <div className="container">
                
                <h1>How can we help you</h1>

                    <div className="form-row">
                        
                        <div className="form-group required col-md-4">
                            <label className="control-label d-flex justify-content-start">First Name</label>
                            <input className="form-control _requiredInputs _input onlyStr" name="firstName" id="_firstName" />
                        </div>
                        <div className="form-group col-md-4">
                            <label className="control-label d-flex justify-content-start">Middle Name</label>
                            <input className="form-control _requiredInputs _input onlyStr" name="middleName" id="_middleName" />
                        </div>
                        <div className="form-group required col-md-4">
                            <label className="control-label d-flex justify-content-start">Last Name</label>
                            <input className="form-control _requiredInputs _input onlyStr" name="lastName" id="_lastName" />
                        </div>
                    </div>
                    <div className="form-row">
                        
                        <div className="form-group required col-md-4">
                            <label className="control-label d-flex justify-content-start" id="_depender">Father Name</label>
                            <input className="form-control _requiredInputs _input onlyStr" name="fatherName" id="_fatherName" />
                        </div>
                        <div className="form-group required col-md-4">
                            <label className="control-label d-flex justify-content-start">Occupation</label>
                            <input className="form-control _requiredInputs _input onlyStr" name="occupation" id="_occupation" />
                        </div>
                        <div className="form-group required col-md-4">
                            <label className="control-label d-flex justify-content-start">Designation</label>
                            <input className="form-control _requiredInputs _input onlyStr" name="designation" id="_designation" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group required col-md-6">
                            <label className="control-label d-flex justify-content-start">Email</label>
                            <input className="form-control _requiredInputs _input" name="email" id="_email" />
                        </div>
                        <div className="form-group required col-md-6">
                            <label className="control-label d-flex justify-content-start">CNIC</label>
                            <input className="form-control _requiredInputs _input" type="tel" name="cnic" id="_cnic" placeholder="xxxxx-xxxxxxx-x" />
                        </div>
                    </div>

                    <br/>
                    <h1 className="text-center"><strong>Note!</strong>Its Just a Sample Form</h1>
                    
            </div>
            <Footer/>
        </div>
    )
}
export default Contact;