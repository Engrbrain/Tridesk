import { Schema, model } from 'mongoose';

const OrganizationSchema = new Schema (
    {
        orgcode: { type: String, required: true },
        orgname: { type: String, required: true },
        orgvisionstatement: String ,
        orgmissionstatement: String ,
        incorporationdate: { type:Date, required: true },
        headofficeaddress: { 
            streetnumber: String,
            address1: String,
            address2: String,
            address3: String,
            city_town: String,
            county: String,
            state_province: String,
            country: String,
            postalcode: String
        },
        telephone: [{ 
            phonenumber: String,
            phonenumbertype: String,
            phoneContactPerson: String
         }],
         email: [{ 
            emailaddress: String,
            emaildescription: String
         }],
         LogoPath: { type: String, required: true}
    },
    {
        timestamps: true
    }
);

export default model('Organization', OrganizationSchema)