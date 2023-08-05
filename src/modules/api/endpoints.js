export const JOBS = "jobs";
export const EMPLOYEES = "employees";

const ENDPOINTS = {
  [JOBS]: {
    uri: "/jobs",
    methid: "GET",
  },
  [EMPLOYEES]: {
    uri: "/employees",
    methid: "GET",
  },
};

export default ENDPOINTS;
