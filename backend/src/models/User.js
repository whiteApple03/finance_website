import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    login: {
      type: String,
      reqired: true,
      unique: true,
			index: true,

    },
    passwordHash: {
      type: String,
      reqired: true,
  },

    TableRows: {
      type: Array,
      default: [],
    },
    
    FinancialSystems: {
      type: Array,
      default: [],
    },


},
{
  timestamps: true,
}
);
export default mongoose.model('User', UserSchema)