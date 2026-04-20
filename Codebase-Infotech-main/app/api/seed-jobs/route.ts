import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";

const seedJobs = [
  {
    title: "Android Developer (Fresher)",
    location: "Surat",
    type: "Full-time",
    experience: "Fresher",
    summary:
      "We are looking for an enthusiastic and motivated Android Developer (Fresher) eager to build a career in mobile application development. Strong foundational knowledge of Java and Kotlin, Android basics, and a willingness to learn modern Android development practices required.",
    responsibilities: [
      "Assist in developing Android applications using Java and Kotlin.",
      "Write clean and maintainable code under guidance.",
      "Support API integration and data handling.",
      "Fix minor bugs and improve app performance.",
      "Participate in testing applications across devices.",
      "Collaborate with designers and developers during implementation.",
      "Follow coding standards and version control practices.",
      "Learn and apply modern Android development techniques.",
    ],
    requiredSkills: [
      "Basic knowledge of Java and Kotlin programming.",
      "Understanding of Android fundamentals (Activities, Fragments, Lifecycle).",
      "Familiarity with Android Studio and SDK.",
      "Basic understanding of API integration.",
      "Knowledge of Git fundamentals (preferred).",
      "Problem-solving mindset and eagerness to learn.",
      "Strong logical thinking and debugging ability.",
    ],
    preferredSkills: [
      "Academic or personal Android project experience.",
      "Familiarity with UI design implementation.",
      "Understanding of MVVM architecture basics.",
      "Exposure to Firebase or REST APIs.",
    ],
    education: "Bachelor's degree in Computer Science, IT, Engineering, or related field.",
    offers: [
      "Hands-on exposure to real Android projects.",
      "Mentorship from experienced developers.",
      "Learning opportunities in modern Android technologies.",
      "Supportive and growth-focused work environment.",
      "Career development opportunities.",
    ],
    isActive: true,
  },
  {
    title: "Android Developer (1–6 Years Experience)",
    location: "Surat",
    type: "Full-time",
    experience: "1–6 Years",
    summary:
      "We are hiring a passionate Android Developer with 1–6 years of hands-on experience. Strong knowledge of Kotlin, MVVM architecture, Ads integration, event tracking, remote configuration, and Git-based version control required.",
    responsibilities: [
      "Design, develop, and maintain Android applications using Kotlin.",
      "Implement clean, scalable code following MVVM architecture.",
      "Integrate REST APIs and handle data using ViewModel, LiveData, and/or Flow.",
      "Work on Ads placement and integration (Banner, Interstitial, Rewarded Ads).",
      "Implement event tracking for user actions and analytics.",
      "Ensure smooth app performance, stability, and memory optimization.",
      "Identify, debug, and fix bugs, crashes, and ANR issues.",
      "Collaborate with cross-functional teams to ship new features.",
      "Maintain proper Git usage for each project.",
      "Support app publishing and post-release maintenance.",
    ],
    requiredSkills: [
      "Strong understanding of Android SDK.",
      "Hands-on experience with Kotlin.",
      "Practical knowledge of MVVM architecture.",
      "Ads integration (Google AdMob or similar).",
      "Event integration (Firebase Analytics or similar).",
      "Remote Config integration.",
      "API integration using Retrofit / Volley.",
      "Local data handling using Room / SharedPreferences.",
      "Experience using Git for version control.",
    ],
    preferredSkills: [
      "Experience with Coroutines.",
      "Knowledge of Dependency Injection (Hilt / Dagger).",
      "Familiarity with Crashlytics and performance monitoring.",
      "Understanding of push notifications (FCM).",
    ],
    education: "Bachelor's degree in Computer Science, Engineering, or a related field.",
    offers: [
      "Opportunity to work on live and scalable Android applications.",
      "Learning and growth in modern Android technologies.",
      "Collaborative and developer-friendly work environment.",
      "Career growth opportunities based on performance.",
    ],
    isActive: true,
  },
  {
    title: "React Native Developer",
    location: "Surat",
    type: "Full-time",
    experience: "2+ Years",
    summary:
      "We are looking for a skilled React Native Developer to develop and maintain high-quality cross-platform mobile applications. You'll work closely with UI/UX designers, backend developers, and QA teams to deliver seamless app features.",
    responsibilities: [
      "Develop and maintain cross-platform mobile applications using React Native.",
      "Write clean, efficient, and reusable code following best practices.",
      "Integrate mobile applications with RESTful APIs and third-party libraries.",
      "Collaborate with UI/UX designers to ensure technical feasibility.",
      "Debug and fix bugs, performance issues, and ensure app stability across devices.",
      "Participate in code reviews and contribute to improving coding standards.",
    ],
    requiredSkills: [
      "2+ years of experience in React Native app development.",
      "Strong proficiency in JavaScript (ES6+) and React concepts.",
      "Experience with state management (Redux / Context API / MobX).",
      "Good understanding of Android Studio and Xcode.",
      "Familiarity with Firebase, Push Notifications, App Store / Play Store deployment.",
      "Understanding of Git / GitHub version control.",
    ],
    preferredSkills: [],
    education: "Bachelor's degree in Computer Science, IT, or a related field.",
    offers: [
      "Work on real-world, cross-platform mobile applications.",
      "Collaborative and growth-focused work culture.",
      "Career development opportunities.",
    ],
    isActive: true,
  },
  {
    title: "UI/UX Designer",
    location: "Surat",
    type: "Full-time",
    experience: "3+ Years",
    summary:
      "We are hiring a professional UI/UX Designer with minimum 3 years of hands-on experience delivering high-quality design solutions for real client projects. Detail-oriented, creative, and capable of independently handling end-to-end UI/UX responsibilities.",
    responsibilities: [
      "Design user-friendly and visually appealing UI/UX for mobile applications.",
      "Create modern and responsive web app interfaces.",
      "Develop website designs aligned with client requirements and brand identity.",
      "Understand client briefs and convert them into effective design solutions.",
      "Maintain design consistency across typography, colors, and layouts.",
      "Present design concepts clearly to clients and internal teams.",
    ],
    requiredSkills: [
      "Strong expertise in UI/UX design principles.",
      "Mobile app and web application interface design.",
      "User-centered design thinking.",
      "Wireframing, prototyping, and usability optimization.",
      "Experience handling client-based projects independently.",
      "Fluent English communication — mandatory.",
    ],
    preferredSkills: ["Adobe Photoshop", "Figma", "Adobe XD", "Sketch"],
    education: "Minimum 3 years of proven UI/UX design experience with a strong portfolio.",
    offers: [
      "Work on real, client-facing design projects.",
      "Creative and collaborative work environment.",
      "Career growth based on performance.",
    ],
    isActive: true,
  },
  {
    title: "Social Media Manager",
    location: "Surat",
    type: "Full-time",
    experience: "1+ Years",
    summary:
      "We are looking for a highly creative Social Media Manager who understands how to create engaging, high-impact content. Manage all social media platforms, build brand presence, and produce content that drives reach, engagement, and app installs.",
    responsibilities: [
      "Plan and execute monthly content calendars.",
      "Create engaging posts, reels, shorts, stories, and community-focused content.",
      "Write powerful hooks, captions, and storytelling-style scripts.",
      "Monitor trending topics and convert them into relevant content.",
      "Track performance metrics: reach, shares, saves, engagement rate.",
      "Prepare weekly and monthly performance reports.",
      "Create campaigns for app feature launches and updates.",
    ],
    requiredSkills: [
      "Strong understanding of social media content dynamics.",
      "Experience in creating reels, shorts, and trending video formats.",
      "Excellent copywriting skills and high-engagement hooks.",
      "Basic video editing and motion graphics understanding.",
      "Creativity with fast execution ability.",
    ],
    preferredSkills: [
      "Experience creating viral or high-reach content.",
      "Working with mobile apps or tech products.",
    ],
    education: "Any degree; relevant experience and portfolio required.",
    offers: [
      "Creative and dynamic work environment.",
      "Opportunity to manage brand presence at scale.",
      "Performance-based growth and recognition.",
    ],
    isActive: true,
  },
];

export async function GET() {
  try {
    await connectDB();
    await Job.deleteMany({}); // clear if any test stuff exists
    await Job.insertMany(seedJobs);
    return NextResponse.json({ message: "Job seeded successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to seed" }, { status: 500 });
  }
}
