import { model, Schema } from 'mongoose';

const TableRowSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  nameOfSystem: {
    type: String, 
    required: true,
  },
  aim: {
    type: String, 
    default: '-',
  },
  lastOccurrence: {
    type: Data, 
    default: Data.now,
  },

  // system: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "System",
  //   required: true, 
  // },

  created: {
    type: Data,
    defualt: Data.now,
  },

},
{
  timestamps: true,
}
)

export default mongoose.model('TableRow', TableRowSchema)