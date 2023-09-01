const mongoose = require('mongoose');

// Define the schema
const contactSchema = mongoose.Schema({
  // user_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'User',
  //  },
  employer_name: String,
  employer_logo: String,
  employer_website: String,
  employer_company_type: String,
  job_publisher: String,
  job_employment_type: String,
  job_title: String,
  job_apply_link: String,
  job_description: String,
job_city: String,
  job_state: String,
  job_country: String,
  job_benefits: [String],
  job_google_link: String,
  job_required_experience: {
    required_experience_in_months: Number,
  },
  job_required_skills: [String],
  job_required_education: {
    high_school: Boolean,

  },
  job_highlights: {
    Qualifications: [String],
    Responsibilities: [String],
    Benefits: [String],
  }
});

module.exports = mongoose.model('Job', contactSchema);


