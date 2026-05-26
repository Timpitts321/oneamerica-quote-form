import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{textAlign:"center", padding:"80px"}}>
        <h2>✅ Request Submitted</h2>
        <p>We will follow up shortly.</p>
      </div>
    );
  }

  return (
    <div style={{maxWidth:"700px", margin:"auto", fontFamily:"Arial"}}>
      
      <h1>OneAmerica Financial®</h1>
      <h3>Employee Benefits Quote Request</h3>

      <h4>Company Information</h4>
      <input placeholder="Company Name" /><br/>
      <input placeholder="City & State" /><br/>
      <input placeholder="Industry" /><br/>

      <h4>Contact</h4>
      <input placeholder="Name" /><br/>
      <input placeholder="Email" /><br/>

      <h4>Coverage</h4>
      <select>
        <option>Life - Employer Paid</option>
        <option>Life - Voluntary</option>
      </select>

      <br/><br/>

      <button onClick={() => setSubmitted(true)}>
        Submit Request
      </button>

    </div>
  );
}
