import FaqDorpdown from "./FaqDorpdown";

const FAQ = () => {
  return (
    <div className="flex self-start my-7 ml-3 flex-col gap-8">
      <h2 className=" font-bold text-4xl bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent">
        FAQ
      </h2>
      <FaqDorpdown>
        Can education flashcards be used for all age groups?
      </FaqDorpdown>
      <FaqDorpdown>How do education flashcards work?</FaqDorpdown>
      <FaqDorpdown>
        Can education flashcards be used for test preparation?
      </FaqDorpdown>
    </div>
  );
};

export default FAQ;
