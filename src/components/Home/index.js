// Import necessary React modules

import React, { useState } from 'react';
import "./index.css"

function Home() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');

  // Function to handle job submission
  const handleJobSubmission = () => {
    // Replace this part with actual code to post the job to the backend server
    // For demonstration purposes, we'll simply log the data for now.
    console.log("Job Title:", jobTitle);
    console.log("Job Description:", jobDescription);
    console.log("Job Location:", jobLocation);
  };

  return (
    <div className="job-posting-page">
      <h2>Post a Job</h2>
      <form>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Job Description:</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Job Location:</label>
          <input
            type="text"
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleJobSubmission}>
          Submit Job
        </button>
      </form>
    </div>
  );
}

export default Home;