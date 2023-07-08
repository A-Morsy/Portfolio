import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    rails,
    docker,
    cooing,
    gochat247,
    enbd,
    expleo,
    sehatech,
    gocar,
    gawla,
    booking,
    admin,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "rails",
      icon: rails,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Java Developer - Fintech",
      company_name: "GoChat247",
      icon: gochat247,
      iconBg: "#383E56",
      date: "July 2018 - August 2018",
      points: [
        "Developed a Java-based financial calculator as a Full Stack Developer.",
        "Enabled the finance team to generate monthly statistics on revenue, expenses, cancelled transactions (debit and credit), and profit.",
        "Provided managers with insights into total transactions, transaction types, and amounts, as well as client details.",
        "Implemented clustering techniques to enhance data analysis and provide deeper insights.",
        "Empowered the team to make informed decisions, target a wider audience, and optimize financial operations.",
        ],
    },
    {
      title: "IT Department - Intern",
      company_name: "Emirates NBD",
      icon: enbd,
      iconBg: "#383E56",
      date: "July 2019 - December 2019",
      points: [
        "Gained comprehensive knowledge and hands-on experience across various IT supporting teams at Emirates NBD.",
        "Collaborated with teams in development, operations, project management, ATM, and core network.",
        "Acquired insights into agile methodologies and efficient project management practices.",
        "Developed a deeper understanding of database management and its role in maintaining a robust IT infrastructure.",
        "Obtained a well-rounded understanding of IT operations in a banking environment.",
        ],
    },
    {
      title: "Full-Stack Engineer - Blockchain",
      company_name: "Expleo Group",
      icon: expleo,
      iconBg: "#E6DEDD",
      date: "January 2021 - February 2022",
      points: [
        "Developed and designed a cutting-edge communication software for Expleo Group, leveraging my Full-Stack development skills in React, Node.js, GoLang, Docker, Kafka and Hyperledger Fabric.",
        "Utilized blockchain technology, specifically Hyperledger Fabric from the Linux Foundation, to create a secure and decentralized network for Expleo Group's B2B workflows.",
        "Implemented robust blockchain logic to enhance the security and privacy of classified business documents shared among Expleo Group and its partners.",
        "Collaborated closely with the Expleo team to understand their unique business requirements and successfully translated them into an efficient and user-friendly software solution.",
        "Contributed to the development and maintenance of the software, ensuring seamless integration of blockchain technology and providing a reliable platform for secure document exchange.",
        ],
      },
    {
      title: "Flutter Mobile Developer",
      company_name: "SehaTech",
      icon: sehatech,
      iconBg: "#383E56",
      date: "July 2021 - December 2023",
      points: [
        "Played a pivotal role as a Mobile Developer at SehaTech, utilizing Flutter framework to successfully develop and launch a Minimum Viable Product (MVP) mobile app.",
        "The app's exceptional performance and functionality led to the company securing angel funding, validating its potential in the market.",
        "Collaborated closely with cross-functional teams, including designers, product managers, and fellow developers, to ensure a seamless and user-friendly app experience.",
        "Contributed to the app's design, development, and testing phases, ensuring high-quality code and adherence to industry best practices.",
        ],
    },
    {
      title: "Full-Stack Engineer",
      company_name: "Nawy",
      icon: cooing,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "As a Full-Stack Engineer at Nawy, I contributed in enhancing the CRM system by addressing bugs, optimizing performance, and implementing new features for our sales agents and managers.",
        "Collaborate closely with cross-functional teams to develop and deploy new code, ensuring seamless integration and successful project outcomes.",
        "Taking a leadership role in the development of a sales portal automation project, aimed at streamlining finance team operations and improving overall efficiency.",
        "Utilize a diverse tech stack, including React.js, Ruby on Rails, PostgreSQL, AWS, Typescript, and Nest.js, to deliver high-quality solutions that meet business requirements.",
        "Continuously improve my skills in software development, staying updated with the latest industry trends and best practices to drive innovation and deliver exceptional results.",
        ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Booking.com - Clone",
      description:
        "During my free time, I dedicated myself to expanding my knowledge of web development by creating a Booking.com clone. This project allowed me to delve deeper into various technologies and gain hands-on experience in building a robust and user-friendly booking platform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "white-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: booking,
      source_code_link: "https://github.com/",
    },
        
    {
      name: "Admin Dashboard",
      description:
        "A comprehensive admin dashboard, empowering admins to efficiently track and manage users while providing insightful statistics on orders, earnings, revenue, and more. This invaluable tool supports commercial businesses in effectively managing their resources and optimizing operations for enhanced success.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "white-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        
      ],
      image: admin,
      source_code_link: "https://github.com/",
    },
    {
      name: "GO Car - Clone",
      description:
        "Introducing our innovative university project, a user-friendly car rental platform that revolutionizes short-term car rentals. Seamlessly integrating with Google Maps and other powerful APIs, this project enables users to effortlessly rent a car for their specific needs. Unlocking the convenience of easy navigation and offering valuable features, it enhances the rental experience while providing a streamlined solution for on-demand transportation.",
      tags: [
        {
          name: "flutter",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "blue-text-gradient",
        },  
      ],
      image: gocar,
      source_code_link: "https://github.com/",
    },
    {
      name: "Gawla Tour Guide",
      description:
        " Aimed at transforming the visitor experience at the Egyptian Museum. My primary focus was on designing and delivering the captivating web site for an Intelligent Profile Based Tour guide app.By leveraging advanced technologies and incorporating historical interests and preferences, this app empowered visitors to personalize their museum journey,  It was a rewarding experience to be part of a team dedicated to enhancing the exploration of historical artifacts and creating unforgettable museum experiences.",
      tags: [
        {
          name: "dart",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        
      ],
      image: gawla,
      source_code_link: "https://github.com/",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };