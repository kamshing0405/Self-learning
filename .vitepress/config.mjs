import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Data Centre Learning",
  description: "Data Centre Knowledge Base",
  lang: "en",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Data Centre", link: "/datacentre/01_Listoflearning" },
      { text: "Google IT Support", link: "/googleitsupport/01_IntrotoIT" },
      {
        text: "Network",
        items: [
          { text: "Network+", link: "/networkplus/01_Overview" },
          { text: "CS 168", link: "/cs168/01_Overview" },
        ],
      },
    ],
    sidebar: {
      "/cs168/": [
        {
          text: "CS 168",
          items: [
            { text: "Overview", link: "/cs168/01_Overview" },
          ],
        },
      ],
      "/networkplus/": [
        {
          text: "Network+",
          items: [
            { text: "Overview", link: "/networkplus/01_Overview" },
            { text: "Networking Concepts", link: "/networkplus/02_NetworkingConcepts" },
            { text: "Network Implementation", link: "/networkplus/03_NetworkImplementation" },
            { text: "Network Operations", link: "/networkplus/04_NetworkOperations" },
            { text: "Network Security", link: "/networkplus/05_NetworkSecurity" },
            { text: "Network Troubleshooting", link: "/networkplus/06_NetworkTroubleshooting" },
            { text: "Acronym List", link: "/networkplus/07_AcronymList" },
          ],
        },
      ],
      "/datacentre/": [
        {
          text: "Data Centre",
          items: [
            { text: "List of learning", link: "/datacentre/01_Listoflearning" },
            { text: "What is data center", link: "/datacentre/02_Whatisdatacentre" },
            { text: "Building design", link: "/datacentre/03_DataCentreDesign" },
            { text: "Cooling", link: "/datacentre/04_Cooling" },
            { text: "Cooling concept", link: "/datacentre/04.01_Coolingconcept" },
            { text: "Cabling", link: "/datacentre/05_Cabling" },
            {
              text: "Power",
              items: [
                { text: "Electrical concepts", link: "/datacentre/06.1_Electrical" },
                { text: "Power Distribution", link: "/datacentre/06.2_PowerDistributionhierarchy" },
              ],
            },
            { text: "Standard", link: "/datacentre/07_Standard" },
            { text: "Physical security", link: "/datacentre/08_PyhsicalSecurity" },
            { text: "Problems may face", link: "/datacentre/09_Problemmayface" },
            { text: "Floor Design", link: "/datacentre/10_floordesign" },
            { text: "Ceiling Design", link: "/datacentre/11_ceilingdesign" },
            { text: "Grounding Design", link: "/datacentre/12_Groundingdesign" },
            { text: "Fire Protection", link: "/datacentre/13_Fireprotection" },
            { text: "Lighting", link: "/datacentre/light" },
            { text: "Certs to get", link: "/datacentre/certtoget" },
          ],
        },
      ],
      "/googleitsupport/": [
        {
          text: "Google IT Support",
          collapsed: true,
          items: [
            { text: "Intro to IT", link: "/googleitsupport/01_IntrotoIT" },
            { text: "Hardware", link: "/googleitsupport/02_hardward" },
            { text: "Operating System", link: "/googleitsupport/03_Operatingsystem" },
            { text: "Networking", link: "/googleitsupport/04_Networking" },
            { text: "Software", link: "/googleitsupport/05_Software" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
