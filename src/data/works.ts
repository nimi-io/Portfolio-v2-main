export interface IWork {
  name: string;
  description: string;
  stack?: string;
  github?: string;
  live?: string;
}
export const Works: Array<IWork> = [
  {
    name: "Figorr Enterprise App v2",
    description:
      "Gricd Enterpris application backend to allow users to register, login. create and search for groups and its members aswell as monitor in device parameters in realtime",
    stack: "Nestjs, Redis, Apache Kafka, Express and Mongodb",
    github: "enterprise.figorr.com",
    live: "enterprise.figorr.com",
  },
  {
    name: "Liscence Managment System(Backend) ",
    description:
      "A License Management System (LMS) Backend is the core software infrastructure responsible for issuing, tracking, and enforcing software licenses to ensure compliance and protect intellectual property.",
    stack: "Nodejs, Express, MongoDB",
    live: "https://rororeg.com/",
  },
  {
    name: "User Bank System",
    description:
      "User banking system backend to create accounts, fund account, transfer and withdraw from account",
    stack: "ExpressJS and Postgres",
    github: "", //"https://github.com/iamug/User-Bank-System",
    live: "", //"https://user-bank-system.herokuapp.com/",
  },
  {
    name: "Gricd Enterprise App v1",
    description:
      "Gricd Enterpris application backend to allow users to register, login. create and search for groups and its members aswell as monito in device parameters in realtime",
    stack: "NodeJs, Express and Mongodb",
    github: "enterprise.gricd.com",
    live: "enterprise.gricd.com",
  },
  // {
  //   name: "Find Talents App",
  //   description:
  //     "Frontend application to view talents including saving the profile of a talent",
  //   stack: "React, RTK Query, Bootstrap",
  //   github: "https://github.com/iamug/Find-Talents",
  //   live: "https://iamug.github.io/Find-Talents/",
  // },
  // {
  //   name: "Event Menu App",
  //   description:
  //     "Event menu application that enables users to create a menu and share a unique link and track orders from different tables using a QRCode ",
  //   stack: "Express, MongoDB , React, Chakra UI, RSuite",
  //   github: "https://github.com/iamug/Restaurant-menu",
  //   live: "https://app.baretag.co",
  // },
  // {
  //   name: "Ride Sharing App Admin Dashboard ",
  //   description:
  //     "Admin panel to manage users, drivers, vehicles , transactions for a ride sharing app with Role Based Access Control and Activity Logs ",
  //   stack: "Nodejs, Express, MongoDB , React, Bootstrap 5, RSuite",
  //   live: "https://admin.commute.ng",
  // },

  // {
  //   name: "ExpressWebJS Website ",
  //   description: "Website design for an open source Nodejs backend framework",
  //   stack: "Reactjs, Bootstrap 5",
  //   live: "https://expresswebjs.com/",
  // },
  // {
  //   name: "Attendance Managment App (Frontend)",
  //   description:
  //     "App to track clockins and clock outs of employees with reporting to show attendance by days, weeks etc",
  //   stack: "Reactjs, Redux, Material UI",
  //   github: "https://github.com/iamug/Attendance-Management-System-Frontend/",
  //   live: "https://iamug.github.io/Attendance-Management-System-Frontend/",
  // },
  // {
  //   name: "Attendance Managment App (Backend)",
  //   description:
  //     "App to track clockins and clock outs of employees with reporting to show attendance by days, weeks etc",
  //   stack: "ExpressWebJs, MongoDb",
  //   github: "https://github.com/iamug/Attendance-Management-System-Backend",
  // },
  // {
  //   name: "React Advice App",
  //   description: "React App to generate Advice",
  //   stack: "Reactjs",
  //   github: "https://github.com/iamug/react-advice-app/",
  //   live: "https://iamug.github.io/react-advice-app/",
  // },
  // {
  //   name: "Lagos Livable City Conference Website ",
  //   description:
  //     "Website for Lagos Livable City Conference including portal for registrations and integration with Notion.",
  //   stack: "Bootstrap, Express, MongoDB, Notion API",
  //   live: "http://lagoslivablecity.com/",
  // },
  // {
  //   name: "Lagos State Ministry of Health Website ",
  //   description: "Website for Lagos State Ministry of Health (Lagos MiND) ",
  //   stack: "WordPress",
  //   live: "http://lagosmind.org/",
  // },
  // {
  //   name: "AlliedRx Pharmacy Website ",
  //   description:
  //     "Website for AlliedRx Pharmacy with a protal to manage prescription refills and transfers",
  //   stack: "WordPress",
  //   live: "https://alliedrxpharmacy.com/",
  // },
  // {
  //   name: "Private Sector Health Alliance of Nigeria Website ",
  //   description: "Website for Private Sector Health Alliance of Nigeria.",
  //   stack: "WordPress",
  //   live: "https://pshan.org/",
  // },
  // {
  //   name: "Scrap Bank Africa Website ",
  //   description: "Website for Scrap Bank Africa ",
  //   stack: "WordPress",
  //   live: "https://scrapbankafrica.com/",
  // },
  // {
  //   name: "Mos Kreative Kitchen Website ",
  //   description: "Website for food vendor Mos Kreative Kitchen ",
  //   stack: "WordPress",
  //   live: "https://portfolio.ugochukwu.dev/moskreativekitchen/",
  // },
];
