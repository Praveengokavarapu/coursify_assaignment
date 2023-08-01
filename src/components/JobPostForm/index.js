import React, { useState } from 'react';
import './index.css';

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [jobPosted, setJobPosted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here to handle form submission (e.g., send data to the server)
    console.log('Job Title:', jobTitle);
    console.log('Salary Range:', salaryRange);
    console.log('Job Description:', jobDescription);
    console.log('Skills Required:', skillsRequired);
    console.log('Company Name:', companyName);
    console.log('Company Website:', companyWebsite);
    // Clear form inputs after submission
    setJobTitle('');
    setSalaryRange('');
    setJobDescription('');
    setSkillsRequired('');
    setCompanyName('');
    setCompanyWebsite('');
    setJobPosted(true);
  };

  return (
    <div className="post-job">
        {jobPosted ? ( // Show "Job Posted" message if jobPosted is true
        <div className="job-posted-message">Job Posted!</div>
      ) : (

      
      <form onSubmit={handleSubmit}>
        <h2>Post a Job</h2>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            placeholder="Enter job title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="salaryRange">Salary Range:</label>
          <input
            type="text"
            id="salaryRange"
            name="salaryRange"
            placeholder="Enter salary range"
            value={salaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description:</label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            rows="4"
            placeholder="Enter job description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="skillsRequired">Skills Required:</label>
          <input
            type="text"
            id="skillsRequired"
            name="skillsRequired"
            placeholder="Enter skills required"
            value={skillsRequired}
            onChange={(e) => setSkillsRequired(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyWebsite">Company Website:</label>
          <input
            type="text"
            id="companyWebsite"
            name="companyWebsite"
            placeholder="Enter company website"
            value={companyWebsite}
            onChange={(e) => setCompanyWebsite(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      )}
    </div>
  );
};

export default PostJob;
