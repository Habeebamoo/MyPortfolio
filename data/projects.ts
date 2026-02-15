import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "maildrop",
    name: "MailDrop",
    description: "Email Marketing Platform",
    stack: ["React.js", "TypeScript", "Golang", "PostgreSQL"],
    about: "MailDrop is a full-featured email marketing plaform that supports campaigns & subscribers management while allowing users to send bulk emails to their audiences seamlessly. It is built to be user-friendly, scalable and fast.",
    url: "https://maildrop.netlify.app",
    repo: "https://github.com/Habebamoo/MailDrop",
    images: ["/maildrop-img1.png", "/maildrop-img2.png", "/maildrop-img3.png", "/maildrop-img4.png"],
    createdAt: "2025-07-06",
    updatedAt: "2026-01-24"
  }, {
    slug: "flashquiz",
    name: "FlashQuiz",
    description: "Quiz Web App",
    stack: ["React.js", "TypeScript", "Golang", "PostgreSQL"],
    about: "FlashQuiz is a simple Quiz website that enables users to take quizzess accross different topics and categories, while ranking them based on thier progress and stats.",
    url: "https://flashquiz.netlify.app",
    repo: "https://github.com/Habebamoo/Flashquiz",
    images: ["/flash-img1.png", "/flash-img2.png", "/flash-img-3.png", "/flash-img4.png"],
    createdAt: "2025-06-28",
    updatedAt: "2026-10-15"
  }
]