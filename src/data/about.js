import { Award, BookOpen, Briefcase } from "lucide-vue-next";

export const bioData = {
  location: "New Taipei City, Taiwan",
  content: [
    { title: "about.bio.1.title", desc: "about.bio.1.desc" },
    { title: "about.bio.2.title", desc: "about.bio.2.desc" },
    { title: "about.bio.3.title", desc: "about.bio.3.desc" },
  ],
  tags: ["Problem Solver", "Continuous Learner", "Beetle Hobbyist"],
};
export const timelineData = [
  {
    year: "2026",
    title: "about.timeLine.1.title",
    organization: "about.timeLine.1.organization",
    desc: "about.timeLine.1.desc",
    type: "work",
    icon: Award,
  },
  {
    year: "2025",
    title: "about.timeLine.2.title",
    organization: "about.timeLine.2.organization",
    desc: "about.timeLine.2.desc",
    type: "certification",
    icon: Briefcase,
  },
  {
    year: "2024",
    title: "about.timeLine.3.desc",
    organization: "about.timeLine.3.organization",
    desc: "about.timeLine.3.desc",
    type: "education",
    icon: Award,
  },
  {
    year: "2021",
    title: "about.timeLine.3.desc",
    organization: "about.timeLine.3.organization",
    desc: "about.timeLine.3.desc",
    type: "education",
    icon: BookOpen,
  },
];
