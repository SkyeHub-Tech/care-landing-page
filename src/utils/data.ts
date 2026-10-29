import type { AboutHeroData } from "@/types/about";
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
export const aboutHeroData: AboutHeroData = {
  title: "About Lighter House",
  body: "Lighter House Care is a home care provider based in Brentford, West London. We support adults to keep living in the homes they love, with care that respects who they are and how they want to live.",
};

export const aboutJumpLinksData = [
  { name: "Our story", href: "#our-story" },
  { name: "Our values", href: "#our-values" },
  { name: "Quality and safety", href: "#quality-and-safety" },
  { name: "Our team", href: "#our-team" },
  { name: "Careers", href: "#careers" },
  { name: "Complaints", href: "#complaints" },
];

export const ourStoryMissionData = {
  id: "our-story",
  storyTitle: "Our story",
  storyBody:
    "Lighter House was founded in [YEAR] by [FOUNDER NAME], who spent [NUMBER] years working in [SETTING] before starting the company. [FOUNDER NAME] saw too many people receive rushed visits from carers they had never met, and wanted to build something better: a smaller service where carers have time to do the job properly, and families always know who to call.",
  missionTitle: "Our mission",
  missionBody:
    "To help adults in West London live safely, comfortably and independently at home, through care that is personal, consistent and properly run.",
  image: images.whisk_group,
  imageAlt: "Lighter House Care founding team",
};

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

export const faqsPreviewData = {
  id: "faqs-preview",
  title: "Questions families often ask",
  items: [
    {
      question: "How much does home care cost?",
      answer:
        "Costs depend on the level of support and visit length, ranging from 30-minute check-ins to several visits a day. We provide a clear, transparent breakdown during your free home visit with no hidden charges or long-term contracts.",
    },
    {
      question: "How quickly can care start?",
      answer:
        "Care can often begin within 24 to 48 hours of your initial assessment, or we can coordinate around a planned hospital discharge date. We move as quickly as you and your family need.",
    },
    {
      question: "Will we have the same carer each time?",
      answer:
        "Yes. We keep teams small so the people we support get to know their carers, and their carers get to know them. If a regular carer is ever on leave or unwell, we tell you in advance who is covering.",
    },
    {
      question: "Can the council help pay for care?",
      answer:
        "Yes. If you live in Hounslow, Ealing, or surrounding boroughs, you can request a free care needs assessment from your local council. If eligible, you can use direct payments to choose Lighter House as your provider.",
    },
  ],
  link: {
    label: "See all FAQs",
    href: "/contact/#faqs",
  },
};

export const callBackData = {
  id: "call-back",
  title: "Request a call back",
  body: "Leave your details and we'll call you within one working day.",
  buttonLabel: "Request a call back",
  checkboxLabel: "I agree to Lighter House contacting me about my enquiry.",
  privacyPolicyText: "See our privacy policy.",
  privacyPolicyHref: "/privacy-policy",
  phoneNumber: "0330 043 2864",
  phoneHref: "tel:03300432864",
  successMessage: {
    lead: "Thank you. We'll call you within one working day. If you need us sooner, call ",
    phone: "0330 043 2864",
    phoneHref: "tel:03300432864",
  },
};

export const servicesHeroData = {
  title: "Home care services",
  body: "Every person we support has a care plan built around their needs, so no two packages look the same. Some people want a short visit each morning. Others need help several times a day. Below is everything we can help with. Most people use a combination.",
  primaryCta: {
    label: "Arrange a free visit",
    href: "/contact",
  },
  secondaryCta: {
    label: "Call 0330 043 2864",
    href: "tel:03300432864",
  },
};

export const servicesJumpLinksData = [
  { name: "Personal care", href: "#personal-care" },
  { name: "Medication", href: "#medication-support" },
  { name: "Companionship", href: "#companionship-care" },
  { name: "Dementia", href: "#dementia-care" },
  { name: "Respite", href: "#respite-care" },
  { name: "Hospital to home", href: "#hospital-to-home" },
  { name: "Meals and home help", href: "#meals-and-home-help" },
  { name: "Paying for care", href: "#paying-for-care" },
];

export const serviceDetailSectionsData = [
  {
    id: "personal-care",
    title: "Personal care at home",
    body: "Help with the most personal parts of the day, given with patience, privacy and respect. Our carers support people to wash, dress and get ready the way they always have, so they can stay in their own home with their dignity intact.",
    image: images.old_taker,
    imageAlt: "Carer assisting older person at home with warmth and dignity",
    includedTitle: "What's included",
    includedItems: [
      "Washing, showering and bathing, or a full wash in bed",
      "Getting dressed and undressed, and choosing clothes",
      "Shaving, hair care, oral care and skin care",
      "Toileting and continence care, including changing pads",
      "Getting up in the morning and settling at night",
      "Moving around the home safely, including hoists where assessed",
    ],
    subSectionTitle: "Your routine, your way",
    subSectionText:
      "At your home visit we write down how you like things done: bath or shower, the order you get dressed, the toiletries you use. Many people prefer a carer of the same sex for personal care, and we record and respect that. Visits usually last 30 to 60 minutes. We don't do rushed 15-minute personal care visits.",
    cta: {
      label: "Arrange a free visit",
      href: "/contact",
    },
  },
  {
    id: "medication-support",
    title: "Medication support at home",
    body: "Missed or doubled doses are one of the most common reasons older people end up in hospital. Our trained carers help people take the right medicine at the right time, and keep a written record of every dose.",
    image: images.main_hero,
    imageAlt: "Carer supporting client with daily medication routine safely",
    includedTitle: "What's included",
    includedItems: [
      "Reminders when it's time to take your tablets",
      "Help opening packaging, reading labels and pouring liquids",
      "Giving medicines where agreed, including creams, eye drops and inhalers",
      "A written record of every dose",
      "Collecting prescriptions from your pharmacy",
      "Working with your GP and pharmacy on any changes",
    ],
    subSectionTitle: "How we keep it safe",
    subSectionText:
      "Every carer who handles medicines is trained and assessed as competent first. Wherever possible, we help people stay in control of their own medicines. Our carers do not give injections. District nurses do, and we work alongside them.",
    cta: {
      label: "Arrange a free visit",
      href: "/contact",
    },
  },
  {
    id: "companionship-care",
    title: "Companionship care",
    body: "Loneliness can affect health as much as any physical condition. Our companionship visits give people someone to talk to, go out with and look forward to seeing, from a carer who becomes a familiar face.",
    image: images.clients,
    imageAlt: "Older adults enjoying tea and companionship",
    includedTitle: "What's included",
    includedItems: [
      "Conversation over a cup of tea",
      "Walks, shopping trips, café visits and days out",
      "Hobbies at home: cards, puzzles, music, gardening, baking",
      "Going along to appointments, places of worship or community groups",
      "Help with letters, phone calls and video-calling family",
      "Light household tasks during the visit",
    ],
    subSectionTitle: "Who it helps",
    subSectionText:
      "People who live alone, have lost a partner, or whose family lives far away. It also suits people who are mostly independent but have lost confidence going out on their own. Visits can be weekly or daily, booked on their own or added to personal care.",
    cta: {
      label: "Arrange a free visit",
      href: "/contact",
    },
  },
  {
    id: "dementia-care",
    title: "Dementia care at home",
    body: "For someone living with dementia, home is full of things that make sense: their chair, their photos, the route to the kitchen. Our dementia care helps people stay in those familiar surroundings for as long as it's safe, with carers who understand that the condition affects each person differently.",
    image: images.old_couple,
    imageAlt: "Gentle and patient dementia care at home",
    includedTitle: "What's included",
    includedItems: [
      "The same small team, so faces become familiar",
      "Steady routines, because sudden changes can cause distress",
      "Gentle prompting with washing, dressing, eating and drinking",
      "Medication support and prompting",
      "Activities the person enjoys: music, photos, simple tasks",
      "Calm, patient responses to confusion or distress",
    ],
    subSectionTitle: "Choice, consent and family support",
    subSectionText:
      "A diagnosis of dementia does not mean someone can't make their own decisions. We follow the Mental Capacity Act 2005 and support people to make every choice they can. We keep you updated after visits, tell you about changes we notice, and can point you to local dementia support in Hounslow and Ealing.",
    cta: {
      label: "Arrange a free visit",
      href: "/contact",
    },
  },
  {
    id: "respite-care",
    title: "Respite care at home",
    body: "Looking after someone you love is hard work, and everyone needs a break. Our respite care steps in so you can rest, go on holiday or deal with your own health, knowing your relative is looked after at home.",
    image: images.whisk_group,
    imageAlt: "Supportive respite care for families and caregivers",
    includedTitle: "What's included",
    includedItems: [
      "A few hours a week so you can shop, see friends or simply sleep",
      "Daily visits while you're away on holiday",
      "Emergency cover if you become unwell",
      "A trial of home care before committing to a longer package",
    ],
    subSectionTitle: "The same standard of care",
    subSectionText:
      "Respite uses the same assessment and care planning as all our services. Your relative gets the same standard of care for a week as they would for a year. Family carers can also ask the council for a carer's assessment, which may lead to funded breaks.",
    cta: {
      label: "Arrange a free visit",
      href: "/contact",
    },
  },
  {
    id: "hospital-to-home",
    title: "Coming home from hospital",
    body: "The first few days after a hospital stay are when people are most likely to fall or be readmitted. Our hospital-to-home support helps people settle back in safely, regain confidence and recover at their own pace.",
    image: images.gran_gran,
    imageAlt: "Safe transition and recovery support after a hospital discharge",
    includedTitle: "What's included",
    includedItems: [
      "Being there when you arrive home, or soon after",
      "Making sure the home is warm, stocked with food and safe",
      "Personal care, medication support and meals while you recover",
      "Encouraging the exercises your physiotherapist has set",
      "Contacting the GP or NHS 111 if something isn't right",
      "Reducing visits as you get stronger",
    ],
    subSectionTitle: "For discharge teams and social workers",
    subSectionText:
      "We accept referrals from hospital discharge teams, social workers and GPs across Brentford, Hounslow and Ealing. Email enquiries@lighterhouse.co.uk with \"Referral\" in the subject line, or call 0330 043 2864. We aim to assess within 24 to 48 hours and confirm a start date the same day.",
    cta: {
      label: "Arrange a free visit",
      href: "/contact",
    },
  },
  {
    id: "meals-and-home-help",
    title: "Meals and help around the home",
    body: "Eating well and keeping the house in order make a big difference to how someone feels. Our carers help with the everyday jobs that have become harder, from cooking a hot meal to changing the bed.",
    image: images.hero,
    imageAlt: "Fresh meals, domestic help and tidy comfortable living at home",
    includedTitle: "What's included",
    includedItems: [
      "Planning meals and cooking fresh food, or heating prepared meals",
      "Halal, kosher, vegetarian, diabetic and other diets respected",
      "Encouraging drinks through the day",
      "Food shopping, in person or online",
      "Washing up, laundry, ironing and changing beds",
      "Light cleaning and tidying to keep the home safe",
    ],
    subSectionTitle: "Small jobs, big difference",
    subSectionText:
      "A warm meal, clean sheets and a tidy kitchen help people feel like themselves. We fit these jobs around personal care visits or book them on their own, whichever suits you.",
    cta: {
      label: "Arrange a free visit",
      href: "/contact",
    },
  },
];

export const payingForCareData = {
  id: "paying-for-care",
  title: "Paying for home care",
  body: "Most families want to know about cost before anything else. Here is what we charge, and the main ways care at home can be funded in England.",
  priceBoxTitle: "Our prices",
  prices: [
    { visitType: "Weekday hourly rate", price: "£[RATE] per hour" },
    { visitType: "30-minute visit", price: "£[RATE]" },
    { visitType: "Evenings and weekends", price: "£[RATE] per hour" },
    { visitType: "Bank holidays", price: "£[RATE] per hour" },
  ],
  underPriceBox: "The home visit and care plan are free. There are no joining fees.",
  payingPrivately: {
    title: "Paying for care yourself",
    text: "If you arrange and pay for care privately, you deal with us directly. You choose your visit times, can change your package easily and can start quickly. We invoice [INVOICE FREQUENCY] in arrears.",
  },
  councilHelp: {
    title: "Help from the council",
    text: "Anyone who seems to need care can ask their local council for a free needs assessment. In England, if your savings are over £23,250 you will usually pay the full cost. Between £14,250 and £23,250 you pay a contribution, and under £14,250 you pay only what you can afford from your income. For care at home, the value of your house is not counted. If the council funds your care, you can take it as a direct payment and choose Lighter House.",
  },
  otherHelp: {
    title: "Other help with costs",
    items: [
      {
        name: "Attendance Allowance",
        description:
          "for people over State Pension age who need help with personal care. It isn't means-tested.",
        link: {
          label: "https://www.gov.uk/attendance-allowance",
          href: "https://www.gov.uk/attendance-allowance",
        },
      },
      {
        name: "NHS Continuing Healthcare",
        description:
          "if someone's needs are mainly health needs, the NHS may pay in full. Ask the GP or hospital team.",
      },
      {
        name: "Carer's assessment",
        description:
          "if you look after a family member, the council may offer support such as funded respite breaks.",
      },
    ],
  },
  smallPrint:
    "This is general guidance, not financial advice. Rules can change. For independent advice, contact Age UK or a financial adviser accredited by the Society of Later Life Advisers.",
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
