import React from "react";

const FetchData = ({ data }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-5">Registered Student</h1>
      {data.map((value, index) => (
        <div key={index}>
          {/* accordin */}
          <div class="accordion-group accordion-group-bordered">
            <div class="accordion">
              <input type="checkbox" id={index} class="accordion-toggle" />

              <label for={index} class="accordion-title">
                <div className="flex items-center">
                  <img
                    src={`https://api.multiavatar.com/${value.name}.png`}
                    alt="avatar"
                    width={50}
                  />
                  <div className="ml-5"> {value.name}</div>
                </div>
              </label>
              <span class="accordion-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                </svg>
              </span>
              <div class="accordion-content text-content2 bg-blue-50">
                <div class="min-h-0">
                  <p>
                    <span className="font-bold">Email ID :</span> {value.email}
                  </p>
                  <p>
                    <span className="font-bold">Branch :</span> {value.branch}
                  </p>
                  <p>
                    <span className="font-bold">Phone No. :</span>
                    {value.phone}
                  </p>
                  <p>
                    <span className="font-bold">Enrolled Subjects :</span>
                    {value.subject.map((value, index) => (
                      <span key={index} className="mr-2">
                        {value}
                      </span>
                    ))}
                  </p>
                  <p>
                    <span className="font-bold">Password :</span>
                    {value.password}
                  </p>
                  <p>
                    <span className="font-bold">Opt for offline classes :</span>
                    {value.offlineMode ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
