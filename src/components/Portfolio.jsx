import React from 'react';

const Portfolio = () => {
  const personalInfo = {
    name: "John Despi",
    title: "Senior Salesforce Developer",
    location: "Cebu City, Philippines",
    phone: "+63 905 351 1640",
    email: "contact@johndespi.dev",
    linkedin: "linkedin.com/in/johndespi",
    summary: "Innovative Software Developer with 7 years of full-stack web development experience, specializing in the Salesforce Platform for the past 5+ years. Proven expertise in designing scalable solutions using LWC, Apex, and Experience Cloud. Strategic thinker and confident communicator adept at translating complex organizational needs into optimized, user-centric software solutions."
  };

  const skills = [
    { category: "Salesforce Platform", items: "Sales Cloud, Service Cloud, Experience Cloud, Administration, Apex, Flows, SOQL/SOSL, SFDX CLI, Vlocity Development, OmniScripts, DataRaptors" },
    { category: "Frontend & Web", items: "Lightning Web Components (LWC), Aura Components, JavaScript, HTML5, CSS, SCSS, VueJS, NodeJS" },
    { category: "Methodologies", items: "Agile Development" }
  ];

  const experiences = [
    {
      company: "CXC Global",
      title: "Salesforce Developer",
      period: "Oct 2025 – Present",
      bullets: [
        "Optimized Salesforce automation by maintaining complex flows, managing version control, and refining field updates within Screen Flows to enhance system efficiency.",
        "Led the development of \"Request for Services\" form templates, streamlining the intake process for user requests and improving business response times.",
        "Executed seamless, high-quality deployments across environments utilizing Copado and GitHub pipelines to ensure code quality and version stability.",
        "Partnered with Project Managers and business stakeholders to gather requirements while concurrently maintaining existing functionalities and troubleshooting critical system bugs."
      ]
    },
    {
      company: "Enrite Solutions",
      title: "Salesforce Developer",
      period: "Apr 2024 – Mar 2025",
      bullets: [
        "Developed and launched a responsive AppExchange application enabling auto-save functionality for records across both desktop and mobile viewports.",
        "Architected and optimized Apex Classes and Test Classes, ensuring high system reliability and robust code coverage adhering to strict best practices.",
        "Configured streamlined deployment processes targeting specific Scratch Orgs, leveraging Salesforce CLI, Change Sets, and VS Code extensions like Hardis.",
        "Integrated Aura Components with Salesforce Flows and Approval Processes to deliver seamless, automated user workflows."
      ]
    },
    {
      company: "OSF Digital",
      title: "Salesforce Developer",
      period: "Jul 2023 – Jan 2024",
      bullets: [
        "Designed and implemented custom LWC components, Apex Classes, and Flows for a New Zealand power company, successfully managing third-party Opportunity and Service Point data.",
        "Performed extensive system configurations, including profile setup, custom object creation, and permission set assignment to meet critical business goals.",
        "Resolved system defects and established scalable architectural approaches using standard SLDS classes and AppExchange solutions to eliminate technical debt."
      ]
    },
    {
      company: "Capgemini",
      title: "Senior Consultant / Consultant",
      period: "Aug 2021 – Jul 2023",
      bullets: [
        "Developed custom Lightning Web Components (LWC) on Salesforce Experience Cloud to optimize high-traffic client portals.",
        "Customized legacy Vlocity Angular components, OmniScripts, DataRaptors, and Flex Cards to support complex business requirements beyond out-of-the-box capabilities.",
        "Maintained a mock API environment server (Heroku, Postman, NodeJS) to facilitate robust testing for OmniScripts and Integration Procedures."
      ]
    },
    {
      company: "Accenture",
      title: "Senior App Development Analyst",
      period: "Dec 2018 – Aug 2021",
      bullets: [
        "Spearheaded UI development for a major Buy Flow web application rebranding, overhauling the user interface for a prominent American ISP client.",
        "Established internal coding standards utilizing LWC and SLDS CSS, resulting in a centralized and highly maintainable codebase.",
        "Engineered reusable LWC and integrated LeafletJS with Google Places API to deliver a real-time serviceability verification tool for user addresses."
      ]
    }
  ];

  const education = [
    "BS Information Technology",
    "Cebu Institute of Technology - University",
    "2013 – 2017"
  ];

  const certifications = [
    "Certified Platform Developer I",
    "Certified Administrator",
    "Certified Platform App Builder",
    "Certified OmniStudio Developer",
    "Certified JavaScript Developer",
    "Vlocity Platform Developer"
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans p-6 md:p-16 lg:p-24 selection:bg-neutral-900 selection:text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Header, Contact, Skills, Education */}
        <div className="lg:col-span-4 space-y-16 lg:sticky lg:top-24">
          
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 mb-3">
              {personalInfo.name}
            </h1>
            <h2 className="text-lg font-medium text-neutral-500">
              {personalInfo.title}
            </h2>
          </div>

          {/* Contact */}
          <div className="space-y-2 text-sm text-neutral-600">
            <p>{personalInfo.location}</p>
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
            <p>{personalInfo.linkedin}</p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Capabilities</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-sm font-medium text-neutral-900 mb-2">{skillGroup.category}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{skillGroup.items}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Background</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-medium text-neutral-900 mb-2">Education</h4>
                {education.map((line, index) => (
                  <p key={index} className="text-sm text-neutral-500">{line}</p>
                ))}
              </div>
              <div>
                <h4 className="text-sm font-medium text-neutral-900 mb-2">Certifications</h4>
                <ul className="text-sm text-neutral-500 space-y-1">
                  {certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Summary, Experience */}
        <div className="lg:col-span-8 space-y-20">
          
          {/* Summary */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Profile</h3>
            <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed font-light">
              {personalInfo.summary}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">Experience</h3>
            
            <div className="space-y-16">
              {experiences.map((job, index) => (
                <div key={index} className="group">
                  <div className="mb-4">
                    <h4 className="text-xl font-medium text-neutral-900">{job.title}</h4>
                    <div className="flex flex-wrap gap-x-2 text-sm text-neutral-500 mt-1">
                      <span>{job.company}</span>
                      <span>—</span>
                      <span>{job.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 text-neutral-600 text-sm md:text-base leading-relaxed">
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex">
                        <span className="text-neutral-300 mr-4 flex-shrink-0">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;