import { Schema, model } from 'mongoose';

const DepartmentSchema = new Schema (
    {
        bucode: { type: String, required: true },
        buname: { type: String, required: true },
        buvisionstatement: String ,
        bumissionstatement: String ,
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
         LogoPath: { type: String, required: true},
         organization: {type: Schema.Types.ObjectId, ref: 'Organization', required: true}
    },
    {
        timestamps: true
    }
);

export default model('BusinessUnit', BusinessUnitSchema)