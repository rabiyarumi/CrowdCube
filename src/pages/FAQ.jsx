import React from "react";

const FAQ = () => {

  const faqs = [
    {
      "question": "What is Crowdcube?",
      "answer": "Crowdcube is a crowdfunding platform that allows individuals, startups, and organizations to raise funds for their projects, ideas, or causes by connecting with backers who contribute financially."
    },
    {
      "question": "How do I start a campaign?",
      "answer": "To start a campaign, sign up for an account, click on 'Create Campaign,' and fill out the details about your project, funding goal, deadline, and rewards for backers."
    },
    {
      "question": "What types of projects can be funded?",
      "answer": "You can raise funds for various projects, including personal causes, creative endeavors (like films, music, or apps), startups, social initiatives, and more."
    },
    {
      "question": "How do backers contribute to a campaign?",
      "answer": "Backers can browse campaigns, choose the ones they want to support, and contribute securely through our payment gateways like Stripe or PayPal."
    },
    {
      "question": "What happens if a campaign doesn’t reach its goal?",
      "answer": "For 'All-or-Nothing' campaigns, funds are only collected if the funding goal is met. If the goal is not reached, backers won’t be charged. 'Keep-What-You-Raise' campaigns allow creators to keep the funds regardless of reaching the goal."
    },
    {
      "question": "Is my payment information secure?",
      "answer": "Yes, we use secure payment gateways and encryption to ensure all financial transactions are safe and protected."
    },
    {
      "question": "Can I edit my campaign after it’s live?",
      "answer": "You can edit certain aspects of your campaign, such as updates and reward tiers, but key details like the funding goal and deadline cannot be changed once the campaign is live."
    },
    {
      "question": "How does Crowdcube make money?",
      "answer": "Crowdcube charges a small percentage as a platform fee on successfully funded campaigns. This helps us maintain and improve the platform."
    },
    {
      "question": "Are there any fees for backers?",
      "answer": "No, there are no additional fees for backers. The amount they pledge is the amount that goes toward the campaign."
    },
    {
      "question": "How can I contact customer support?",
      "answer": "You can reach out to our customer support team by clicking on the 'Contact Us' link at the bottom of the page or emailing support@crowdcube.com."
    }
  ]
  return (
    <div className=" flex flex-col items-center justify-center w-screen gap-3 my-10 md:my-16">
      <h2 className="text-4xl font-bold mb-4">
        Inspiring <span className="text-primary ">Success Stories</span>
      </h2>

      {
        faqs.map((faq, idx) => 
          <div key={idx} className="collapse collapse-arrow bg-base-200 md:w-[80%] lg:w-[70%] mx-auto">
        <input type="radio" name="my-accordion-2"  className="text-primary"/>
        <div className="collapse-title text-xl font-medium">
         {faq.question}
        </div>
        <div className="collapse-content">
          <p>{faq.answer}</p>
        </div>
      </div>
        )
      }

      
    </div>
  );
};

export default FAQ;
