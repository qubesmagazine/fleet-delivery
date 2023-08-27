const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  query: String,
  company_id: String,
  company_name: String,
  company_logo: String,
  company_number: Number,
  company_company_type: String,
  company_employment_type: String,
  company_title: String,
  company_description: String,
  company_city: String,
  company_state: String,
  company_country: String,
  company_google_link: String,
  company_highlights: {
    Qualifications: [String],
    Responsibilities: [String],
    Benefits: [String],
  },
});

module.exports = mongoose.model("Truck", contactSchema);