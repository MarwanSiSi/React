import "./App.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(false);

  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem
          curOpen={curOpen}
          setCurOpen={setCurOpen}
          key={faq.title}
          num={i}
          title={faq.title}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ curOpen, setCurOpen, num, title, children }) {
  const isOpen = curOpen === num;
  const handleClick = () => {
    setCurOpen(isOpen ? null : num);
  };

  return (
    <div onClick={handleClick} className={isOpen ? "item open" : "item"}>
      <p className="number">{num < 9 ? `0${num + 1}` : `${num}`}</p>
      <p className="title">{title}</p>
      <p className="icon ">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box ">{children}</div>}
    </div>
  );
}
