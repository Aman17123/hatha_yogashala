/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["http://localhost:3000"],
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },
  experimental: {
    cpus: 2,
  },
  async redirects() {
    return [
      // About & Guides
      { source: "/about/goa", destination: "/goa-travel-guide", permanent: true },
      { source: "/goa", destination: "/goa-travel-guide", permanent: true },
      { source: "/certification", destination: "/yoga-alliance-certification", permanent: true },
      { source: "/accommodation", destination: "/accommodation-goa", permanent: true },

      // Yoga TTC hub (consolidate duplicate)
      { source: "/yoga-teacher-training", destination: "/yoga-teacher-training-goa", permanent: true },
      { source: "/courses", destination: "/yoga-teacher-training-goa", permanent: true },

      // Retreats
      { source: "/retreats", destination: "/yoga-retreats-goa", permanent: true },
      {
        source: "/retreats/5-day-awaken-and-align-retreat-goa",
        destination: "/retreats/5-day-awaken-and-align-yoga-retreat-goa",
        permanent: true,
      },
      {
        source: "/retreats/yoga-festivals-in-goa",
        destination: "/retreats/yoga-festivals-goa",
        permanent: true,
      },

      // Holidays
      { source: "/holidays", destination: "/yoga-holidays-goa", permanent: true },

      // Online Pranayama Hub & Courses
      { source: "/pranayama", destination: "/online-pranayama", permanent: true },
      {
        source: "/pranayama/pre-pranayama-foundation",
        destination: "/online-pranayama/pre-pranayama-foundation-course",
        permanent: true,
      },
      {
        source: "/pranayama/beginner-pranayama",
        destination: "/online-pranayama/beginner-pranayama-course",
        permanent: true,
      },
      {
        source: "/pranayama/intermediate-pranayama",
        destination: "/online-pranayama/intermediate-pranayama-course",
        permanent: true,
      },
      {
        source: "/pranayama/advanced-pranayama",
        destination: "/online-pranayama/advanced-pranayama-course",
        permanent: true,
      },
      {
        source: "/pranayama/stress-relief-course",
        destination: "/online-pranayama/stress-relief-course",
        permanent: true,
      },
      {
        source: "/pranayama/daily-pranayama-subscription",
        destination: "/online-pranayama/daily-pranayama-subscription",
        permanent: true,
      },
      {
        source: "/pranayama/online-yoga-meditation",
        destination: "/online-pranayama/yoga-meditation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
