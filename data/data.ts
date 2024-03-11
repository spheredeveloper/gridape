// Import necessary types/interfaces from the specified path
import { FAQItem, WaitlistLink } from "@/interfaces/types"

// Define an array of WaitlistLink objects for waitlist links
export const waitlistLinks: WaitlistLink[] = [
  { name: "Why Gridape", link: "#description", id: "description" },
  { name: "FAQ", link: "#faq", id: "faq" },
  // { name: "Terms & Conditions", link: "#", id: "t&c" },
]

// Define an array of WaitlistLink objects for footer social links
export const footerSocialLinks: WaitlistLink[] = [
  { name: "/svg/facebook.svg", link: "https://www.facebook.com/gridapehq", id: "" },
  { name: "/svg/x.svg", link: "https://twitter.com/gridapehq", id: "" },
  { name: "/svg/linkedin.svg", link: "https://www.linkedin.com/company/gridapehq", id: "" },
  { name: "/svg/instagram.svg", link: "https://www.instagram.com/gridapehq", id: "" },
]

// Define an array of FAQItem objects for FAQ data
export const faqData: FAQItem[] = [
  {
    title: 'How can Gridape benefit my business?',
    content: 'Gridape simplifies the email marketing process, allowing you to craft engaging emails, create stunning landing pages, and connect with your audience effectively. The platform\'s AI features provide intelligent insights, making your marketing efforts more impactful and personalized.',
  },
  {
    title: 'What makes Gridape unique?',
    content: 'Gridape stands out with its combination of intuitive design tools, AI-powered assistance, and future-ready features. Whether you\'re a seasoned marketer or just starting, Gridape offers a seamless and enjoyable experience, ensuring that your email campaigns are not only effective but also creatively captivating.',
  },
  {
    title: 'How does the waitlist work?',
    content: 'Joining the Gridape waitlist is simple. Just provide your email, and you\'ll be among the first to experience the power of Gridape when it becomes available. Waitlist members receive exclusive updates, early access opportunities, and insider information about new features.',
  },
  {
    title: 'When will Gridape be available?',
    content: 'We\'re working hard to bring Gridape to you as soon as possible. By joining the waitlist, you\'ll be among the first to know about our official launch date and gain early access privileges.'
  },
  {
    title: 'Is there a cost to join the waitlist?',
    content: 'No, joining the Gridape waitlist is completely free! As a member, you\'ll enjoy exclusive benefits and be part of our community before the official launch.'
  },
  {
    title: 'Can I provide feedback during the waitlist period?',
    content: 'Absolutely! We value your input. As a waitlist member, you\'ll have the opportunity to provide feedback, share your thoughts, and help shape the future of Gridape. Your insights are crucial to making Gridape the best it can be.'
  },
  {
    title: 'How can I contact Gridape support?',
    content: 'If you have any questions or need assistance, feel free to reach out to our support team at support@Gridape.com. We\'re here to help you every step of the way.'
  },
];
