import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqItems = [{
  question: "Is it suitable for my small company?",
  answer: "Absolutely yes. Discovery One is designed for companies of any size. The modular structure of our services allows you to start with a modest investment (€500 for the Preliminary Analysis) and scale progressively based on the results obtained. HAL 2001's artificial intelligence optimizes the process, significantly reducing costs compared to traditional consulting."
}, {
  question: "How long does the complete process take?",
  answer: "The timing varies based on the complexity of the project and your company's starting point. On average, the complete journey takes between 12 and 24 months. However, we adopt an incremental approach: already after 4-6 months from the beginning of the journey, most companies start developing their first prototypes or proof of concepts."
}, {
  question: "Do I need experience in the space sector?",
  answer: "No, no prior experience in the space sector is necessary."
}, {
  question: "What are the potential ROIs?",
  answer: "ROI varies depending on the type of project, but our dual-use approach (applications both in space and on Earth) significantly accelerates the return on investment. In success cases, we have seen revenue increases of 45% in 3 years, significant funding acquisition, and new market openings. Diversification into a rapidly growing sector like space also offers a considerable competitive advantage."
}, {
  question: "Can I start with just one service and then continue?",
  answer: "Yes, Discovery One's modular structure is designed precisely for this. Many clients start with the Preliminary Analysis to assess their company's potential in the space market and then, based on the results, decide whether to proceed with the next phases. Each phase builds on the previous one, creating a progressive and coherent journey."
}];
const FAQ = () => {
  return <section id="faq" className="section bg-light">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="text-secondary">Frequently Asked Questions</h2>
          <p className="text-xl">Everything you need to know about Discovery One</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white mb-4 rounded-lg overflow-hidden shadow-sm border-none">
                <AccordionTrigger className="px-6 py-4 text-secondary font-semibold hover:bg-gray-50">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
          
          <div className="text-center mt-16 mb-8">
            <p className="text-xl mb-8 my-[55px]">Have more questions? HAL 2001 is always at your disposal</p>
            <button onClick={() => {
              const chatButton = document.querySelector('[data-chat-button]') as HTMLButtonElement;
              if (chatButton) chatButton.click();
            }} className="btn-primary my-[9px] px-[30px] py-[20px]">Talk to HAL 2001</button>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQ;