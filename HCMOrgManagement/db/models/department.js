import { Schema, model } from 'mongoose';

const DepartmentSchema = new Schema (
    {
        deptcode: { type: String, required: true },
        deptname: { type: String, required: true },
        deptvisionstatement: String ,
        deptmissionstatement: String,
        telephone: [{ 
            phonenumber: String,
            phonenumbertype: String,
            phoneContactPerson: String
         }],
         email: [{ 
            emailaddress: String,
            emaildescription: String
         }],
         businessunit: {type: Schema.Types.ObjectId, ref: 'BusinessUnit', required: true},
         headofdepartment: {type: Schema.Types.ObjectId, ref: 'EmployeeMasterData', required: true}
    },
    {
        timestamps: true
    }
);

export default model('Department', DepartmentSchema)