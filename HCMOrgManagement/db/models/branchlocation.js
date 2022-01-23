import { Schema, model } from 'mongoose';

const BranchLocationSchema = new Schema (
    {
        branchcode: { type: String, required: true },
        branchname: { type: String, required: true },
        branchaddress: { 
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
         businessunit: {type: Schema.Types.ObjectId, ref: 'BusinessUnit', required: true}
    },
    {
        timestamps: true
    }
);

export default model('BranchLocation', BranchLocationSchema)