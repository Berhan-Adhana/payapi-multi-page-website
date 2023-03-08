import Tesla from "../assets/shared/desktop/tesla.svg";
// compnies
import Micrsoft from "../assets/shared/desktop/microsoft.svg";
import Hp from "../assets/shared/desktop/hewlett-packard.svg";
import Oracle from "../assets/shared/desktop/oracle.svg";
import Google from "../assets/shared/desktop/google.svg";
import Nvidia from "../assets/shared/desktop/nvidia.svg";

// services
import Finance from "../assets/home/desktop/icon-personal-finances.svg";
import Banking from "../assets/home/desktop/icon-banking-and-coverage.svg";
import Payment from "../assets/home/desktop/icon-consumer-payments.svg";

// for meuns
export const menuLinks = [
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
// companies worked with
export const companies = [
  {
    name: "Tesla",
    logo: Tesla,
  },
  {
    name: "Microsoft",
    logo: Micrsoft,
  },
  {
    name: "Hp",
    logo: Hp,
  },
  {
    name: "Oracle",
    logo: Oracle,
  },
  {
    name: "Google",
    logo: Google,
  },
  {
    name: "Nvidia",
    logo: Nvidia,
  },
];

// Services
export const services = [
  {
    icon: Finance,
    title: "Personal Finances",
    description:
      "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ",
  },
  {
    icon: Banking,
    title: "Banking & Coverage",
    description:
      "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
  },
  {
    icon: Payment,
    title: "Consumer Payments",
    description:
      "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account. ",
  },
];

// Stats
export const stats = [
  {
    title: "Team Members",
    value: "300+",
  },
  {
    title: "Offices in the US",
    value: "3",
  },
  {
    title: "Transactions analyzed",
    value: "10M+",
  },
];

// pricing
export const plans = [
  {
    planType: "Free Plan",
    desc: "Build and test using our core set of products with up to 100 API requests ",
    price: "$0.00",
    features: [
      {
        feature: "Transactions",
        isActive: true,
      },
      {
        feature: "Auth",
        isActive: true,
      },
      {
        feature: "Identity",
        isActive: true,
      },
      {
        feature: "Investments",
        isActive: false,
      },
      {
        feature: "Assets",
        isActive: false,
      },
      {
        feature: "Liabilities",
        isActive: false,
      },
      {
        feature: "Income",
        isActive: false,
      },
    ],
    btn: "Request Access",
  },

  {
    planType: "Basic Plan",
    desc: "Launch your project with unlimited requests and no contractual minimums ",
    price: "$249.00",
    features: [
      {
        feature: "Transactions",
        isActive: true,
      },
      {
        feature: "Auth",
        isActive: true,
      },
      {
        feature: "Identity",
        isActive: true,
      },
      {
        feature: "Investments",
        isActive: true,
      },
      {
        feature: "Assets",
        isActive: true,
      },
      {
        feature: "Liabilities",
        isActive: false,
      },
      {
        feature: "Income",
        isActive: false,
      },
    ],
    btn: "Request Access",
  },
  {
    planType: "Premium Plan",
    desc: "Get tailored solutions, volume pricing, and dedicated support for your team ",
    price: "$499.00",
    features: [
      {
        feature: "Transactions",
        isActive: true,
      },
      {
        feature: "Auth",
        isActive: true,
      },
      {
        feature: "Identity",
        isActive: true,
      },
      {
        feature: "Investments",
        isActive: true,
      },
      {
        feature: "Assets",
        isActive: true,
      },
      {
        feature: "Liabilities",
        isActive: true,
      },
      {
        feature: "Income",
        isActive: true,
      },
    ],
    btn: "Request Access",
  },
];
