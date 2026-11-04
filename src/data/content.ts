import type { Activity, Project, Article } from "../types/content";

export const organization =
  "Surabhi Multi State Co-operative Dairy Society Ltd.";
export const conceptNote =
  "Conceptual project information presented for demonstration purposes. Details are subject to confirmation and applicable approvals.";
export const images = {
  hero: "/assets/images/hero.jpg",
  landscape: "/assets/images/landscape.jpg",
  hills: "/assets/images/hills.jpg",
  cattle: "/assets/images/cattle.jpg",
  fields: "/assets/images/fields.jpg",
  farmer: "/assets/images/farmer.jpg",
  herd: "/assets/images/herd.jpg",
  harvest: "/assets/images/harvest.jpg",
  processing: "/assets/images/processing.jpg",
  biogas: "/assets/images/biogas.jpg",
};
export const activities: Activity[] = [
  {
    id: "dairy-development",
    number: "01",
    title: "Dairy Development",
    shortTitle: "Dairy development",
    image: images.herd,
    alt: "Dairy cattle in an open green pasture",
    summary:
      "A stronger foundation for the people and practices behind every drop.",
    description:
      "Dairy development begins with the farmer. Surabhi’s objectives bring together better farming practices, relevant technology, and co-operative participation to support the long-term development of the dairy sector.",
    objectives: [
      "Support dairy farming and sector development.",
      "Encourage appropriate modern dairy technologies.",
      "Build opportunities for co-operative participation.",
    ],
  },
  {
    id: "milk-processing",
    number: "02",
    title: "Milk Processing & Distribution",
    shortTitle: "Milk processing",
    image: images.processing,
    alt: "Stainless steel equipment inside a dairy-processing facility, illustrative stock photography",
    summary:
      "Connecting farm-level production with a considered dairy value chain.",
    description:
      "Milk collection, chilling, processing, distribution, and product development form part of the society’s registered objectives. The focus is a connected approach that considers farmers, product quality, and the infrastructure needed along the way.",
    objectives: [
      "Explore milk collection and chilling infrastructure.",
      "Support processing, distribution, and dairy product development.",
      "Encourage responsible quality practices across the value chain.",
    ],
  },
  {
    id: "farmer-welfare",
    number: "03",
    title: "Farmer Welfare & Training",
    shortTitle: "Farmer welfare",
    image: images.farmer,
    alt: "People working together in a cultivated agricultural field",
    summary:
      "Knowledge, opportunity, and a shared voice for farming communities.",
    description:
      "The future of dairy depends on the people who make it possible. Farmer welfare, practical education, and training are central to Surabhi’s intended approach, alongside facilitation of relevant government schemes where applicable.",
    objectives: [
      "Encourage practical farmer education and training.",
      "Facilitate information on relevant support schemes.",
      "Advance farmer welfare through co-operative development.",
    ],
  },
  {
    id: "animal-healthcare",
    number: "04",
    title: "Animal Healthcare",
    shortTitle: "Animal healthcare",
    image: images.cattle,
    alt: "A close view of a dairy cow in a natural setting",
    summary: "Healthy animals. More resilient farms. A shared responsibility.",
    description:
      "Animal health is an essential part of responsible dairy development. Veterinary services, healthcare awareness, breeding support, and veterinary infrastructure are included in the society’s objectives; specific services remain subject to confirmation.",
    objectives: [
      "Promote animal health and veterinary awareness.",
      "Explore veterinary infrastructure and service opportunities.",
      "Support responsible breeding and artificial insemination objectives.",
    ],
  },
  {
    id: "animal-nutrition",
    number: "05",
    title: "Animal Nutrition & Feed",
    shortTitle: "Animal nutrition",
    image: images.harvest,
    alt: "Fresh agricultural produce and green crops",
    summary: "Better nourishment at the roots of responsible livestock care.",
    description:
      "Nutrition connects animal welfare with sustainable dairy practices. Surabhi’s objectives include animal nutrition and cattle-feed development, with an emphasis on informed, appropriate approaches to livestock care.",
    objectives: [
      "Explore cattle-feed development opportunities.",
      "Encourage awareness of balanced livestock nutrition.",
      "Consider animal-health supplements as a proposed concept.",
    ],
  },
  {
    id: "research-innovation",
    number: "06",
    title: "Research & Innovation",
    shortTitle: "Research & innovation",
    image: images.hills,
    alt: "Green agricultural hills in Kerala",
    summary: "Bringing thoughtful ideas closer to everyday farming.",
    description:
      "Research, education, and training can help farming communities respond to changing needs. Surabhi’s objectives create space to explore useful technologies and new approaches, without losing sight of local conditions and practical value.",
    objectives: [
      "Encourage research, education, and training.",
      "Explore appropriate modern agricultural technologies.",
      "Consider veterinary education as a proposed initiative.",
    ],
  },
];
export const projects: Project[] = [
  {
    id: "biogas-development",
    number: "01",
    title: "Biogas Development",
    category: "Renewable Energy",
    status: "Concept / Proposed",
    image: images.biogas,
    alt: "A farmer caring for calves near a rural biogas installation in India, illustrative stock photography",
    summary:
      "Exploring responsible ways to turn agricultural and organic resources into renewable energy.",
    vision:
      "A farm’s resources can hold possibilities beyond its immediate harvest. This concept explores whether organic agricultural material could support a locally relevant renewable-energy approach. No plant, output, site, funding, or approval is represented as confirmed.",
    considerations: [
      "Resource availability and technical feasibility.",
      "Environmental requirements and applicable approvals.",
      "Local participation, operations, and long-term viability.",
    ],
  },
  {
    id: "farm-tourism",
    number: "02",
    title: "Farm Tourism",
    category: "Rural Tourism",
    status: "Concept / Proposed",
    image: images.hills,
    alt: "Misty tea gardens and rural landscapes in Kerala",
    summary:
      "Envisioning experiences that connect people with rural traditions, agricultural landscapes, and farm life.",
    vision:
      "A considered farm experience could create a meaningful connection between visitors and the people who work the land. Farm visits, cottages, and local experiences are ideas for exploration, rather than bookable accommodation or operating services.",
    considerations: [
      "Community participation and appropriate locations.",
      "Visitor experience, accessibility, and local character.",
      "Planning, tourism, safety, and environmental requirements.",
    ],
  },
  {
    id: "veterinary-healthcare",
    number: "03",
    title: "Veterinary Healthcare",
    category: "Animal Welfare",
    status: "Proposed Initiative",
    image: images.cattle,
    alt: "A dairy cow outdoors, illustrating the animal-care focus",
    summary:
      "Exploring accessible animal healthcare infrastructure and rural veterinary services.",
    vision:
      "Reliable access to animal care matters to every dairy community. This proposed initiative considers opportunities for veterinary infrastructure, awareness, and associated services. It is not a currently operating hospital or an emergency-care service.",
    considerations: [
      "Assessment of community and livestock-care needs.",
      "Qualified veterinary participation and infrastructure.",
      "Regulatory requirements and operational feasibility.",
    ],
  },
  {
    id: "dairy-infrastructure",
    number: "04",
    title: "Dairy Infrastructure",
    category: "Dairy Development",
    status: "Development Objective",
    image: images.processing,
    alt: "Industrial dairy-processing equipment, illustrating a development objective",
    summary:
      "Supporting a long-term vision for milk collection, processing, and distribution infrastructure.",
    vision:
      "A connected dairy sector needs infrastructure that serves farmers at each stage. Milk collection, chilling, processing, and distribution are registered objectives. This page describes that development direction, rather than a commissioned facility or completed project.",
    considerations: [
      "Farmer requirements and collection networks.",
      "Quality systems, chilling, processing, and distribution.",
      "Location, feasibility, investment, and applicable approvals.",
    ],
  },
];
export const articles: Article[] = [
  {
    id: "modern-dairy-practices",
    title: "Advancing Modern Dairy Practices",
    category: "Dairy Development",
    image: images.herd,
    alt: "Dairy cattle grazing on a green farm",
    excerpt:
      "Thinking about the role of practical knowledge and appropriate technology in everyday dairy farming.",
    readTime: "3 min read",
    sections: [
      {
        heading: "Progress that starts on the farm",
        body: "Modernisation is most useful when it responds to the realities of everyday farm life. For a co-operative, this means listening to farmers and considering the practical value of a new approach before introducing it.",
      },
      {
        heading: "Knowledge alongside technology",
        body: "Training, record-keeping, and awareness can be as important as equipment. These are useful areas for discussion as communities consider how dairy development can become more connected and responsive to local needs.",
      },
      {
        heading: "A co-operative perspective",
        body: "Surabhi’s objectives include dairy development, modern technology, and farmer training. This illustrative article introduces these themes; it does not announce an operating programme or provide farm-specific advice.",
      },
    ],
  },
  {
    id: "animal-healthcare",
    title: "The Importance of Animal Healthcare",
    category: "Animal Welfare",
    image: images.cattle,
    alt: "A cow in a farm setting",
    excerpt:
      "Why animal welfare belongs at the heart of the conversation about dairy development.",
    readTime: "3 min read",
    sections: [
      {
        heading: "Care is part of the whole",
        body: "Animal welfare and the future of farming are closely connected. A considered development approach includes discussion of livestock environments, access to qualified professionals, and awareness among farming communities.",
      },
      {
        heading: "Connecting people and expertise",
        body: "Veterinary awareness, animal nutrition, and responsible breeding support are included in Surabhi’s objectives. Any specific programme or service will need appropriate planning, qualified participation, and confirmation.",
      },
      {
        heading: "An objective for the future",
        body: "Veterinary healthcare infrastructure is a proposed initiative, not an operating service. This demonstration article is a general introduction and should not be used as veterinary guidance.",
      },
    ],
  },
  {
    id: "sustainable-rural-development",
    title: "Exploring Sustainable Rural Development",
    category: "Sustainability",
    image: images.landscape,
    alt: "Lush hillside tea plantations in Munnar, Kerala",
    excerpt:
      "Looking at the connections between local resources, new possibilities, and long-term community development.",
    readTime: "4 min read",
    sections: [
      {
        heading: "Looking beyond a single activity",
        body: "Rural development is shaped by many connected needs: livelihoods, knowledge, infrastructure, and the natural environment. A co-operative approach creates a way to discuss these priorities together.",
      },
      {
        heading: "Resources with new possibilities",
        body: "Renewable energy and farm tourism are among the concepts being explored for Surabhi. Their potential depends on local conditions, practical feasibility, community participation, and applicable approvals.",
      },
      {
        heading: "A long-term view",
        body: "Responsible development requires careful choices rather than unverified claims. No environmental savings, completed investments, or operating projects are asserted in this illustrative article.",
      },
    ],
  },
];
export const milestones = [
  {
    label: "2023",
    title: "The beginning of a shared ambition.",
    text: "Society registration dated 12 October 2023, as stated in the client brief.",
    status: "Registration milestone",
  },
  {
    label: "Future direction",
    title: "Strengthening dairy development.",
    text: "A focus on dairy-sector development, farmer welfare, and relevant modern technologies.",
    status: "Organizational objective",
  },
  {
    label: "Proposed initiatives",
    title: "Exploring new possibilities.",
    text: "Ideas across renewable energy, rural tourism, and animal healthcare, subject to feasibility and approvals.",
    status: "Conceptual direction",
  },
  {
    label: "Long-term vision",
    title: "Growing with responsibility.",
    text: "A shared ambition for sustainable development and lasting opportunities for farming communities.",
    status: "Illustrative future vision",
  },
];
