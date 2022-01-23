import { Schema, model } from 'mongoose';

const BusinessFunctionSchema = new Schema (
    {
        busfunctioncode: { type: String, required: true },
        busfunctionname: { type: String, required: true },
        busfunctionreq: { 
            funcdescription: String,
            funcresponsibility: String,
            educationreq: String,
            personalityreq: String,
            experiencereq: String
        },
        skill: [{ 
            skill: { type: Schema.Types.ObjectId, ref: 'Skill'},
         }],
         organization: {type: Schema.Types.ObjectId, ref: 'Organization', required: true},
         criticalityType: String
    },
    {
        timestamps: true
    }
);

export default model('BusinessFunction', BusinessFunctionSchema)