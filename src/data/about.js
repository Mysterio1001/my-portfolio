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

// type為 education(教育), work(工作), certification(認證)
// 新增物件後i18n也要新增
const oriTimelineData = [
  {
    year: "2018", // 碩士班
    type: "education",
  },
  {
    year: "2023", // 力佳
    type: "work",
  },
  {
    year: "2024", // 漁仁
    type: "work",
  },
  {
    year: "2025", // 前端班
    type: "certification",
  },
  {
    year: "2025", // 昊聲
    type: "work",
    current: true,
  },
];

function setI18N(index) {
  const num = index + 1;
  const obj = {
    title: `about.timeLine.${num}.title`,
    organization: `about.timeLine.${num}.organization`,
    desc: `about.timeLine.${num}.desc`,
  };
  return obj;
}

export const timelineData = oriTimelineData
  .map((item, index) => {
    return { ...item, ...setI18N(index) };
  })
  .reverse();
