import type { ImageMetadata } from 'astro';

import brine from '@/assets/services/brine-production-water.jpg';
import wellPump from '@/assets/services/well-pump-maintenance.jpg';
import pumping from '@/assets/services/pumping-well-operations.jpg';
import roustabout from '@/assets/services/roustabout.jpg';
import steaming from '@/assets/services/steaming.jpg';
import flowbackWheel from '@/assets/services/flowback-capability-wheel.png';
import plugAbandonment from '@/assets/services/plug-abandonment.jpg';
import cementing from '@/assets/services/cementing.jpg';
import specialistPipe from '@/assets/services/specialist-pipe-handling.jpg';

export interface Capability {
  title: string;
  desc?: string;
}

export interface SubDiscipline {
  title: string;
  body: string[];
  image?: ImageMetadata;
  imageAlt?: string;
}

export interface Service {
  number: string;
  slug: string;
  title: string;
  navTitle: string;
  /** Short taglines exactly as supplied in the PRD. */
  taglines: string[];
  /** One-line summary used on cards and previews. */
  blurb: string;
  metaDescription: string;
  image: ImageMetadata;
  imageAlt: string;
  /** How the key visual behaves — photography vs. supplied diagram. */
  imageMode: 'photo' | 'diagram';
  /** Focal point for cover-cropped photography. */
  objectPosition: string;
  body: string[];
  capabilitiesHeading?: string;
  capabilities: Capability[];
  /** Highlighted differentiators (P&A turnkey model). */
  advantagesHeading?: string;
  advantagesIntro?: string[];
  advantages?: Capability[];
  subDisciplines?: SubDiscipline[];
}

export const services: Service[] = [
  {
    number: '01',
    slug: 'brine-production-water',
    title: 'Brine & Production Water Services',
    navTitle: 'Brine & Production Water',
    taglines: ['Reliable Fluid Management.', 'Safe, Compliant Logistics.'],
    blurb:
      'Comprehensive fluid management and specialized transport across the full fluid lifecycle — hauling, transfer, storage support and disposal logistics.',
    metaDescription:
      'Comprehensive fluid management and specialized transport from United Oilfield Services — production and brine water hauling, fluid transfer, on-site tank support and disposal logistics.',
    image: brine,
    imageAlt:
      'United Oilfield Services brine tanker applying liquid brine to a gravel lease road for dust control and road treatment',
    imageMode: 'photo',
    objectPosition: '50% 55%',
    body: [
      'At United Oilfield Services, we deliver comprehensive fluid management and specialized transport solutions designed to keep all your operations running seamlessly. From managing high-salinity oilfield fluids to seasonal infrastructure maintenance, our specialized transport fleet handles every stage of the fluid lifecycle with strict adherence to environmental regulations.',
      'We combine scheduled reliability with rapid-response capabilities to safeguard your asset integrity, maintain high safety standards, and minimize environmental impact.',
    ],
    capabilitiesHeading: 'Our Full-Service Capabilities',
    capabilities: [
      {
        title: 'Production & Brine Water Hauling',
        desc: 'Safe, specialized transport of production fluids, high-salinity water, and industrial brine with meticulous safety protocols.',
      },
      {
        title: 'Fluid Transfer Services',
        desc: 'Efficient water transfer between approved project locations, managing localized field logistics and fluid displacement securely.',
      },
      {
        title: 'On-Site Tank & Equipment Support',
        desc: 'Complete tactical support for mobile brine storage tanks and distribution systems to optimize fluid accessibility.',
      },
      {
        title: 'Comprehensive Pickup & Disposal Logistics',
        desc: 'Seamless brine water pickup and direct transportation to approved commercial disposal or treatment facilities.',
      },
      {
        title: 'Flexible Operational Scheduling',
        desc: 'Dedicated routing for regular, scheduled brine hauling, along with emergency, same-day hauling based on availability.',
      },
      {
        title: 'Winter Road-Treatment & Dust Control',
        desc: 'High-performance liquid brine application for preventative anti-icing, winter road treatment, and dust control where permitted.',
      },
    ],
  },
  {
    number: '02',
    slug: 'well-pump-maintenance',
    title: 'Well & Pump Maintenance Services',
    navTitle: 'Well & Pump Maintenance',
    taglines: ['Maximizing Mechanical Reliability.', 'Minimizing Operational Downtime.'],
    blurb:
      'Complete well-site mechanical maintenance — inspection, servicing and troubleshooting of production pumps, motors and drive systems.',
    metaDescription:
      'Well-site mechanical maintenance from United Oilfield Services — pump servicing and repairs, motor and gearbox care, drive optimization, lubrication and preventative maintenance programs.',
    image: wellPump,
    imageAlt:
      'Pumpjack operating at a well site serviced under a United Oilfield Services mechanical maintenance program',
    imageMode: 'photo',
    objectPosition: '50% 50%',
    body: [
      'At United Oilfield Services, we provide complete well-site mechanical maintenance designed to preserve asset integrity and prevent costly mechanical failures. Our highly trained technicians specialize in the continuous inspection, servicing, and complex troubleshooting of critical production pumps and electrical motors.',
      'By implementing structured preventative maintenance programs alongside rapid-response emergency troubleshooting, we keep your upstream and midstream operations running at peak mechanical and operational efficiency.',
    ],
    capabilitiesHeading: 'Our Comprehensive Capabilities',
    capabilities: [
      {
        title: 'Core Pump Servicing & Repairs',
        desc: 'Expert pump inspections, precision troubleshooting, full repairs, and component replacements to maintain continuous fluid movement.',
      },
      {
        title: 'Motor & Power Transmission Care',
        desc: 'Rigorous inspection and maintenance of primary pump motors, electric motors, and critical gearbox systems.',
      },
      {
        title: 'Belt, Pulley & Drive Optimization',
        desc: 'Routine belt inspections and replacements, pulley and sheave checks, and precise belt tensioning and alignment.',
      },
      {
        title: 'Bearing & Component Lubrication',
        desc: 'Systematic greasing and lubrication of pumps, motors, and all moving mechanical components to mitigate friction and wear.',
      },
      {
        title: 'Mechanical Inspections & Asset Safety',
        desc: 'Thorough mechanical equipment inspections and comprehensive general well-site maintenance to enforce safety and regulatory compliance.',
      },
      {
        title: 'Preventative & Emergency Programs',
        desc: 'Custom structured preventative maintenance programs to extend asset lifecycles, backed by fast-acting emergency troubleshooting when issues arise.',
      },
    ],
  },
  {
    number: '03',
    slug: 'pumping-well-operations',
    title: 'Pumping & Well Operation Services',
    navTitle: 'Pumping & Well Operations',
    taglines: ['Optimizing Production Yields.', 'Driving Operational Efficiency.'],
    blurb:
      'Lease pumping and daily well management engineered to maximize asset performance, reduce unplanned downtime and hold environmental compliance.',
    metaDescription:
      'Lease pumping and well management from United Oilfield Services — daily pumping operations, routine site checks, troubleshooting, production maintenance and on-call field support.',
    image: pumping,
    imageAlt:
      'United Oilfield Services field operator inspecting a pipeline manifold and valve assembly at a production facility',
    imageMode: 'photo',
    objectPosition: '60% 50%',
    body: [
      'At United Oilfield Services, we deliver comprehensive lease pumping and well management solutions engineered to maximize asset performance and production yields. Our highly skilled field operators combine technical field expertise with proactive asset stewardship to manage your daily upstream production infrastructure smoothly.',
      'By integrating routine mechanical monitoring with structured preventative checks, we reduce unplanned downtime, maintain rigid environmental compliance, and extend the production lifecycle of your assets.',
    ],
    capabilitiesHeading: 'Our Comprehensive Field Capabilities',
    capabilities: [
      {
        title: 'Lease Pumping & Well Services',
        desc: 'Expert, daily management of pumping equipment operation, ensuring stable fluid draw and optimized production support.',
      },
      {
        title: 'Routine Site Checks & Inspections',
        desc: 'Frequent, comprehensive well-site inspections, including production equipment monitoring and strict tank integrity checks.',
      },
      {
        title: 'Asset Troubleshooting & Adjustments',
        desc: 'Fast identification of production anomalies, critical equipment troubleshooting, and seamless startup and shutdown assistance.',
      },
      {
        title: 'Routine Production Maintenance',
        desc: 'Hands-on maintenance of wellhead infrastructure and mechanical equipment to preserve operational continuity.',
      },
      {
        title: 'Site Housekeeping & HSE Compliance',
        desc: 'Meticulous well-site housekeeping and environmental upkeep to satisfy regulatory standards and ensure safe field conditions.',
      },
      {
        title: 'On-Call Production Support',
        desc: 'Reliable, flexible field response teams available to deliver on-call operations support whenever critical demands surface.',
      },
    ],
  },
  {
    number: '04',
    slug: 'roustabout',
    title: 'Roustabout Services',
    navTitle: 'Roustabout',
    taglines: ['Turnkey Roustabout Services.'],
    blurb:
      'One partner across the entire project lifecycle — pad preparation, tank battery and containment installation, painting, electrical, automation and site maintenance.',
    metaDescription:
      'Turnkey roustabout services from United Oilfield Services — pad preparation and dirt work, tank battery and containment installation, painting, electrical, automation, pipe replacement and site maintenance.',
    image: roustabout,
    imageAlt:
      'United Oilfield Services roustabout crew installing wellhead pipework at a lease location',
    imageMode: 'photo',
    objectPosition: '50% 45%',
    body: [
      'At United Oilfield Services, we take pride in being the industry’s leading roustabout service provider, covering your project needs throughout the entire lifecycle. By working with a single partner, you eliminate fragmented contractor networks and drastically streamline your communication and paperwork.',
      'From initial pad preparation and dirt work to tank battery and containment installation, we handle the heavy lifting. Our specialized crews also provide turnkey painting, electrical services, and automation installation, ensuring your assets are modern, safe, and fully integrated.',
      'Whether you are launching a brand-new setup or upgrading an existing location, our ultimate goal is to get your well online in the fastest, most efficient way possible. No job is too large or too small — from routine replacing of pipes and valve change-outs to general fence repair and site maintenance, we provide a full range of reliable oilfield services designed to minimize downtime and keep your operations moving forward.',
    ],
    capabilitiesHeading: 'Scope We Cover',
    capabilities: [
      { title: 'Pad Preparation & Dirt Work' },
      { title: 'Tank Battery Installation' },
      { title: 'Containment Installation' },
      { title: 'Painting' },
      { title: 'Electrical Services' },
      { title: 'Automation Installation' },
      { title: 'Pipe Replacement' },
      { title: 'Valve Change-Outs' },
      { title: 'Fence Repair' },
      { title: 'Site Maintenance' },
    ],
  },
  {
    number: '05',
    slug: 'steaming',
    title: 'Steaming Services',
    navTitle: 'Steaming',
    taglines: ['Specialized Steaming.', 'Cleaning Services.'],
    blurb:
      'High-pressure steaming and industrial cleaning that clears paraffin and scale build-up, restores flow rates and prolongs asset life.',
    metaDescription:
      'High-pressure steaming and industrial cleaning from United Oilfield Services — paraffin and scale removal at wellheads, production lines, storage tanks and gathering pipelines using mobile thermal units.',
    image: steaming,
    imageAlt:
      'United Oilfield Services technician in protective gear high-pressure steam cleaning production equipment',
    imageMode: 'photo',
    objectPosition: '50% 50%',
    body: [
      'At United Oilfield Services, we provide high-pressure steaming and industrial cleaning solutions tailored specifically to maintain the integrity of your upstream and midstream assets. From clearing paraffin and scale build-up at the upstream wellhead and production lines to deep-cleaning midstream storage tanks, facility, and gathering pipelines, our crews ensure peak operational efficiency.',
      'We utilize advanced, mobile thermal units to rapidly dissolve stubborn contaminants, minimize equipment downtime, and restore optimal flow rates. By combining heavy-duty, field-proven technology with strict safety standards, we safely eliminate hazardous residues and prolong the lifespan of your critical infrastructure.',
    ],
    capabilitiesHeading: 'Where We Work',
    capabilities: [
      { title: 'Wellhead Cleaning' },
      { title: 'Production Line Cleaning' },
      { title: 'Storage Tank Cleaning' },
      { title: 'Gathering Pipeline Cleaning' },
      { title: 'Paraffin Removal' },
      { title: 'Scale Removal' },
      { title: 'Facility Cleaning' },
      { title: 'Mobile Thermal Units' },
    ],
  },
  {
    number: '06',
    slug: 'flowback',
    title: 'Flowback Services',
    navTitle: 'Flowback',
    taglines: ['Advanced Flowback & Well Testing Services'],
    blurb:
      'Transitioning wells safely from completion to steady-state production, with well testing support and real-time production and pressure monitoring.',
    metaDescription:
      'Advanced flowback and well testing services from United Oilfield Services — equipment setup, operation and maintenance, well testing support, production monitoring and real-time pressure monitoring.',
    image: flowbackWheel,
    imageAlt:
      'United Oilfield Services flowback services capability wheel: flowback, frac and TCP support, drill out support, well test reporting, data acquisition, and production watch and well tending',
    imageMode: 'diagram',
    objectPosition: '50% 50%',
    body: [
      'At United Oilfield Services, we deliver comprehensive flowback services designed to transition your wells safely and efficiently from completion to steady-state production. Our expert team handles everything from initial flowback equipment setup to rigorous equipment operation and maintenance, ensuring seamless onsite execution.',
      'We provide critical well testing support, continuous production monitoring, and real-time pressure monitoring to gather the high-fidelity reservoir data you need to optimize well performance. Whether managing high-pressure volatile fluids through temporary production services or maintaining tight coordination with drilling and completion crews, we eliminate operational bottlenecks to safeguard your assets and maximize your ROI.',
    ],
    capabilitiesHeading: 'Operational Scope',
    capabilities: [
      { title: 'Flowback Equipment Setup' },
      { title: 'Equipment Operation & Maintenance' },
      { title: 'Well Testing Support' },
      { title: 'Continuous Production Monitoring' },
      { title: 'Real-Time Pressure Monitoring' },
      { title: 'Temporary Production Services' },
      { title: 'Coordination With Drilling & Completion Crews' },
      { title: 'High-Pressure Volatile Fluid Management' },
    ],
  },
  {
    number: '07',
    slug: 'plug-abandonment',
    title: 'P & A Services',
    navTitle: 'Plug & Abandonment',
    taglines: ['Comprehensive Plug & Abandonment Solutions.'],
    blurb:
      'Turnkey decommissioning managed start to finish — safe, fully compliant and cost-effective well closures under a not-to-exceed ceiling.',
    metaDescription:
      'Turnkey Plug and Abandonment solutions from United Oilfield Services — elite expertise, specialized equipment and full project management delivering safe, compliant, cost-effective well closures.',
    image: plugAbandonment,
    imageAlt:
      'Wellhead standing in open grassland, prepared for a United Oilfield Services plug and abandonment project',
    imageMode: 'photo',
    objectPosition: '50% 55%',
    body: [
      'At United Oilfield Services, we provide the elite expertise, specialized equipment, and turnkey management necessary for comprehensive Plug and Abandonment (P&A) solutions. Decommissioning projects demand extreme precision. We look beyond conventional field services to deliver safe, fully compliant, and cost-effective well closures that protect your bottom line and the environment.',
    ],
    advantagesHeading: 'Why Operators Choose Our Turnkey Model',
    advantagesIntro: [
      'Exploration companies and regulatory agencies face mounting pressure to plug wells quickly, safely, and affordably. Traditional fragmented contractor networks often drive up hidden costs or compromise on safety. We solve these industry pain points by managing your entire project from start to finish.',
    ],
    advantages: [
      {
        title: 'Predictable Budgeting',
        desc: 'We eliminate financial risk by establishing a strict, not-to-exceed spending ceiling.',
      },
      {
        title: 'In-House Efficiency',
        desc: 'By minimizing third-party subcontractors, we keep your project strictly on schedule.',
      },
      {
        title: 'Flawless Execution',
        desc: 'Seamless data-sharing across our specialized teams prevents communication breakdowns.',
      },
      {
        title: 'Safety First',
        desc: 'Every operation is anchored in rigorous environmental stewardship and zero-shortcut safety standards.',
      },
    ],
    capabilities: [],
  },
  {
    number: '08',
    slug: 'specialist-disciplines',
    title: 'Supporting Specialist Disciplines',
    navTitle: 'Specialist Disciplines',
    taglines: ['Cementing · Wireline Support · Casing & Capping'],
    blurb:
      'Cementing, wireline support and casing & capping — delivered in-house to keep decommissioning projects on schedule.',
    metaDescription:
      'Supporting specialist disciplines from United Oilfield Services — cementing for plug and abandonment, wireline support services, and casing and capping for permanent wellbore sealing.',
    image: specialistPipe,
    imageAlt:
      'A crew member in a hard hat and safety glasses handling a stack of casing joints on a lease',
    imageMode: 'photo',
    objectPosition: '50% 42%',
    body: [],
    capabilities: [],
    subDisciplines: [
      {
        title: 'Cementing',
        image: cementing,
        imageAlt:
          'Cement flowing from a mixing chute during a United Oilfield Services cementing operation',
        body: [
          'Specialized cementing solutions designed specifically for plug and abandonment projects, enhancing well integrity with precision and long-term durability.',
          'United Oilfield Services offers specialized cementing solutions meticulously engineered for plug and abandonment (P&A) projects, enhancing well integrity with precision and long-term durability. To ensure a seamless execution, our dedicated team assists with complete well-site preparation, equipment support, fluid handling, and pumping operations.',
          'From initial setup to final operational cleanup, we handle the critical logistics and ground support required to execute every cementing job safely, efficiently, and in strict compliance with industry standards.',
        ],
      },
      {
        title: 'Wireline Support Services',
        body: [
          'United Oilfield Services provides comprehensive well-site support and dedicated manpower for wireline operations. Our capabilities include precise equipment handling, rig-up and rig-down assistance, and complete fluid and location logistics support.',
          'Built on operational flexibility, our team works seamlessly alongside primary service companies, adapting directly to their specific technical requirements and field procedures to ensure a safe, efficient job.',
        ],
      },
      {
        title: 'Casing & Capping Services',
        body: [
          'United Oilfield Services provides expert casing and capping solutions designed to seal wellbores permanently and protect environmental integrity. Our specialized team manages the complete process, including precision mechanical cutting of remaining casing strings, intermediate retrieval, and the final welding of structural identification caps below ground level.',
          'Executed in strict compliance with state and other regulatory standards, we deliver the secure, high-quality finishes required for reliable well closure and long-term site safety.',
        ],
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
