import { ACCORDION } from "@/constants";
import { Collapse } from "react-collapse";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface AccordItem {
  title: string;
  subtitle: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  i: number;
}

const Accordion = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  return (
    <div className="">
      <h4 className="text-secondary regular-20">Ayuda</h4>
      <h3 className="bold-44 max-w-96">Preguntas frecuentes</h3>
      <div className="pt-6 max-w-[800px]">
        {ACCORDION.map((item, index) => (
          <AccordionItem
            key={index}
            open={index === open}
            question={item.question}
            answer={item.answer}
            toggle={() => toggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;

interface AccordionItemProps {
  open: boolean;
  toggle: () => void;
  question: string;
  answer: string;
}

const AccordionItem = ({ open, toggle, question, answer }: AccordionItemProps) => {
  return (
    <div className="pt-3 ">
      <div
        onClick={toggle}
        className={`px-3 py-4 medium-16 flex items-center gap-x-4 cursor-pointer ${open ? "bg-secondary text-white" : ""}`}
      >
        <div className="">{open ? <FaMinus /> : <FaPlus />}</div>
        <h4 className={""}>{question}</h4>
      </div>

      <Collapse isOpened={open}>
        <p className="p-4">{answer}</p>
      </Collapse>
    </div>
  );
};
