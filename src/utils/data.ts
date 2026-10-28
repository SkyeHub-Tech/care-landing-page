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

// About us Page
export const visionItems = [
  "To provide a home where adults feel safe, supported, and truly valued.",
  "To create a nurturing environment that promotes dignity, independence, and belonging.",
  "To be a trusted community where meaningful relationships and genuine care flourish.",
  "To ensure every individual experiences a sense of home, family, and connection.",
  "To set a standard of compassionate, person-centered care in adult foster living.",
];

export const missionItems = [
  "To deliver high-quality care that respects each person's dignity, preferences, and unique needs.",
  "To maintain a safe, structured, and supportive home environment for all residents.",
  "To encourage independence and personal growth through individualized support.",
  "To build strong connections between residents, caregivers, and the community.",
  "To ensure every resident feels welcomed, cared for, and empowered to live with comfort and confidence.",
];


export const homeHero = {
  eyebrow: "HOME CARE IN BRENTFORD, HOUNSLOW AND WEST LONDON",
  title: "Care at home, from people who take the time to know you",
  text: "We help adults stay safe, comfortable and independent in their own homes. The same small team visits each time, so your mum, dad or loved one sees familiar faces, not a different stranger every week.",
  primaryCta: {
    label: "Arrange a free visit",
    href: "/contact",
  },
  secondaryCta: {
    label: "Call 0330 043 2864",
    href: "tel:03300432864",
  },
  trustNote: "Free in-home assessment • Fully vetted & DBS-checked team",
  badge: "Trusted Adult Foster Care",
  cta: "Arrange a free visit",
  chatText: "We would love to hear from you.",
  imageAlt: "Carer with older person at home",
};

export const introductionSection = {
  id: "introduction",
  title: "Home care that fits around the person, not the rota",
  paragraphs: [
    "Getting older, living with a long-term condition or coming home after a hospital stay can make everyday things harder. Washing, getting dressed, remembering medicines, cooking a proper meal. Small tasks start to feel big.",
    "Lighter House is a home care provider based in Brentford. We send trained, vetted carers into people's homes across West London to help with exactly those tasks. Before anything starts, we sit down with you, find out how you like things done, and write it into a care plan you agree to.",
    "You stay in charge of your day. We make it easier to get through.",
  ],
  cta: {
    label: "About Lighter House",
    href: "/about-us",
  },
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

export const servicesOverviewData = {
  id: "services",
  title: "How we can help at home",
  body: "Care can be a 30-minute morning visit or several visits a day. Most people combine a few of these.",
  cta: {
    label: "See all our services",
    href: "/services",
  },
  services: [
    {
      id: "personal-care",
      title: "Personal care",
      description:
        "Help with washing, bathing, dressing, toileting and getting ready for the day, done with patience and privacy.",
      icon: "personal-care",
      link: "/services/#personal-care",
    },
    {
      id: "medication-support",
      title: "Medication support",
      description:
        "Reminders, prompting and recorded support so medicines are taken safely and on time.",
      icon: "medication",
      link: "/services/#medication-support",
    },
    {
      id: "companionship-care",
      title: "Companionship care",
      description:
        "Conversation, outings, hobbies and company for anyone who spends too much time on their own.",
      icon: "companionship",
      link: "/services/#companionship-care",
    },
    {
      id: "dementia-care",
      title: "Dementia care",
      description:
        "Calm, consistent support for people living with dementia, and practical help for the family around them.",
      icon: "dementia",
      link: "/services/#dementia-care",
    },
    {
      id: "respite-care",
      title: "Respite care",
      description:
        "Short-term cover so family carers can rest, go on holiday or look after their own health.",
      icon: "respite",
      link: "/services/#respite-care",
    },
    {
      id: "hospital-to-home",
      title: "Hospital to home",
      description:
        "Support in the first days and weeks after a hospital stay, when getting home safely matters most.",
      icon: "hospital-to-home",
      link: "/services/#hospital-to-home",
    },
    {
      id: "meals-and-home-help",
      title: "Meals and home help",
      description:
        "Cooking, shopping, laundry and light housework, so home stays comfortable and safe.",
      icon: "meals-and-help",
      link: "/services/#meals-and-home-help",
    },
  ],
};

export const whyLighterHouseData = {
  id: "why-lighter-house",
  title: "What you can expect from us",
  items: [
    {
      title: "The same faces each visit",
      text: "We keep teams small so the people we support get to know their carers, and their carers get to know them. If a regular carer is on leave, we tell you in advance who is covering.",
      icon: "users",
    },
    {
      title: "Carers we would trust with our own families",
      text: "Every carer has an enhanced DBS check, verified references and right-to-work checks before they meet a client. All complete the Care Certificate and ongoing training in areas such as moving and handling, medicines and dementia awareness.",
      icon: "shield",
    },
    {
      title: "A plan you write with us",
      text: "Your care plan records what matters to you: the time you like to get up, how you take your tea, your faith and culture, whether you'd prefer a male or female carer. We review it regularly and whenever your needs change.",
      icon: "clipboard",
    },
    {
      title: "Someone to call",
      text: "You get a direct line to our office team, not a national call centre. Out-of-hours support is available for every client.",
      icon: "phone",
    },
  ],
  link: {
    label: "How we keep care safe",
    href: "/about-us/#quality-and-safety",
  },
  imageAlt: "Carer supporting an older person with warm companionship",
};

export const howCareStartsData = {
  id: "how-it-works",
  title: "How care starts with Lighter House",
  body: "Arranging care often happens at a stressful time. We keep the process simple and move as quickly as you need.",
  steps: [
    {
      step: 1,
      title: "A friendly first conversation",
      text: "Call us or send an enquiry. We'll ask about the person who needs support and what you're hoping for, and give you an idea of cost. It usually takes 15 to 20 minutes.",
    },
    {
      step: 2,
      title: "A free home visit",
      text: "A senior member of our team visits at a time that suits you. Family are welcome. We talk about routines, health, likes and dislikes, and check the home is safe. No charge, no obligation.",
    },
    {
      step: 3,
      title: "Your care plan",
      text: "We write a care plan based on the visit and go through it with you. You agree it before anything starts, and you can change it at any time.",
    },
    {
      step: 4,
      title: "Meet your carers",
      text: "We match you with carers based on needs, personality and preferences. Where possible, we introduce your main carer before the first visit.",
    },
    {
      step: 5,
      title: "Care begins",
      text: "Visits start on the agreed date. Carers record each visit, and family can be kept updated by phone or care app.",
    },
    {
      step: 6,
      title: "Regular reviews",
      text: "We check in after the first two weeks, then review the care plan regularly, or sooner if needs change.",
    },
  ],
};

export const areasCoveredData = {
  id: "areas",
  title: "Home care across West London",
  body: "Our office is on the Great West Road in Brentford, and our carers live locally. That means reliable visits, short travel times and carers who know your area.",
  areas: [
    {
      title: "Home care in Brentford",
      text: "Brentford is home for Lighter House. Many of our carers live a short walk or bus ride away, from Brentford Lock and Syon to Gunnersbury and Kew Bridge. We work closely with the discharge team at West Middlesex University Hospital and with Hounslow adult social care.",
    },
    {
      title: "Home care in Hounslow",
      text: "We support adults across Hounslow, from Hounslow West and Lampton to Heston, Cranford, Whitton and Isleworth. If you're arranging care after a stay at West Mid, we can usually assess before the discharge date. Hounslow residents can ask the council for a free care needs assessment and use a direct payment to choose us.",
    },
    {
      title: "Home care in Ealing",
      text: "Our carers visit homes across Ealing, including Ealing Broadway, West Ealing, South Ealing, Northfields and Hanwell. We work alongside local GP practices, district nurses and Ealing Council's adult social care team.",
    },
  ],
  alsoCoveringLabel: "Also covering:",
  alsoCoveringTags: ["Chiswick", "Feltham", "Twickenham", "Richmond"],
  helpNote: "Live just outside these areas? Get in touch. We may still be able to help.",
  cta: {
    label: "Check your postcode",
    href: "/contact/#areas-we-cover",
  },
};

export const servicesSection = {
  title: "What We Offer",
  text: "Comprehensive personalized care services tailored to each resident's personal and medical needs.",
  // linkLabel: "See All",
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
    image: images.old_taker,
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
    label: "enquiries@lighterhouse.co.uk",
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
