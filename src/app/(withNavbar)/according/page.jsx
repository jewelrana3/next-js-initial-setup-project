import Accordion from "@/components/Accordion";

const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and used for developing single-page applications.",
  },
  {
    id: 2,
    title: "What is Tailwind CSS?",
    content:
      "Tailwind CSS is a utility-first CSS framework for creating custom designs without writing custom CSS. It provides pre-defined classes for rapid UI development.",
  },
  {
    id: 3,
    title: "What is Next.js?",
    content:
      "Next.js is a React framework for building server-rendered and statically generated web applications. It supports features like file-based routing and API integration.",
  },
];

export default function According() {
  return (
    <div>
      {accordionData.map((item) => (
        <Accordion title={item.title} content={item.content} />
      ))}
    </div>
  );
}
