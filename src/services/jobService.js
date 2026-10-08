export async function fetchJobs() {
  try {
    const response = await fetch(
      "https://www.arbeitnow.com/api/job-board-api"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const data = await response.json();

    return data.data.map((job) => ({
      id: job.slug,
      title: job.title,
      company: job.company_name,
      location: job.location || "Remote",
      type: job.job_types?.[0] || "Full Time",
      description: job.description
        ? job.description.replace(/<[^>]*>/g, "").slice(0, 180) + "..."
        : "No description available.",
      skills: job.tags || [],
    }));
  } catch (error) {
    console.error("Job API Error:", error);
    return [];
  }
}