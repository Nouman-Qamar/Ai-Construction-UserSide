// ✅ SHARED JOB DATA SOURCE
// This file contains all job data used across card components and detail pages
// Each job has: id, title, description, category, location, budget, status, bidsCount, details

export const jobsData = [
  {
    id: 1,
    title: "House Painting",
    description: "Complete interior and exterior house painting service.",
    category: "painting",
    status: "open",
    location: { city: "Lahore", address: "123 Main Street, Lahore" },
    budget: { min: 100, max: 200, currency: "USD" },
    bidsCount: 3,
    // 🔥 DETAILED INFORMATION FOR DETAIL PAGE
    details: {
      fullDescription: "We provide professional house painting services for residential properties. Our team uses high-quality paints and modern techniques to ensure a perfect finish both inside and outside your home. Services include wall preparation, priming, and painting with a 5-year quality guarantee.",
      requirements: ["Experience with residential painting", "Own equipment", "Flexible schedule"],
      timeline: "2-3 weeks",
      skills: ["Interior Painting", "Exterior Painting", "Surface Preparation"],
      postedDate: "2024-01-01",
      clientName: "John Smith",
      clientRating: 4.8,
      clientReviews: 24,
    }
  },
  {
    id: 2,
    title: "Electrical Wiring",
    description: "Install new electrical wiring for a residential house.",
    category: "electrical",
    status: "in_progress",
    location: { city: "Karachi", address: "456 Oak Avenue, Karachi" },
    budget: { min: 80, max: 150, currency: "USD" },
    bidsCount: 5,
    // 🔥 DETAILED INFORMATION FOR DETAIL PAGE
    details: {
      fullDescription: "Complete electrical wiring installation for residential properties. Includes installation of main panels, circuit breakers, outlets, and switches. All work complies with local electrical codes and includes 2-year workmanship warranty. Our certified electricians ensure safety and reliability.",
      requirements: ["Licensed electrician certification", "Safety training", "Knowledge of local codes"],
      timeline: "1-2 weeks",
      skills: ["Electrical Wiring", "Circuit Installation", "Safety Compliance"],
      postedDate: "2023-12-28",
      clientName: "Sarah Johnson",
      clientRating: 4.9,
      clientReviews: 31,
    }
  },
];

// ✅ UTILITY FUNCTION TO GET JOB BY ID
export const getJobById = (id) => {
  return jobsData.find(job => job.id === parseInt(id));
};

// ✅ UTILITY FUNCTION TO GET ALL JOBS
export const getAllJobs = () => {
  return jobsData;
};
