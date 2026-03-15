import siLogo from "../assets/responsibility_logo/smartinterviews.png";
import nssLogo from "../assets/responsibility_logo/nss.png";
import smLogo from "../assets/responsibility_logo/socialmedia.png";

export const responsibilities = [
  {
    id: 1,
    role: "DSA Mentor",
    organization: "Smart Interviews",
    date: "Jan 2025 – Jan 2026",
    desc: "Mentored 300+ students in Data Structures and Algorithms, provided structured guidance, improved their problem-solving skills, and helped them strengthen recursion, DP, and graph concepts.",
    skills: ["DSA", "Mentoring", "Problem Solving", "Competitive Programming"],
    logo: siLogo,
    detailsLink: "/certifications/si_diamond.pdf",
    detailsLabel: "Certificate of Mentorship",
    extra: {
      involvement:
        "Led peer learning sessions, guided students in solving real-world DSA problems, and provided feedback on code structure and optimization.",
      designs:
        "Created structured learning paths, slide decks, and example repositories to make concepts accessible.",
      social:
        "Helped increase cohort engagement by 30% through collaborative coding challenges and discussion threads."
    }
  },
  {
    id: 2,
    role: "Organizing Team Member",
    organization: "National Service Scheme, VNRVJIET",
    date: "2024 – Present",
    desc: "Led 5+ social initiatives including Blood Donation Camp, Village Camp, Clay Ganesha, and Fist Full of Rice while managing large-scale event execution and coordination.",
    skills: ["Leadership", "Teamwork", "Event Management"],
    logo: nssLogo,
    extra: {
      involvement:
        "Coordinated logistics, volunteer teams, and stakeholder communication to ensure smooth delivery of community events.",
      designs:
        "Designed event posters, social media flyers, and volunteer guides for higher outreach and participation.",
      social:
        "Increased event attendance by 40% through targeted promotion and engagement campaigns."
    }
  },
  {
    id: 3,
    role: "Head Design Coordinator",
    organization: "Social Media Club, VNRVJIET",
    date: "2024 – Present",
    desc: "Designed 25+ high-engagement posts (50K+ reach) for college events including Graduation Day and Sintillashunz, handled branding and digital content strategy.",
    skills: ["Design", "Branding", "Canva", "Creativity"],
    logo: smLogo,
    extra: {
      involvement:
        "Led the design team, set brand guidelines, and reviewed creative assets for consistency across platforms.",
      designs:
        "Crafted social cards, event posters, and motion graphics to boost event visibility.",
      social:
        "Improved social engagement by 35% and grew followers through consistent visual storytelling."
    }
  }
];
