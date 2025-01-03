import { Vendor } from "../models/vendor.model";

export const vendors: Vendor[] = [
  {
    id: 1,
    projectId: 1,
    vendorName: "Vendor A",
    assignee: "John Doe",
    vendorProvides: "Consulting Services",
    website: "www.vendora.com",
    vendorContactPerson: "Jane Smith",
    reviewResult: "Positive",
    reviewStatus: "Completed",
    reviewer: "Bob Johnson",
    riskStatus: "Not active",
    reviewDate: new Date("2023-05-15"),
    riskDescription: "Limited experience with new technology",
    impactDescription: "Potential delays in project timeline",
    impact: 3,
    probability: 0.4,
    actionOwner: "Alice Williams",
    actionPlan: "Provide additional training",
    riskSeverity: 2,
    riskLevel: "Low risk",
    likelihood: 0.5,
  },
  {
    id: 2,
    projectId: 2,
    vendorName: "Vendor B",
    assignee: "Emily Clark",
    vendorProvides: "Software Development",
    website: "www.vendorb.com",
    vendorContactPerson: "Michael Brown",
    reviewResult: "Neutral",
    reviewStatus: "In Progress",
    reviewer: "Sarah Davis",
    riskStatus: "Under review",
    reviewDate: new Date("2023-06-20"),
    riskDescription: "High turnover rate",
    impactDescription: "Possible disruption in service",
    impact: 4,
    probability: 0.6,
    actionOwner: "David Wilson",
    actionPlan: "Implement retention strategies",
    riskSeverity: 3,
    riskLevel: "Medium risk",
    likelihood: 0.6,
  },
  {
    id: 3,
    projectId: 3,
    vendorName: "Vendor C",
    assignee: "James White",
    vendorProvides: "IT Support",
    website: "www.vendorc.com",
    vendorContactPerson: "Laura Green",
    reviewResult: "Negative",
    reviewStatus: "Pending",
    reviewer: "Chris Martin",
    riskStatus: "Active",
    reviewDate: new Date("2023-07-10"),
    riskDescription: "Lack of expertise in critical areas",
    impactDescription: "Significant impact on project quality",
    impact: 5,
    probability: 0.8,
    actionOwner: "Patricia Taylor",
    actionPlan: "Hire additional experts",
    riskSeverity: 4,
    riskLevel: "High risk",
    likelihood: 0.7,
  },
  {
    id: 4,
    projectId: 1,
    vendorName: "Vendor D",
    assignee: "Olivia Harris",
    vendorProvides: "Marketing Services",
    website: "www.vendord.com",
    vendorContactPerson: "Ethan Lewis",
    reviewResult: "Positive",
    reviewStatus: "Completed",
    reviewer: "Sophia Walker",
    riskStatus: "Not active",
    reviewDate: new Date("2023-08-01"),
    riskDescription: "Limited market reach",
    impactDescription: "Reduced campaign effectiveness",
    impact: 2,
    probability: 0.3,
    actionOwner: "Liam Robinson",
    actionPlan: "Expand market research",
    riskSeverity: 1,
    riskLevel: "Low risk",
    likelihood: 0.4,
  },
  {
    id: 5,
    projectId: 2,
    vendorName: "Vendor E",
    assignee: "Ava Martinez",
    vendorProvides: "Financial Services",
    website: "www.vendore.com",
    vendorContactPerson: "Mason Clark",
    reviewResult: "Neutral",
    reviewStatus: "In Progress",
    reviewer: "Isabella Rodriguez",
    riskStatus: "Under review",
    reviewDate: new Date("2023-09-15"),
    riskDescription: "Regulatory compliance issues",
    impactDescription: "Potential legal consequences",
    impact: 4,
    probability: 0.5,
    actionOwner: "Lucas Lewis",
    actionPlan: "Conduct compliance audit",
    riskSeverity: 3,
    riskLevel: "Medium risk",
    likelihood: 0.5,
  },
  {
    id: 6,
    projectId: 3,
    vendorName: "Vendor F",
    assignee: "William Lee",
    vendorProvides: "HR Services",
    website: "www.vendorf.com",
    vendorContactPerson: "Amelia Young",
    reviewResult: "Negative",
    reviewStatus: "Pending",
    reviewer: "Mia King",
    riskStatus: "Active",
    reviewDate: new Date("2023-10-05"),
    riskDescription: "Poor employee satisfaction",
    impactDescription: "High employee turnover",
    impact: 5,
    probability: 0.7,
    actionOwner: "James Scott",
    actionPlan: "Improve employee engagement",
    riskSeverity: 4,
    riskLevel: "High risk",
    likelihood: 0.6,
  },
  {
    id: 7,
    projectId: 1,
    vendorName: "Vendor G",
    assignee: "Benjamin Hall",
    vendorProvides: "Logistics",
    website: "www.vendorg.com",
    vendorContactPerson: "Charlotte Allen",
    reviewResult: "Positive",
    reviewStatus: "Completed",
    reviewer: "Harper Wright",
    riskStatus: "Not active",
    reviewDate: new Date("2023-11-12"),
    riskDescription: "Supply chain disruptions",
    impactDescription: "Delayed deliveries",
    impact: 3,
    probability: 0.4,
    actionOwner: "Elijah Hill",
    actionPlan: "Diversify suppliers",
    riskSeverity: 2,
    riskLevel: "Low risk",
    likelihood: 0.5,
  },
  {
    id: 8,
    projectId: 1,
    vendorName: "Vendor H",
    assignee: "Lucas Green",
    vendorProvides: "Legal Services",
    website: "www.vendorh.com",
    vendorContactPerson: "Evelyn Adams",
    reviewResult: "Neutral",
    reviewStatus: "In Progress",
    reviewer: "Aiden Baker",
    riskStatus: "Under review",
    reviewDate: new Date("2023-12-01"),
    riskDescription: "Contractual disputes",
    impactDescription: "Potential legal battles",
    impact: 4,
    probability: 0.6,
    actionOwner: "Henry Nelson",
    actionPlan: "Review contract terms",
    riskSeverity: 3,
    riskLevel: "Medium risk",
    likelihood: 0.5,
  },
  {
    id: 9,
    projectId: 1,
    vendorName: "Vendor I",
    assignee: "Alexander Carter",
    vendorProvides: "Security Services",
    website: "www.vendori.com",
    vendorContactPerson: "Abigail Mitchell",
    reviewResult: "Negative",
    reviewStatus: "Pending",
    reviewer: "Sebastian Perez",
    riskStatus: "Active",
    reviewDate: new Date("2024-01-15"),
    riskDescription: "Security breaches",
    impactDescription: "Data loss",
    impact: 5,
    probability: 0.8,
    actionOwner: "Jack Roberts",
    actionPlan: "Enhance security protocols",
    riskSeverity: 4,
    riskLevel: "High risk",
    likelihood: 0.7,
  },
  {
    id: 10,
    projectId: 1,
    vendorName: "Vendor J",
    assignee: "Daniel Turner",
    vendorProvides: "Cleaning Services",
    website: "www.vendorj.com",
    vendorContactPerson: "Sofia Phillips",
    reviewResult: "Positive",
    reviewStatus: "Completed",
    reviewer: "Matthew Campbell",
    riskStatus: "Not active",
    reviewDate: new Date("2024-02-20"),
    riskDescription: "Inconsistent service quality",
    impactDescription: "Unsatisfactory cleanliness",
    impact: 2,
    probability: 0.3,
    actionOwner: "David Parker",
    actionPlan: "Implement quality checks",
    riskSeverity: 1,
    riskLevel: "Low risk",
    likelihood: 0.4,
  },
  {
    id: 11,
    projectId: 1,
    vendorName: "Vendor K",
    assignee: "Joseph Edwards",
    vendorProvides: "Catering Services",
    website: "www.vendork.com",
    vendorContactPerson: "Grace Collins",
    reviewResult: "Neutral",
    reviewStatus: "In Progress",
    reviewer: "Samuel Stewart",
    riskStatus: "Under review",
    reviewDate: new Date("2024-03-10"),
    riskDescription: "Food safety concerns",
    impactDescription: "Health risks",
    impact: 4,
    probability: 0.5,
    actionOwner: "Andrew Morris",
    actionPlan: "Conduct safety inspections",
    riskSeverity: 3,
    riskLevel: "Medium risk",
    likelihood: 0.5,
  },
  {
    id: 12,
    projectId: 1,
    vendorName: "Vendor L",
    assignee: "Christopher Hughes",
    vendorProvides: "Event Management",
    website: "www.vendorl.com",
    vendorContactPerson: "Ella Murphy",
    reviewResult: "Negative",
    reviewStatus: "Pending",
    reviewer: "Anthony Cook",
    riskStatus: "Active",
    reviewDate: new Date("2024-04-05"),
    riskDescription: "Poor event coordination",
    impactDescription: "Event failure",
    impact: 5,
    probability: 0.7,
    actionOwner: "Joshua Rogers",
    actionPlan: "Hire experienced coordinators",
    riskSeverity: 4,
    riskLevel: "High risk",
    likelihood: 0.6,
  },
  {
    id: 13,
    projectId: 1,
    vendorName: "Vendor M",
    assignee: "Thomas Bell",
    vendorProvides: "Graphic Design",
    website: "www.vendorm.com",
    vendorContactPerson: "Chloe Bailey",
    reviewResult: "Positive",
    reviewStatus: "Completed",
    reviewer: "Ryan Cooper",
    riskStatus: "Not active",
    reviewDate: new Date("2024-05-15"),
    riskDescription: "Design inconsistencies",
    impactDescription: "Brand image issues",
    impact: 3,
    probability: 0.4,
    actionOwner: "Nathan Reed",
    actionPlan: "Standardize design guidelines",
    riskSeverity: 2,
    riskLevel: "Low risk",
    likelihood: 0.5,
  },
  {
    id: 14,
    projectId: 1,
    vendorName: "Vendor N",
    assignee: "Charles Ward",
    vendorProvides: "Translation Services",
    website: "www.vendorn.com",
    vendorContactPerson: "Zoey Gray",
    reviewResult: "Neutral",
    reviewStatus: "In Progress",
    reviewer: "Christian Ramirez",
    riskStatus: "Under review",
    reviewDate: new Date("2024-06-20"),
    riskDescription: "Translation errors",
    impactDescription: "Miscommunication",
    impact: 4,
    probability: 0.5,
    actionOwner: "Jonathan James",
    actionPlan: "Implement quality assurance",
    riskSeverity: 3,
    riskLevel: "Medium risk",
    likelihood: 0.5,
  },
  {
    id: 15,
    projectId: 1,
    vendorName: "Vendor O",
    assignee: "Aaron Torres",
    vendorProvides: "Photography",
    website: "www.vendoro.com",
    vendorContactPerson: "Layla Ramirez",
    reviewResult: "Negative",
    reviewStatus: "Pending",
    reviewer: "Gabriel Peterson",
    riskStatus: "Active",
    reviewDate: new Date("2024-07-10"),
    riskDescription: "Poor photo quality",
    impactDescription: "Unusable photos",
    impact: 5,
    probability: 0.7,
    actionOwner: "Dylan Howard",
    actionPlan: "Hire professional photographers",
    riskSeverity: 4,
    riskLevel: "High risk",
    likelihood: 0.6,
  },
  {
    id: 16,
    projectId: 1,
    vendorName: "Vendor P",
    assignee: "Ethan Brooks",
    vendorProvides: "Consulting Services",
    website: "www.vendorp.com",
    vendorContactPerson: "Lily Foster",
    reviewResult: "Positive",
    reviewStatus: "Completed",
    reviewer: "Zoe Sanders",
    riskStatus: "Not active",
    reviewDate: new Date("2024-08-15"),
    riskDescription: "Limited industry knowledge",
    impactDescription: "Potential project delays",
    impact: 3,
    probability: 0.4,
    actionOwner: "Owen Jenkins",
    actionPlan: "Provide industry training",
    riskSeverity: 2,
    riskLevel: "Low risk",
    likelihood: 0.5,
  },
  {
    id: 17,
    projectId: 1,
    vendorName: "Vendor Q",
    assignee: "Mason Perry",
    vendorProvides: "Software Development",
    website: "www.vendorq.com",
    vendorContactPerson: "Hannah Bryant",
    reviewResult: "Neutral",
    reviewStatus: "In Progress",
    reviewer: "Liam Russell",
    riskStatus: "Under review",
    reviewDate: new Date("2024-09-20"),
    riskDescription: "High defect rate",
    impactDescription: "Increased maintenance costs",
    impact: 4,
    probability: 0.6,
    actionOwner: "Avery Griffin",
    actionPlan: "Improve testing processes",
    riskSeverity: 3,
    riskLevel: "Medium risk",
    likelihood: 0.6,
  },
  {
    id: 18,
    projectId: 1,
    vendorName: "Vendor R",
    assignee: "Logan Hayes",
    vendorProvides: "IT Support",
    website: "www.vendorR.com",
    vendorContactPerson: "Samantha Price",
    reviewResult: "Negative",
    reviewStatus: "Pending",
    reviewer: "Ella Bennett",
    riskStatus: "Active",
    reviewDate: new Date("2024-10-10"),
    riskDescription: "Slow response times",
    impactDescription: "Operational disruptions",
    impact: 5,
    probability: 0.8,
    actionOwner: "Jack Barnes",
    actionPlan: "Increase support staff",
    riskSeverity: 4,
    riskLevel: "High risk",
    likelihood: 0.7,
  },
  {
    id: 19,
    projectId: 1,
    vendorName: "Vendor S",
    assignee: "Lucas Powell",
    vendorProvides: "Marketing Services",
    website: "www.vendorS.com",
    vendorContactPerson: "Grace Hughes",
    reviewResult: "Positive",
    reviewStatus: "Completed",
    reviewer: "Mia Flores",
    riskStatus: "Not active",
    reviewDate: new Date("2024-11-01"),
    riskDescription: "Limited campaign reach",
    impactDescription: "Reduced brand visibility",
    impact: 2,
    probability: 0.3,
    actionOwner: "Henry Butler",
    actionPlan: "Expand marketing channels",
    riskSeverity: 1,
    riskLevel: "Low risk",
    likelihood: 0.4,
  },
  {
    id: 20,
    projectId: 1,
    vendorName: "Vendor T",
    assignee: "Benjamin Reed",
    vendorProvides: "Financial Services",
    website: "www.vendorT.com",
    vendorContactPerson: "Emily Jenkins",
    reviewResult: "Neutral",
    reviewStatus: "In Progress",
    reviewer: "Sophia Perry",
    riskStatus: "Under review",
    reviewDate: new Date("2024-12-15"),
    riskDescription: "Financial instability",
    impactDescription: "Potential service disruption",
    impact: 4,
    probability: 0.5,
    actionOwner: "David Coleman",
    actionPlan: "Conduct financial audit",
    riskSeverity: 3,
    riskLevel: "Medium risk",
    likelihood: 0.5,
  },
  {
    id: 21,
    projectId: 1,
    vendorName: "Vendor U",
    assignee: "William Howard",
    vendorProvides: "HR Services",
    website: "www.vendorU.com",
    vendorContactPerson: "Olivia Foster",
    reviewResult: "Negative",
    reviewStatus: "Pending",
    reviewer: "Ava Ward",
    riskStatus: "Active",
    reviewDate: new Date("2025-01-05"),
    riskDescription: "High employee turnover",
    impactDescription: "Operational inefficiencies",
    impact: 5,
    probability: 0.7,
    actionOwner: "James Bailey",
    actionPlan: "Improve employee retention",
    riskSeverity: 4,
    riskLevel: "High risk",
    likelihood: 0.6,
  },
  {
    id: 22,
    projectId: 1,
    vendorName: "Vendor V",
    assignee: "Alexander Carter",
    vendorProvides: "Logistics",
    website: "www.vendorV.com",
    vendorContactPerson: "Isabella Mitchell",
    reviewResult: "Positive",
    reviewStatus: "Completed",
    reviewer: "Sebastian Perez",
    riskStatus: "Not active",
    reviewDate: new Date("2025-02-12"),
    riskDescription: "Supply chain disruptions",
    impactDescription: "Delayed deliveries",
    impact: 3,
    probability: 0.4,
    actionOwner: "Jack Roberts",
    actionPlan: "Diversify suppliers",
    riskSeverity: 2,
    riskLevel: "Low risk",
    likelihood: 0.5,
  },
  {
    id: 23,
    projectId: 1,
    vendorName: "Vendor W",
    assignee: "Daniel Turner",
    vendorProvides: "Legal Services",
    website: "www.vendorW.com",
    vendorContactPerson: "Sofia Phillips",
    reviewResult: "Neutral",
    reviewStatus: "In Progress",
    reviewer: "Matthew Campbell",
    riskStatus: "Under review",
    reviewDate: new Date("2025-03-01"),
    riskDescription: "Contractual disputes",
    impactDescription: "Potential legal battles",
    impact: 4,
    probability: 0.6,
    actionOwner: "David Parker",
    actionPlan: "Review contract terms",
    riskSeverity: 3,
    riskLevel: "Medium risk",
    likelihood: 0.5,
  },
  {
    id: 24,
    projectId: 1,
    vendorName: "Vendor X",
    assignee: "Joseph Edwards",
    vendorProvides: "Security Services",
    website: "www.vendorX.com",
    vendorContactPerson: "Grace Collins",
    reviewResult: "Negative",
    reviewStatus: "Pending",
    reviewer: "Samuel Stewart",
    riskStatus: "Active",
    reviewDate: new Date("2025-04-15"),
    riskDescription: "Security breaches",
    impactDescription: "Data loss",
    impact: 5,
    probability: 0.8,
    actionOwner: "Andrew Morris",
    actionPlan: "Enhance security protocols",
    riskSeverity: 4,
    riskLevel: "High risk",
    likelihood: 0.7,
  },
  {
    id: 25,
    projectId: 1,
    vendorName: "Vendor Y",
    assignee: "Christopher Hughes",
    vendorProvides: "Cleaning Services",
    website: "www.vendorY.com",
    vendorContactPerson: "Ella Murphy",
    reviewResult: "Positive",
    reviewStatus: "Completed",
    reviewer: "Anthony Cook",
    riskStatus: "Not active",
    reviewDate: new Date("2025-05-20"),
    riskDescription: "Inconsistent service quality",
    impactDescription: "Unsatisfactory cleanliness",
    impact: 2,
    probability: 0.3,
    actionOwner: "Joshua Rogers",
    actionPlan: "Implement quality checks",
    riskSeverity: 1,
    riskLevel: "Low risk",
    likelihood: 0.4,
  },
  {
    id: 26,
    projectId: 1,
    vendorName: "Vendor Z",
    assignee: "Thomas Bell",
    vendorProvides: "Catering Services",
    website: "www.vendorZ.com",
    vendorContactPerson: "Chloe Bailey",
    reviewResult: "Neutral",
    reviewStatus: "In Progress",
    reviewer: "Ryan Cooper",
    riskStatus: "Under review",
    reviewDate: new Date("2025-06-10"),
    riskDescription: "Food safety concerns",
    impactDescription: "Health risks",
    impact: 4,
    probability: 0.5,
    actionOwner: "Nathan Reed",
    actionPlan: "Conduct safety inspections",
    riskSeverity: 3,
    riskLevel: "Medium risk",
    likelihood: 0.5,
  },
  {
    id: 27,
    projectId: 1,
    vendorName: "Vendor AA",
    assignee: "Charles Ward",
    vendorProvides: "Event Management",
    website: "www.vendorAA.com",
    vendorContactPerson: "Zoey Gray",
    reviewResult: "Negative",
    reviewStatus: "Pending",
    reviewer: "Christian Ramirez",
    riskStatus: "Active",
    reviewDate: new Date("2025-07-05"),
    riskDescription: "Poor event coordination",
    impactDescription: "Event failure",
    impact: 5,
    probability: 0.7,
    actionOwner: "Jonathan James",
    actionPlan: "Hire experienced coordinators",
    riskSeverity: 4,
    riskLevel: "High risk",
    likelihood: 0.6,
  },
  {
    id: 28,
    projectId: 1,
    vendorName: "Vendor BB",
    assignee: "Aaron Torres",
    vendorProvides: "Graphic Design",
    website: "www.vendorBB.com",
    vendorContactPerson: "Layla Ramirez",
    reviewResult: "Positive",
    reviewStatus: "Completed",
    reviewer: "Gabriel Peterson",
    riskStatus: "Not active",
    reviewDate: new Date("2025-08-15"),
    riskDescription: "Design inconsistencies",
    impactDescription: "Brand image issues",
    impact: 3,
    probability: 0.4,
    actionOwner: "Dylan Howard",
    actionPlan: "Standardize design guidelines",
    riskSeverity: 2,
    riskLevel: "Low risk",
    likelihood: 0.5,
  },
  {
    id: 29,
    projectId: 1,
    vendorName: "Vendor CC",
    assignee: "Ethan Brooks",
    vendorProvides: "Translation Services",
    website: "www.vendorCC.com",
    vendorContactPerson: "Lily Foster",
    reviewResult: "Neutral",
    reviewStatus: "In Progress",
    reviewer: "Zoe Sanders",
    riskStatus: "Under review",
    reviewDate: new Date("2025-09-20"),
    riskDescription: "Translation errors",
    impactDescription: "Miscommunication",
    impact: 4,
    probability: 0.5,
    actionOwner: "Owen Jenkins",
    actionPlan: "Implement quality assurance",
    riskSeverity: 3,
    riskLevel: "Medium risk",
    likelihood: 0.5,
  },
  {
    id: 30,
    projectId: 1,
    vendorName: "Vendor DD",
    assignee: "Mason Perry",
    vendorProvides: "Photography",
    website: "www.vendorDD.com",
    vendorContactPerson: "Hannah Bryant",
    reviewResult: "Negative",
    reviewStatus: "Pending",
    reviewer: "Liam Russell",
    riskStatus: "Active",
    reviewDate: new Date("2025-10-10"),
    riskDescription: "Poor photo quality",
    impactDescription: "Unusable photos",
    impact: 5,
    probability: 0.7,
    actionOwner: "Avery Griffin",
    actionPlan: "Hire professional photographers",
    riskSeverity: 4,
    riskLevel: "High risk",
    likelihood: 0.6,
  },
];
