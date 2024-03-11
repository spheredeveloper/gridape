// Define the WaitlistLink interface
export interface WaitlistLink {
  name: string;
  link: string;
  id: string;
}

// Define the MobileNavProps interface
export interface MobileNavProps {
  isOpen: boolean;
  handleClick: () => void;
}

// Define the bgStyle interface
export interface bgStyle {
  backgroundImage: string;
  backgroundPosition: string;
  backgroundSize: string;
  backgroundRepeat: string;
}

// Define the FAQItem interface
export interface FAQItem {
  title: string;
  content: string;
}
