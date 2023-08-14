const mongoose = require("mongoose");

const  contactSchema = mongoose.Schema({
  query: String,
  company_name: String,
  company_logo: String,
  company_id: Number,
  company_employment_type: String,
  company_description: String,
  company_city: String,
  company_state: String,
  company_country: String,
  company_google_link: String,
  company_highlights: {
    Qualifications: [String],
    Responsibilities: [String]
  }
})

module.exports = mongoose.model("Contact", contactSchema);
