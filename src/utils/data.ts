import { images } from "./images";

export const navbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Our Services",
    link: "/services",
  },
  {
    name: "About us",
    link: "/about-us",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

export const footerLinks = [
  {
    name: "CARE",
    link: "/",
  },
  {
    name: "ABOUT US",
    link: "/about-us",
  },
  {
    name: "FAQS",
    link: "/faqs",
  },
  {
    name: "CONTACT",
    link: "/contact",
  },
];

export const heroSlides = [
  {
    img: images.hero,
    title: "MAIN HEADER 1",
    text: "Lorem ipsum dolor sit amet...",
  },
  {
    img: images.hero_one,
    title: "MAIN HEADER 2",
    text: "Praesent commodo cursus magna...",
  },
  {
    img: images.hero,
    title: "MAIN HEADER 3",
    text: "Integer posuere erat a ante...",
  },
];

export const servicesCards = [
  {
    img: images.card_1,
    title: 'TEXT 1',
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    img: images.card_2,
    title: 'TEXT 2',
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    img: images.card_3,
    title: 'TEXT 3',
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    img: images.card_4,
    title: 'TEXT 4',
    text: 'Lorem ipsum dolor sit amet',
  },
];

export const aboutusImages = [images.card_2, images.card_4, images.card_1, images.card_3,];

export const homeHero = {
  badge: "Trusted Adult Foster Care",
  title: "A Home Where Care Feels Like Family",
  text: "Our foster homes offer warmth, safety, and genuine companionship, creating an environment where adults can live fully, independently, and joyfully every day.",
  cta: "Contact Us",
  chatText: "We would love to hear from you.",
  imageAlt: "Caregiver supporting an elderly resident",
};

export const whoWeAre = {
  title: "Who We Are",
  text: "We provide more than just care. We provide belonging. Our foster homes are safe, nurturing spaces where adults receive the support they need while maintaining independence and dignity.",
  supportingText:
    "Every day, we create an atmosphere of compassion, and family-like connection that helps each resident feel comfortable, respected, and understood.",
  imageAlt: "Caregiver sharing a warm moment with an elderly woman",
};

export const homeValues = [
  {
    title: "Our Vision",
    text: "We strive to create a home where safety, support, and genuine kindness help every resident feel valued, welcomed, and cared for.",
    imageKey: "vision",
  },
  {
    title: "Our Mission",
    text: "Our mission is to offer personalized, compassionate care that empowers adults to live fulfilling lives with dignity and trust.",
    imageKey: "mission",
  },
] as const;

export const homeServices = [
  {
    title: "Personal Care Support",
    description:
      "We assist residents with daily activities such as bathing, dressing, and grooming, ensuring comfort, dignity, and independence in every routine.",
    icon: "heart",
  },
  {
    title: "Medication Management",
    description:
      "Our trained caregivers provide safe medication reminders and coordination, helping residents stay on track with their health and treatment plans.",
    icon: "pill",
  },
  {
    title: "Nutritious Meals & Dining",
    description:
      "Residents enjoy balanced, home-cooked meals tailored to individual dietary needs, served in a warm, family-style setting that encourages connection.",
    icon: "soup",
  },
  {
    title: "Companionship & Social",
    description:
      "We create opportunities for laughter, conversation, and community through engaging activities, outings, and daily companionship.",
    icon: "users",
  },
  {
    title: "Health Monitoring",
    description:
      "Regular wellness checks and communication with healthcare providers help us maintain each resident's physical and emotional well-being.",
    icon: "stethoscope",
  },
  {
    title: "Respite & Short-Term Care",
    description:
      "We offer flexible short-term stays, giving families peace of mind while ensuring their loved ones receive attentive, compassionate support.",
    icon: "home",
  },
] as const;

export const servicesSection = {
  title: "What We Offer",
  text: "Comprehensive personalized care services tailored to each resident's personal and medical needs.",
  linkLabel: "See All",
};

export const testimonialsSection = {
  title: "What are Our Client's Saying",
  text: "Don't just take our word for it. Here's what families have to say about their experience with our care services.",
};

export const testimonials = [
  {
    name: "Michael James",
    role: "Engineer",
    rating: 5,
    image: images.clients,
    imageAlt: "Residents enjoying social time together",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin nunc quis amet pharetra convallis nunc massa nascetur. Neque vulputate egestas mauris arcu sit cras sapien. Libero mattis natoque tristique.",
  },
  {
    name: "Amelia Brooks",
    role: "Family Member",
    rating: 5,
    image: images.old_taker,
    imageAlt: "Caregiver sitting with an elderly resident",
    quote:
      "The team made our family feel heard from the first conversation. Their care is warm, consistent, and deeply respectful of every resident's routines.",
  },
  {
    name: "Daniel Carter",
    role: "Resident's Son",
    rating: 5,
    image: images.hero,
    imageAlt: "Caregiver sharing a warm moment with an elderly woman",
    quote:
      "Lighter House gives us confidence every day. The home feels peaceful, the communication is clear, and the care feels genuinely personal.",
  },
] as const;

export const contactSection = {
  title: "Get in Touch",
  subtitle: "Reach Us On",
  formTitle: "Send Us a Message",
  submitLabel: "Send Message",
};

export const contactFormFields = [
  {
    type: "text",
    placeholder: "Name",
  },
  {
    type: "email",
    placeholder: "Email Address",
  },
] as const;

export const contactMessageField = {
  placeholder: "Tell us how you need our care services",
};

export const contactItems = [
  {
    label: "1750 Global Health Avenue, Washington, DC 20006",
    icon: "map",
  },
  {
    label: "enquiries@lighterhouse.com",
    icon: "mail",
  },
  {
    label: "+234 201 330 9168",
    icon: "message",
  },
] as const;

export const faqs = [
  {
    question: "What is the Lighter House?",
    answer:
      "The National Disability Insurance Scheme (NDIS) is a federally managed and funded scheme that provides support and funding to people with permanent disability, their families and carers. We work with you to figure out a plan that is suitable to your needs and aspirations.",
  },
  {
    question: "What is the purpose of Lighter House?",
    answer:
      "Lighter House aims to support the elderly and people with disabilities to achieve their goals, improve their independence and participate in the community.",
  },
  {
    question: "Who are the Carers?",
    answer:
      "The Carers are the people responsible for taking care of the elderly and the disabled.",
  },
  {
    question: "What is the eligibility criteria for NDIS?",
    answer:
      "You must be over 65 years of age, live in London, or have a permanent and significant disability.",
  },
  {
    question: "What happens if I am under 65 years old?",
    answer:
      "If you are under the age of 65 years, you will not be eligible for Lighter House.",
  },
];
