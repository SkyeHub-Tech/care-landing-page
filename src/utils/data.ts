import {
  COMPANY_LEGAL_NAME,
  COMPANY_NAME,
  COMPANY_REGISTRATION_LINE,
  CONTACT_EMAIL,
  COVERAGE_CALL_PROMPT,
  COVERAGE_LINE,
  CQC_REGISTRATION_TEXT,
  MAIN_PHONE_DISPLAY,
  MAIN_PHONE_HREF,
  OFFICE_HOURS_TEXT,
  OFFICE_VISITS_NOTE,
  OUT_OF_HOURS_PHONE_DISPLAY,
  OUT_OF_HOURS_TEXT,
  REGISTERED_OFFICE_ADDRESS,
  REGISTERED_OFFICE_FULL_ADDRESS,
  RESPONSE_PROMISE_TEXT,
  ROUTES,
} from "@/lib/constants";
import type {
  AboutHeroData,
  AboutJumpLink,
  CareersData,
  CompanyInformationData,
  ComplaintsFeedbackData,
  OurStoryMissionData,
  QualitySafetyData,
  TalkToUsAboutCareData,
  TestimonialItem,
  WhatWeBelieveData,
} from "@/types/about";
import type {
  ContactFaqsSectionData,
  DoWeCoverYourAreaData,
} from "@/types/contact";
import type {
  PayingForCareData,
  ServiceDetailSectionData,
  ServiceJumpLink,
} from "@/types/services";

import { images } from "./images";

export const navbarLinks = [
  {
    name: "Home",
    link: ROUTES.HOME,
  },
  {
    name: "Our Services",
    link: ROUTES.SERVICES,
  },
  {
    name: "About Us",
    link: ROUTES.ABOUT_US,
  },
  {
    name: "Contact Us",
    link: ROUTES.CONTACT,
  },
];

// About Us Page
export const aboutHeroData: AboutHeroData = {
  title: `About ${COMPANY_NAME}`,
  body: "Lighter House Care Limited is a home care provider based in Brentford, West London. We support adults aged 18 and over to live safely, comfortably and independently in their own homes.",
};

export const aboutJumpLinksData: AboutJumpLink[] = [
  { name: "Who we are", href: "#who-we-are" },
  { name: "Who we support", href: "#who-we-support" },
  { name: "Our values", href: "#values" },
  { name: "Quality and safety", href: "#quality-and-safety" },
  { name: "Careers", href: "#careers" },
  { name: "Complaints", href: "#complaints" },
];

export const ourStoryMissionData: OurStoryMissionData = {
  id: "who-we-are",
  whoWeAreTitle: "Who we are",
  whoWeAreBody: `${COMPANY_LEGAL_NAME} is a home care provider based in Brentford, West London. We support adults aged 18 and over to live safely, comfortably and independently in their own homes. ${COVERAGE_LINE}`,
  missionTitle: "Our mission",
  missionBody:
    "To deliver safe, reliable and person-centred home care that protects people's dignity, supports their independence and gives families peace of mind.",
  whoWeSupportId: "who-we-support",
  whoWeSupportTitle: "Who we support",
  whoWeSupportBody:
    "Adults aged 18 and over, including older people, people living with dementia, people with physical disabilities or long-term health conditions, and people recovering from illness or a hospital stay. We work with people who fund their own care, local authorities and NHS partners.",
  howWeWorkTitle: "What we do and how we work",
  howWeWorkBody:
    "We provide personal care, medication support, companionship, dementia care, respite care, hospital to home support, meals and home help, and live-in care. Before care begins, we meet with you to talk through your needs, routines and wishes, agree a written care plan together, introduce a consistent small team of vetted carers, and review your care regularly.",
  image: images.live_in_care,
  imageAlt: "Carer supporting an adult client comfortably in their own home",
};

export const whatWeBelieveData: WhatWeBelieveData = {
  id: "values",
  title: "What we believe",
  items: [
    {
      title: "Fairness",
      text: "Everyone gets the same high standard of care, whatever their background, health or circumstances.",
      iconName: "Scale",
    },
    {
      title: "Respect",
      text: "We treat people as the experts in their own lives and listen before we act.",
      iconName: "HeartHandshake",
    },
    {
      title: "Equality",
      text: "Faith, culture, language, sexuality and identity are respected and written into every care plan.",
      iconName: "Equal",
    },
    {
      title: "Dignity",
      text: "We protect privacy, especially during personal care, and we never rush.",
      iconName: "ShieldCheck",
    },
    {
      title: "Autonomy",
      text: "People make their own choices. Our job is to support them, not take over.",
      iconName: "Compass",
    },
  ],
};

export const qualitySafetyData: QualitySafetyData = {
  id: "quality-and-safety",
  title: "How we keep care safe",
  body: "Letting someone into your home, or your parent's home, takes trust. Here is how we earn it.",
  items: [
    {
      title: "CQC registration",
      text: `${CQC_REGISTRATION_TEXT} We run our service to its five key standards: safe, effective, caring, responsive and well-led.`,
      iconName: "BadgeCheck",
    },
    {
      title: "Carers you can trust",
      text: "Enhanced DBS checks, two references, ID and right-to-work checks before anyone joins. New carers complete the Care Certificate and shadow experienced colleagues first.",
      iconName: "UserCheck",
    },
    {
      title: "Your consent, your choices",
      text: "We ask for your agreement before providing any care, and we record it. Where someone can't make a decision, we follow the Mental Capacity Act 2005.",
      iconName: "ClipboardCheck",
    },
    {
      title: "Safe handling of medicines",
      text: "Only trained, competency-assessed carers support with medicines. Every dose is recorded, and records are audited regularly.",
      iconName: "Pill",
    },
    {
      title: "Safeguarding",
      text: "All staff are trained to spot and report abuse or neglect. Concerns go to the local authority safeguarding team without delay.",
      iconName: "Shield",
    },
    {
      title: "Infection prevention",
      text: "Strict hand hygiene, and gloves, aprons and other protective equipment as needed, in line with national guidance.",
      iconName: "Sparkles",
    },
    {
      title: "Checking our own work",
      text: "Regular audits of care plans, records, medicines and training. Actions are tracked until they're complete, and we ask families for feedback.",
      iconName: "ClipboardList",
    },
    {
      title: "Our policies",
      text: `We're happy to share any of our policies with families, social workers and commissioners. Email ${CONTACT_EMAIL}.`,
      iconName: "BookOpen",
      emailLink: CONTACT_EMAIL,
    },
  ],
};

export const careersData: CareersData = {
  id: "careers",
  title: `Careers at ${COMPANY_NAME}`,
  body: "Good care depends on good carers. If you're kind, reliable and want work that matters, we'd like to hear from you, whether you have years of experience or none at all.",
  recruitmentAdvert: {
    title: "Care Assistants",
    text: "We are recruiting care assistants. Competitive pay, details discussed at interview.",
    buttonLabel: "Apply",
  },
  noVacanciesText:
    "We're always happy to hear from dedicated carers. Send us your details using the form or by email.",
  whyWorkWithUsTitle: "Why work with us",
  whyWorkWithUsItems: [
    "Paid training, including the Care Certificate",
    "Full-time, part-time and weekend shifts",
    "Regular supervision and on-call manager support",
  ],
  howToApplyTitle: "How to apply",
  howToApplySteps: [
    `Fill in the form, or email your CV to ${CONTACT_EMAIL}.`,
    "We'll call you for an informal chat.",
    "Interview, references and DBS check.",
    "Paid induction and shadow shifts before you start.",
  ],
  formTitle: "Apply to join us",
  equalOpportunitiesText: `${COMPANY_NAME} is an equal opportunities employer. We welcome applications from everyone, regardless of age, disability, race, religion, sex, sexual orientation or any other protected characteristic.`,
};

export const complaintsFeedbackData: ComplaintsFeedbackData = {
  id: "complaints",
  title: "Complaints and feedback",
  body: "We want to hear when something isn't right, and when something is. Raising a concern will never affect the care you or your relative receive.",
  steps: [
    {
      step: 1,
      title: "Talk to us",
      text: `Call ${MAIN_PHONE_DISPLAY}, email ${CONTACT_EMAIL} or write to our office. Most concerns can be put right quickly.`,
      phone: MAIN_PHONE_DISPLAY,
      email: CONTACT_EMAIL,
    },
    {
      step: 2,
      title: "We acknowledge it",
      text: "We'll confirm we've received your complaint within 3 working days and tell you who is looking into it.",
    },
    {
      step: 3,
      title: "We investigate and reply",
      text: "You'll get a full response within 20 working days, with you kept updated if it will take longer, explaining what we found and what we're doing about it.",
    },
    {
      step: 4,
      title: "If you're still unhappy",
      text: "You can ask the Local Government and Social Care Ombudsman to review your complaint. It's free, whether you pay for your own care or the council does.",
    },
  ],
  textUnderSteps:
    "If something goes wrong, we'll tell you, apologise and explain what we're doing about it. You can also share feedback with the Care Quality Commission. And if a carer has done something wonderful, please tell us that too.",
};

export const companyInformationData: CompanyInformationData = {
  text: `${COMPANY_LEGAL_NAME}. ${COMPANY_REGISTRATION_LINE} Registered office: ${REGISTERED_OFFICE_FULL_ADDRESS}. ${CQC_REGISTRATION_TEXT}`,
};

export const talkToUsAboutCareData: TalkToUsAboutCareData = {
  id: "enquiry",
  title: "Talk to us about care",
  body: `Whether you're ready to arrange care or just want to understand your options, we're happy to help. Call, email or fill in the form. ${RESPONSE_PROMISE_TEXT}`,
  phone: MAIN_PHONE_DISPLAY,
  email: CONTACT_EMAIL,
  office: REGISTERED_OFFICE_ADDRESS,
  officeHours: OFFICE_HOURS_TEXT,
  outOfHoursPhone: OUT_OF_HOURS_PHONE_DISPLAY,
  outOfHoursText: OUT_OF_HOURS_TEXT,
  referrals: `${CONTACT_EMAIL} with "Referral" in the subject line`,
  underCardNote: OFFICE_VISITS_NOTE,
  safetyLine:
    "If someone is in immediate danger, call 999. For urgent medical advice, call NHS 111.",
};

export const homeHero = {
  eyebrow: COMPANY_NAME,
  title: "Care at home, from people who take the time to know you",
  text: "Home care across Greater London and Sussex, and live-in care across the UK, for adults who want to stay safe and independent at home.",
  primaryCta: {
    label: "Arrange a free visit",
    href: ROUTES.CONTACT,
  },
  secondaryCta: {
    label: `Call ${MAIN_PHONE_DISPLAY}`,
    href: MAIN_PHONE_HREF,
  },
  trustNote: "Free in-home assessment • Fully vetted & DBS-checked team",
  imageAlt: "Carer smiling with an older client in a bright living room at home",
};

export const introductionSection = {
  id: "introduction",
  title: "Home care that fits around the person, not the rota",
  paragraphs: [
    "Getting older, living with a long-term condition or coming home after a hospital stay can make everyday things harder. Washing, getting dressed, remembering medicines, cooking a proper meal. Small tasks start to feel big.",
    `${COMPANY_NAME} is a home care provider based in Brentford, West London. ${COVERAGE_LINE} Before anything starts, we sit down with you, find out how you like things done, and write it into a care plan you agree to.`,
    CQC_REGISTRATION_TEXT,
    "You stay in charge of your day. We make it easier to get through.",
  ],
  cta: {
    label: `About ${COMPANY_NAME}`,
    href: ROUTES.ABOUT_US,
  },
};

export const homeServices = [
  {
    title: "Personal care",
    description:
      "We assist clients with daily routines such as washing, dressing and grooming with patience, comfort and dignity.",
    icon: "heart",
  },
  {
    title: "Medication support",
    description:
      "Our trained carers provide safe medication reminders and recorded support so clients stay on track with their care plan.",
    icon: "pill",
  },
  {
    title: "Meals and home help",
    description:
      "Clients enjoy freshly prepared meals tailored to dietary needs alongside light housekeeping that keeps home safe.",
    icon: "soup",
  },
  {
    title: "Companionship",
    description:
      "Conversation, outings, hobbies and regular company from a familiar team of carers.",
    icon: "users",
  },
  {
    title: "Dementia care",
    description:
      "Calm, consistent support in familiar surroundings for clients living with dementia and their families.",
    icon: "stethoscope",
  },
  {
    title: "Respite care",
    description:
      "Respite gives family carers time to rest, knowing their loved one is in safe hands.",
    icon: "home",
  },
] as const;

export const servicesOverviewData = {
  id: "services",
  title: "How we can help at home",
  body: "Visit times are agreed with you at your assessment and set out in your care plan. Most people combine a few of these services.",
  cta: {
    label: "See all our services",
    href: ROUTES.SERVICES,
  },
  services: [
    {
      id: "personal-care",
      title: "Personal care",
      description:
        "Help with washing, bathing, dressing, toileting and getting ready for the day, done with patience and privacy.",
      icon: "personal-care",
      link: "/services#personal-care",
    },
    {
      id: "medication-support",
      title: "Medication support",
      description:
        "Reminders, prompting and recorded support so medicines are taken safely and on time.",
      icon: "medication",
      link: "/services#medication-support",
    },
    {
      id: "companionship-care",
      title: "Companionship",
      description:
        "Conversation, outings, hobbies and company for anyone who spends too much time on their own.",
      icon: "companionship",
      link: "/services#companionship-care",
    },
    {
      id: "dementia-care",
      title: "Dementia care",
      description:
        "Calm, consistent support for people living with dementia, and practical help for the family around them.",
      icon: "dementia",
      link: "/services#dementia-care",
    },
    {
      id: "respite-care",
      title: "Respite care",
      description:
        "Respite gives family carers time to rest, knowing their loved one is in safe hands.",
      icon: "respite",
      link: "/services#respite-care",
    },
    {
      id: "hospital-to-home",
      title: "Hospital to home",
      description:
        "Support in the first days and weeks after a hospital stay, when getting home safely matters most.",
      icon: "hospital-to-home",
      link: "/services#hospital-to-home",
    },
    {
      id: "meals-and-home-help",
      title: "Meals and home help",
      description:
        "Cooking, shopping, laundry and light housework, so home stays comfortable and safe.",
      icon: "meals-and-help",
      link: "/services#meals-and-home-help",
    },
    {
      id: "live-in-care",
      title: "Live-in care",
      description:
        "A trained live-in carer in your home to give support day and night, so you can stay where you feel most at home. Available across the UK.",
      icon: "live-in-care",
      link: "/services#live-in-care",
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
      text: `You get a direct line to our office team, not a national call centre. ${OUT_OF_HOURS_TEXT}`,
      icon: "phone",
    },
  ],
  link: {
    label: "How we keep care safe",
    href: "/about-us#quality-and-safety",
  },
  imageAlt: "Carer supporting an older client with warm companionship at home",
};

export const howCareStartsData = {
  id: "how-it-works",
  title: `How care starts with ${COMPANY_NAME}`,
  body: "Arranging care often happens at a stressful time. We keep the process simple and move at a pace that suits you.",
  steps: [
    {
      step: 1,
      title: "A friendly first conversation",
      text: "Call us or send an enquiry. We'll ask about the person who needs support and what you're hoping for, and explain the next steps.",
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
  title: "Areas we cover",
  coverageText: COVERAGE_LINE,
  callPrompt: COVERAGE_CALL_PROMPT,
  phone: MAIN_PHONE_DISPLAY,
  phoneHref: MAIN_PHONE_HREF,
  cta: {
    label: "Contact us",
    href: ROUTES.CONTACT,
  },
};

export const faqsPreviewData = {
  id: "faqs-preview",
  title: "Questions families often ask",
  items: [
    {
      question: "How much does it cost?",
      answer:
        "Every care package is built around the person's needs, so costs vary. We will give you a clear quote after your free assessment.",
    },
    {
      question: "How soon can care start?",
      answer:
        "Once your assessment is done and your care plan is agreed, we will confirm a start date with you.",
    },
    {
      question: "Will I have the same carer?",
      answer:
        "We aim to send the same small team of carers, so you get to know and trust who comes through your door.",
    },
    {
      question: "Can the council help pay?",
      answer:
        "Possibly. We work with people who fund their own care, local authorities and NHS partners. Contact us and we will talk you through the options.",
    },
  ],
  link: {
    label: "See all FAQs",
    href: ROUTES.CONTACT_FAQS,
  },
};

export const callBackData = {
  id: "call-back",
  title: "Request a call back",
  body: `Leave your details and we will be in touch during office hours.`,
  buttonLabel: "Request a call back",
  checkboxLabel: `I agree to ${COMPANY_NAME} contacting me about my enquiry.`,
  privacyPolicyText: "See our privacy policy.",
  privacyPolicyHref: ROUTES.PRIVACY,
  phoneNumber: MAIN_PHONE_DISPLAY,
  phoneHref: MAIN_PHONE_HREF,
  successMessage: {
    lead: "Thank you. We have received your message and will be in touch during office hours. If you need us sooner, call ",
    phone: MAIN_PHONE_DISPLAY,
    phoneHref: MAIN_PHONE_HREF,
  },
};

export const servicesHeroData = {
  title: "Home care services",
  body: `${COVERAGE_LINE} Every client we support has a care plan built around their needs, so no two packages look the same. Below is everything we can help with — most people use a combination.`,
  primaryCta: {
    label: "Arrange a free visit",
    href: ROUTES.CONTACT,
  },
  secondaryCta: {
    label: `Call ${MAIN_PHONE_DISPLAY}`,
    href: MAIN_PHONE_HREF,
  },
};

export const servicesJumpLinksData: ServiceJumpLink[] = [
  { name: "Personal care", href: "#personal-care" },
  { name: "Medication support", href: "#medication-support" },
  { name: "Companionship", href: "#companionship-care" },
  { name: "Dementia care", href: "#dementia-care" },
  { name: "Respite care", href: "#respite-care" },
  { name: "Hospital to home", href: "#hospital-to-home" },
  { name: "Meals and home help", href: "#meals-and-home-help" },
  { name: "Live-in care", href: "#live-in-care" },
  { name: "Paying for care", href: "#paying-for-care" },
];

export const serviceDetailSectionsData: ServiceDetailSectionData[] = [
  {
    id: "personal-care",
    title: "Personal care at home",
    body: "Help with the most personal parts of the day, given with patience, privacy and respect. Our carers support people to wash, dress and get ready the way they always have, so they can stay in their own home with their dignity intact.",
    image: images.old_taker,
    imageAlt: "Carer assisting an older client at home with warmth and dignity",
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
      "At your home visit we write down how you like things done: bath or shower, the order you get dressed, the toiletries you use. Many people prefer a carer of the same sex for personal care, and we record and respect that. Visit times are agreed with you at your assessment and set out in your care plan.",
    cta: {
      label: "Arrange a free visit",
      href: ROUTES.CONTACT,
    },
  },
  {
    id: "medication-support",
    title: "Medication support at home",
    body: "Missed or doubled doses are one of the most common reasons older people end up in hospital. Our trained carers help people take the right medicine at the right time, and keep a written record of every dose.",
    image: images.main_hero,
    imageAlt: "Carer supporting a client safely with their daily medication routine",
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
      href: ROUTES.CONTACT,
    },
  },
  {
    id: "companionship-care",
    title: "Companionship care",
    body: "Loneliness can affect health as much as any physical condition. Our companionship visits give people someone to talk to, go out with and look forward to seeing, from a carer who becomes a familiar face.",
    image: images.clients,
    imageAlt: "Clients enjoying warm conversation and companionship over tea",
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
      href: ROUTES.CONTACT,
    },
  },
  {
    id: "dementia-care",
    title: "Dementia care at home",
    body: "For someone living with dementia, home is full of things that make sense: their chair, their photos, the route to the kitchen. Our dementia care helps people stay in those familiar surroundings for as long as it's safe, with carers who understand that the condition affects each person differently.",
    image: images.old_couple,
    imageAlt: "Gentle, reassuring dementia care in familiar surroundings at home",
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
      "A diagnosis of dementia does not mean someone can't make their own decisions. We follow the Mental Capacity Act 2005 and support people to make every choice they can. We keep you updated after visits, tell you about changes we notice, and can point you to local dementia support.",
    cta: {
      label: "Arrange a free visit",
      href: ROUTES.CONTACT,
    },
  },
  {
    id: "respite-care",
    title: "Respite care at home",
    body: "Looking after someone you love is hard work, and everyone needs a break. Respite gives family carers time to rest, knowing their loved one is in safe hands.",
    image: images.whisk_group,
    imageAlt: "Supportive respite care giving family carers peace of mind",
    includedTitle: "What's included",
    includedItems: [
      "Regular breaks so you can shop, see friends or simply rest",
      "Planned cover while you're away on holiday",
      "Emergency cover if you become unwell",
      "A trial of home care before committing to a longer package",
    ],
    subSectionTitle: "Consistent, planned support",
    subSectionText:
      "Respite uses the same assessment and care planning as all our services. Family carers can also ask the council for a carer's assessment, which may lead to funded breaks.",
    cta: {
      label: "Arrange a free visit",
      href: ROUTES.CONTACT,
    },
  },
  {
    id: "hospital-to-home",
    title: "Coming home from hospital",
    body: "The first few days after a hospital stay are when people are most likely to fall or be readmitted. Our hospital-to-home support helps people settle back in safely, regain confidence and recover at their own pace.",
    image: images.gran_gran,
    imageAlt: "Carer supporting a client recovering comfortably at home after hospital discharge",
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
    subSectionText: `${COVERAGE_LINE} We accept referrals from hospital discharge teams, social workers and GPs. Email ${CONTACT_EMAIL} with "Referral" in the subject line, or call ${MAIN_PHONE_DISPLAY}. We will arrange your assessment as quickly as possible.`,
    cta: {
      label: "Arrange a free visit",
      href: ROUTES.CONTACT,
    },
  },
  {
    id: "meals-and-home-help",
    title: "Meals and help around the home",
    body: "Eating well and keeping the house in order make a big difference to how someone feels. Our carers help with the everyday jobs that have become harder, from cooking a hot meal to changing the bed.",
    image: images.hero,
    imageAlt: "Freshly prepared meals and practical domestic help in a client's home",
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
      href: ROUTES.CONTACT,
    },
  },
  {
    id: "live-in-care",
    title: "Live-in care",
    body: "A trained live-in carer in your home to give support day and night, so you can stay where you feel most at home. Available across the UK.",
    image: images.live_in_care,
    imageAlt: "Dedicated live-in carer supporting an adult client at home",
    includedTitle: "What's included",
    includedItems: [
      "A trained carer living in your home for reassurance day and night",
      "Personal care, washing, dressing and mobility support",
      "Medication prompting, reminders and accurate records",
      "Home-cooked meals, shopping, laundry and light housework",
      "Companionship, hobbies, outings and attending appointments",
      "Tailored support for complex needs, dementia or recovery",
    ],
    subSectionTitle: "Stay where you feel most at home",
    subSectionText:
      "Live-in care offers one-to-one support in familiar surroundings across the UK, allowing individuals or couples to keep their own routines, neighbours and independence. Visit and support arrangements are agreed with you at your assessment and set out in your care plan.",
    cta: {
      label: "Arrange a free visit",
      href: ROUTES.CONTACT,
    },
  },
];

export const payingForCareData: PayingForCareData = {
  id: "paying-for-care",
  title: "Paying for home care",
  body: "Every care package is built around the person, so costs vary. We will give you a clear quote after your free assessment.",
  quoteBoxTitle: "Clear, tailored quotes",
  quoteBoxText:
    "Every care package is built around the person, so costs vary. We will give you a clear quote after your free assessment.",
  underQuoteBox: "The home visit and care plan are free. There are no joining fees.",
  payingPrivately: {
    title: "Paying for care yourself",
    text: "If you arrange and pay for care privately, you deal with us directly. You choose your visit times, can change your package easily and can start once your care plan is agreed. We invoice fortnightly in arrears. Please contact us if another option would suit you better.",
  },
  councilHelp: {
    title: "Help from the council or NHS",
    text: "You may be able to get help from your local council or the NHS. We can talk you through the options.",
    link: {
      label: "Read care funding guidance on GOV.UK",
      href: "https://www.gov.uk/apply-needs-assessment-social-services",
    },
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

export const testimonialsSection = {
  title: "What Our Clients Say",
  text: "Read feedback from clients and families we support at home.",
};

// Hidden until genuine client reviews with written consent are supplied (format: first name and area only, e.g. "Margaret, Ealing").
export const testimonials: TestimonialItem[] = [];

export const doWeCoverYourAreaData: DoWeCoverYourAreaData = {
  id: "areas-we-cover",
  title: "Do we cover your area?",
  coverageText: COVERAGE_LINE,
  callPrompt: COVERAGE_CALL_PROMPT,
  phone: MAIN_PHONE_DISPLAY,
  phoneHref: MAIN_PHONE_HREF,
};

export const contactFaqsData: ContactFaqsSectionData = {
  id: "faqs",
  title: "Frequently asked questions",
  groups: [
    {
      id: "about-our-care",
      title: "About our care",
      items: [
        {
          id: "what-is-home-care",
          question: "What is home care?",
          answer:
            "Home care, also called domiciliary care, means trained carers visit you in your own home to help with things like washing, dressing, medicines, meals and company. You stay in your own home and keep your routines.",
        },
        {
          id: "who-do-you-provide-care-for",
          question: "Who do you provide care for?",
          answer:
            "Adults aged 18 and over, including older people, people living with dementia, people with physical disabilities or long-term health conditions, and people recovering from illness or a hospital stay.",
        },
        {
          id: "will-we-have-the-same-carer",
          question: "Will I have the same carer?",
          answer:
            "We aim to send the same small team of carers, so you get to know and trust who comes through your door.",
        },
        {
          id: "can-i-choose-carer-gender",
          question: "Can I choose a male or female carer?",
          answer:
            "Yes. Tell us your preference at your assessment and we will match it wherever we can.",
        },
        {
          id: "how-long-are-visits",
          question: "How long are visits?",
          answer:
            "It depends on the support you need. Visit times are agreed at your assessment and set out in your care plan.",
        },
        {
          id: "relative-with-dementia-help",
          question: "What if my relative with dementia doesn't want help?",
          answer:
            "Our carers take time to build trust and work at the person's pace. We involve family and follow the Mental Capacity Act 2005, so the person stays at the centre of every decision.",
        },
        {
          id: "relative-refuses-medicine",
          question: "What if my relative refuses their medicine?",
          answer:
            "We never force anyone to take medicine. The carer records the refusal, follows the care plan and tells the office, who will contact the GP, pharmacist or family where needed.",
        },
      ],
    },
    {
      id: "getting-started",
      title: "Getting started",
      items: [
        {
          id: "how-quickly-can-care-start",
          question: "How soon can care start?",
          answer:
            "Once your assessment is done and your care plan is agreed, we will confirm a start date with you.",
        },
        {
          id: "what-happens-at-home-visit",
          question: "What happens at the home visit?",
          answer:
            "We meet you and the people who matter to you, talk through your needs, routines and wishes, and use this to write your care plan with you.",
        },
        {
          id: "is-there-a-minimum-contract",
          question: "Is there a minimum contract?",
          answer:
            "Terms are explained at your assessment and set out in your service agreement before care starts.",
        },
        {
          id: "can-family-be-involved",
          question: "Can family be involved?",
          answer:
            "Yes. With the person's agreement, family can help shape the care plan, attend reviews and contact the office at any time.",
        },
      ],
    },
    {
      id: "costs-funding-and-regulation",
      title: "Costs, funding and regulation",
      items: [
        {
          id: "how-much-does-care-cost",
          question: "How much does it cost?",
          answer:
            "Every care package is built around the person's needs, so costs vary. We will give you a clear quote after your free assessment.",
        },
        {
          id: "can-council-help-pay",
          question: "Can the council help pay?",
          answer:
            "Possibly. We work with people who fund their own care, local authorities and NHS partners. Contact us and we will talk you through the options.",
        },
        {
          id: "regulated-by-cqc",
          question: "Are you regulated by the CQC?",
          answer: CQC_REGISTRATION_TEXT,
        },
      ],
    },
  ],
};
