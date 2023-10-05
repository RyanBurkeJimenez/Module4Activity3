const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    customerName: {
        type: String,
        required: [true, 'A customer name must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A customer name must have less or equal then 40 characters'],
        minlength: [10, 'A customer name must have more or equal then 10 characters']
     
    },
    phoneNumber:{
        type: Number,
        unique: true,
        trim: true,
        maxlength: [11, 'A phone number must have less or equal than 11 numbers (US numbers, Area code + Country Code can be used)'],
        minlength: [10, 'A phone number must have less or equal than 10 numbers (US numbers, Area code + Number)']
    },
    address: {
        type: String,
        required: [true, 'An address must be entered'],
        unique: true,
        trim: true,
        maxlength: [40, 'An address must have less or equal then 40 characters'],
        minlength: [10, 'An address must have more or equal then 10 characters']
    },
    description: {
        type: String,
        required: false,
        trim: true,
        maxlength: [40, 'A instructor  must have less or equal then 40 characters'],
        minlength: [10, 'A instructor  must have more or equal then 10 characters']
    },
    interest: {
        type: number,
        default: 0,
        min: [0, 'credits must be at or above 0'],
        max: [12, 'credits must be at or below 12']
    },
    loanAmount: {
        type: Number,
        required: [true, 'There must be a loan amount'],
        unique: true,
        trim: true,
        maxlength: [20, 'A loan must be 20 characters or shorter'],
        minlength: [0, 'A loan must be 0 characters or longer']
    },
    loanTermYears:{
        type: Number,
        required: [true, 'There must be a loan term length (in years)'],
        unique: true,
        trim: true,
        minlength:[0,'The minimum term length must be 0 years or longer']
    },
    loanType:{
        type: String,
        unique: true,
        trim: true,
        maxlength: [40, 'Loan type description must be 40 characters or less'],
        minlength: [10, 'Loan type description must be 10 characters or more']
    },
});
const loan = mongoose.model('loan', customerSchema);

module.exports = loan;
//** code  END