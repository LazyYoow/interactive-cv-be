const educationHistory = [
  { 
    id: 1, 
    period: '2023 - Sekarang', 
    institution: 'Universitas Amikom Yogyakarta', 
    major: 'S1 - Teknik Informatika' 
  },
  { 
    id: 2, 
    period: '2020 - 2023', 
    institution: 'SMK Yadika Tanjungsari', 
    major: 'Teknik Komputer dan Jaringan' 
  },
  { 
    id: 3, 
    period: '2017 - 2020', 
    institution: 'SMP Muhammadiyah 3 Yogyakarta', 
    major: '' 
  },
  { 
    id: 4, 
    period: '2011 - 2017', 
    institution: 'SDIT Insan Sejahtera Sumedang', 
    major: '' 
  }
];
const skills = [
  { name: "JavaScript", level: "Advanced" },
  { name: "Vue.js", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "Express.js", level: "Intermediate" }
];
const projects = [
  {
    title: "Portfolio Website",
    description: "Website portofolio pribadi menggunakan Vue.js dan Express.",
    link: "https://github.com/LazyYoow/interactive-cv"
  },
  // Tambahkan project lain di sini
];
module.exports = { educationHistory, skills, projects };
