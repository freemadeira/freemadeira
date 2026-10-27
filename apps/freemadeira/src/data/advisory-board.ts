import type { Locale } from "@freemadeira/i18n";
import type { ImageMetadata } from "astro";

import adamNili from "@/assets/images/advisory-board/adam-nili.jpeg";
import bertDeGroot from "@/assets/images/advisory-board/bert-de-groot.jpeg";
import danielBatten from "@/assets/images/advisory-board/daniel-batten.png";
import danielPrince from "@/assets/images/advisory-board/daniel-prince.jpg";
import hermannVivier from "@/assets/images/advisory-board/hermann-vivier.jpg";
import janetMaingi from "@/assets/images/advisory-board/janet-maingi.jpeg";
import jeffBooth from "@/assets/images/advisory-board/jeff-booth.jpeg";
import joeBryan from "@/assets/images/advisory-board/joe-bryan.jpg";
import joeNakamoto from "@/assets/images/advisory-board/joe-nakamoto.jpeg";
import johnDennehy from "@/assets/images/advisory-board/john-dennehy.jpeg";
import knutSvanholm from "@/assets/images/advisory-board/knut-svanholm.jpeg";
import maxDeMarco from "@/assets/images/advisory-board/max-de-marco.jpeg";
import maxHillebrand from "@/assets/images/advisory-board/max-hillebrand.jpg";
import maxKei from "@/assets/images/advisory-board/max-kei.jpeg";
import pauloPereira from "@/assets/images/advisory-board/paulo-pereira.jpeg";
import peterYoung from "@/assets/images/advisory-board/peter-young.jpg";
import rahimTaghizadegan from "@/assets/images/advisory-board/rahim-taghizadegan.jpg";
import robBrinded from "@/assets/images/advisory-board/rob-brinded.jpeg";
import roySheinfeld from "@/assets/images/advisory-board/roy-sheinfeld.jpg";
import samsonMow from "@/assets/images/advisory-board/samson-mow.jpg";
import sebBunney from "@/assets/images/advisory-board/seb-bunney.jpg";
import stivenKerestegian from "@/assets/images/advisory-board/stiven-kerestegian.jpeg";
import type { Social } from "@/data/socials";

/** Bios stay in English on both locales; the category is translated. */
export interface AdvisoryBoardMember {
  firstName: string;
  lastName?: string;
  sex: "male" | "female";
  category?: Record<Locale, string>;
  picture?: ImageMetadata;
  socials?: Partial<Record<Social, string>>;
  bio?: string;
}

export const advisoryBoardMembers: AdvisoryBoardMember[] = [
  {
    bio: "Daniel Batten is a Climatetech investor, and a leading source on the new climate economy. He is an entrepreneur, CEO coach, ClimateTech VC, Bitcoin ESG analyst, author and former TV actor.",
    category: { en: "Energy", pt: "Energia" },
    firstName: "Daniel",
    lastName: "Batten",
    picture: danielBatten,
    sex: "male",
    socials: {
      linkedin: "in/danielsbatten",
      nostr: "npub13lkyycj8s3da6fhndtj0wd6s3s2ahmq86s7wrruvzd4tnc66cgfqn4lpsy",
      x: "DSBatten",
    },
  },
  {
    bio: "Jeff Booth is a visionary leader, technology entrepreneur, Founding Partner at ego death capital and best-selling author of The Price of Tomorrow – Why Deflation is Key to an Abundant Future.  With a profound grasp of technology, system thinking, and design, he stands at the forefront of a shift from an outdated economic model to one designed for tomorrow. Jeff's insights and achievements have earned him the BC Technology Industry Association's Person of the Year in 2015 and in October 2023, he was honored with induction into the prestigious BCTIA's Hall of Fame.  Furthermore, in 2016, he gained recognition from Goldman Sachs, who named him one of the 100 Most Intriguing Entrepreneurs. In addition to his work investing and helping entrepreneurs build on the rails of Bitcoin, he is a Co-Founder of addy and NocNoc. Jeff also actively serves on the boards of Core Scientific, Fedi, and Breez, in addition to several advisory boards. A dedicated member of the Young Presidents Organization since 2004, he further contributes as a Founding Fellow at the Creative Destruction Lab.",
    category: { en: "Strategy", pt: "Estratégia" },
    firstName: "Jeff",
    lastName: "Booth",
    picture: jeffBooth,
    sex: "male",
    socials: {
      linkedin: "in/jeffdbooth",
      nostr: "npub1s05p3ha7en49dv8429tkk07nnfa9pcwczkf5x5qrdraqshxdje9sq6eyhe",
      x: "JeffBooth",
    },
  },
  {
    bio: "Dedicated Personal Advisor and Educator specializing in elite athletes, CEOs, and entrepreneurs. Spearheading strength & conditioning and injury prevention initiatives for Chelsea FC while offering strategic insights as an Athlete Consultant for Barcelona FC. Trusted Consultant for the English National Ballet School. Pioneering Founder and Creator of EnergeticsOS & MeditationOS performance systems, optimizing mental and physical performance. Author of the transformative book 'Mind Decentralised: Becoming Masterless,' advocating for personal mastery and holistic development.",
    category: { en: "Education", pt: "Educação" },
    firstName: "Rob",
    lastName: "Brinded",
    picture: robBrinded,
    sex: "male",
    socials: {
      linkedin: "in/rob-brinded-4887817",
      nostr: "npub1de8jsek5aykkng5ytlvhvjxjwmdnpjwjcly0q6mu3566tfm00g5sfy0ezd",
      x: "RobBrinded",
    },
  },
  {
    bio: "Joe Bryan is a technology entrepreneur, former derivatives trader, and Bitcoin advocate. He spent over a decade trading derivatives at Goldman Sachs and other leading financial institutions before founding and exiting a technology company. He is the creator of What’s The Problem?, a freely accessible educational film explaining the structural foundations of the fiat monetary system and the emergence of Bitcoin as a new monetary paradigm. The film has been translated into more than 40 languages and is available worldwide, helping advance public understanding of Bitcoin. Joe advises organizations and communities building circular Bitcoin economies and is committed to accelerating the transition toward a more open, decentralized, and sovereign global monetary system.",
    category: { en: "Strategy", pt: "Estratégia" },
    firstName: "Joe",
    lastName: "Bryan",
    picture: joeBryan,
    sex: "male",
    socials: {
      linkedin: "in/joe-bryan-",
      x: "SatmoJoe",
      youtube: "SatsVsFiat",
    },
  },
  {
    bio: "Seb Bunney started as a mountain bike guide in British Columbia before a deeper curiosity pulled him toward psychology, money, and the structures shaping society. That curiosity became a career. He co-founded the educational platform Looking Glass, co-authored B is for Bitcoin, and wrote the number-one bestseller The Hidden Cost of Money. After serving as Chief Information Officer at Block Rewards, he now focuses on education and public speaking — bringing his perspective on money to audiences around the world.",
    category: { en: "Education", pt: "Educação" },
    firstName: "Seb",
    lastName: "Bunney",
    picture: sebBunney,
    sex: "male",
    socials: {
      x: "sebbunney",
    },
  },
  {
    bio: "Max DeMarco is a filmmaker and founder of 21c Studios, with a strong commitment to creating videos centered around themes of freedom and innovation, particularly in the realms of Bitcoin and the Nostr protocol. He gained recognition for directing the first documentary on Nostr, which features insightful discussions with industry leaders, including Jack Dorsey. Through his work, Max seeks to inspire audiences to engage thoughtfully with the evolving landscape of digital freedom and embrace personal responsibility.",
    category: { en: "Marketing & Events", pt: "Marketing e Eventos" },
    firstName: "Max",
    lastName: "DeMarco",
    picture: maxDeMarco,
    sex: "male",
    socials: {
      nostr: "npub1lelkh3hhxw9hdwlcpk6q9t0xt9f7yze0y0nxazvzqjmre3p98x3sthkvyz",
      x: "itsmaxdemarco",
      youtube: "MaxDeMarco",
    },
  },
  {
    bio: "John Dennehy was born in New York and became an activist in the wake of September 11th. While in jail after protesting the Iraq War, he decided to leave the country and moved to Ecuador in 2005. He is a best-selling author, award-winning journalist and has written about Bitcoin in Latin America for places such as the Guardian, Al-Jazeera, and the BBC. He moved to El Salvador in August of 2021 to found My First Bitcoin. In a world at the crossroads, he sees Bitcoin as humanity’s best chance to build something better. His first child was born in San Salvador in 2023.",
    category: { en: "Education", pt: "Educação" },
    firstName: "John",
    lastName: "Dennehy",
    picture: johnDennehy,
    sex: "male",
    socials: {
      nostr:
        "nprofile1qqsywnwsaj4jk7amaq90su86s4uzvmhjgyk53pgzjlw5wg7unh543ecdpnxs0",
      x: "jdennehy_writes",
    },
  },
  {
    bio: "Bert de Groot keeps companies warm with bitcoin miners and helps businesses, families and plebs on their bitcoin journey. Green houses, workshops, warehouses and offices are being heated with bitcoin miners. In one of the greenhouses flowers are being grown. His company bitcoinbrabant.com is the official reseller of open source signing devices (hardware wallets). He has helped thousands of people with storage and payment solutions, Dutch bitcoin books, and much more.",
    category: { en: "Energy", pt: "Energia" },
    firstName: "Bert",
    lastName: "de Groot",
    picture: bertDeGroot,
    sex: "male",
    socials: {
      nostr: "npub1jqs0u7zhh53e94gyhm4eu458wm6sw7z0kk66jjhhkhh346tcq2ysfgr247",
      x: "BdGBertdeGroot",
    },
  },
  {
    bio: "As a praxeologist, Max contributes to open-source projects, sharing his work freely to foster collaboration and innovation. His goal is to help build a parallel economy based on sound money, individual sovereignty, and free markets, where entrepreneurs can thrive without central authority.",
    category: { en: "Technology", pt: "Tecnologia" },
    firstName: "Max",
    lastName: "Hillebrand",
    picture: maxHillebrand,
    sex: "male",
    socials: {
      nostr: "npub1klkk3vrzme455yh9rl2jshq7rc8dpegj3ndf82c3ks2sk40dxt7qulx3vt",
    },
  },
  {
    bio: "CEO of Debifi and adviser to Hodl Hodl, and Organizer of the The Baltic Honeybadger conference. His expertise lies in building non-custodial Bitcoin tools, ranging from P2P retail trading to enterprise lending.",
    category: { en: "Finance", pt: "Finanças" },
    firstName: "Max",
    lastName: "Kei",
    picture: maxKei,
    sex: "male",
    socials: {
      linkedin: "in/mkei",
      x: "keidunm",
    },
  },
  {
    bio: "Stiven is a visionary product and venture designer whose award-winning career has shaped innovation across global markets. His experience includes strategic design for Microsoft, spearheading open innovation at LEGO Future Lab, and leading as Head of Global Innovation at IKEA Group. As co-founder of caos.global, a Bitcoin strategic design studio, and senior advisor to PlanB Network, Stiven continues to envision bold ideas, transforming them into impactful realities in the intersections of people, technology and business.",
    category: { en: "Strategy", pt: "Estratégia" },
    firstName: "Stiven",
    lastName: "Kerestegian",
    picture: stivenKerestegian,
    sex: "male",
    socials: {
      linkedin: "in/stivenk",
      nostr:
        "nprofile1qqsqu8ua4wwccjpmujttq6p6v5thnxvdg8fxlemj4fgy3gergvshj8qhpguq6",
      x: "stiven_hey_",
    },
  },
  {
    bio: "Janet Maingi is the Co-Founder and Chief Operating Officer (COO) at Gridless, which deploys bitcoin mining on renewable energy mini grids to catalyse new energy generation and electrification in rural Africa. With 25+ years expertise in strategy implementation, project management, and people operations, Janet is passionate about fostering innovation, transparency, and transformative impact through operational excellence. ",
    category: { en: "Energy", pt: "Energia" },
    firstName: "Janet",
    lastName: "Maingi",
    picture: janetMaingi,
    sex: "female",
    socials: {
      linkedin: "in/janet-maingi",
      x: "nduku_jay",
    },
  },
  {
    bio: 'Bitcoin philosopher and game developer with a degree in Business Administration. Samson is credited on the development of two of the most highly rated real-time strategy games of all time: "Dawn of War" and "Company of Heroes". He is a frequent headline speaker at conferences and often provides television commentary on Bitcoin.',
    category: { en: "Strategy", pt: "Estratégia" },
    firstName: "Samson",
    lastName: "Mow",
    picture: samsonMow,
    sex: "male",
    socials: {
      linkedin: "in/samson",
      x: "Excellion",
    },
  },
  {
    bio: "@joenakamoto is a journalist, documentary maker & MC. As an independent journalist, Joe pushes the boundaries of Bitcoin content, giving away free Sats to strangers and shooting Youtube-friendly challenge videos. Joe is multi-lingual and travels the world trying to make sense of Bitcoin.",
    category: { en: "Marketing & Events", pt: "Marketing e Eventos" },
    firstName: "Joe",
    lastName: "Nakamoto",
    picture: joeNakamoto,
    sex: "male",
    socials: {
      linkedin: "in/Joenakamoto",
      nostr: "npub1lr2zzf989mvf393y0tv39ara6a4vddkd6y87z784up9vl6ks6j3qtudl6a",
      x: "JoeNakamoto",
    },
  },
  {
    bio: "Adam is a lifelong entrepreneur and CEO of Methodos Global, an international advisory organization driving global impact through education, technology, and innovation. With a focus on Bitcoin education and technological advancement, Adam has developed educational initiatives that have reached 25 countries and has integrated modern financial literacy into university curricula. Currently, Adam leads and advises global projects in energy, education, and health in communities around the world.",
    firstName: "Adam",
    lastName: "Nili",
    picture: adamNili,
    sex: "male",
    socials: {
      linkedin: "in/adam-nili",
      nostr: "npub18rtjz55wndqwlmgzpjjl9nr9msutvymc08znv2s0a9r5gk53cwjstc8a7u",
      x: "adam_nili",
    },
  },
  {
    bio: "Bachelor's degree in Economics with a postgraduate qualification in Corporate Finance, experienced in commercial banking for individuals and companies, as well as financial management in family-owned businesses leading their sectors in areas such as automotive distribution, car rentals, tourist real estate, and software development. For the past 11 years, he has been co-CEO of a Corporate Finance boutique and regularly participates in the governing bodies of companies. He loves Freedom and despises the State.",
    category: { en: "Legal & Governance", pt: "Jurídico e Governação" },
    firstName: "Paulo",
    lastName: "Pereira",
    picture: pauloPereira,
    sex: "male",
    socials: {
      linkedin: "in/paulo-pereira-82803579",
      x: "PauloPe63416386",
    },
  },
  {
    bio: "Daniel is the author of the book Choose Life and host of the Bitcoin Podcast Once Bitten which is focused on sharing real-life stories of how Bitcoin has changed and shaped individuals' and families' lives forever.",
    category: { en: "Strategy", pt: "Estratégia" },
    firstName: "Daniel",
    lastName: "Prince",
    picture: danielPrince,
    sex: "male",
    socials: {
      nostr: "npub1hghnjjpnvkz8t6gkszuf37d7puwc2qtxc65rnklqsngzv6kkug9qhhfyz2",
      x: "Princey21M",
    },
  },
  {
    bio: "Roy Sheinfeld is the founder & CEO of Breez, building next-generation infrastructure for Bitcoin and Lightning. He focuses on making Bitcoin usable in everyday apps through non-custodial, developer-friendly tools. With a strong product and technical background, Roy works at the intersection of UX, payments, and open financial systems, pushing toward a future where Bitcoin is seamlessly integrated into mainstream applications and services.",
    category: { en: "Technology", pt: "Tecnologia" },
    firstName: "Roy",
    lastName: "Sheinfeld",
    picture: roySheinfeld,
    sex: "male",
    socials: {
      linkedin: "in/roysheinfeld",
      nostr: "npub1ey6qdmvzcgcsr883m9nspzz0mm037l26xtardzcskfsvc6gc7jssm9szvp",
      x: "roy_breez",
    },
  },
  {
    bio: "Knut Svanholm is a Bitcoin author, educator, and armchair philosopher. His first work, 'Bitcoin: Sovereignty through Mathematics,' is widely regarded as a classic in the space, earning recognition as a recommended read on numerous educational platforms, including MicroStrategy's Bitcoin site hope.com. Knut is credited with coining the popular meme 'Everything Divided by 21 Million,' a phrase that encapsulates the scarcity and mathematical principles underpinning Bitcoin. Knut is also the host of The Bitcoin Infinity Show.",
    category: { en: "Strategy", pt: "Estratégia" },
    firstName: "Knut",
    lastName: "Svanholm",
    picture: knutSvanholm,
    sex: "male",
    socials: {
      linkedin: "in/knut-svanholm-93591673",
      nostr: "npub1jt97tpsul3fp8hvf7zn0vzzysmu9umcrel4hpgflg4vnsytyxwuqt8la9y",
      x: "knutsvanholm",
    },
  },
  {
    bio: "Rahim Taghizadegan is the last Austrian economist of the Austrian School in the direct tradition, and has taught at universities across Europe. Author of fifteen books, he is the founder of scholarium, now based in Switzerland, where the Austrian School can be studied in its original interdisciplinary form. Currently building citadel.garden on Madeira.",
    category: { en: "Education", pt: "Educação" },
    firstName: "Rahim",
    lastName: "Taghizadegan",
    picture: rahimTaghizadegan,
    sex: "male",
    socials: {
      x: "scholarium_at",
    },
  },
  {
    bio: "Hermann Buhr Vivier is the founder of Bitcoin Ekasi, est. 2021. Bitcoin Ekasi is a Bitcoin circular economy project based in Mossel Bay, South Africa. The project is inspired by Bitcoin Beach (El Salvador) and utilizes The Surfer Kids, a social development & youth empowerment non-profit that Hermann co-founded in 2010, as a community platform. Hermann’s involvement with Bitcoin dates back to late 2013 when he stumbled across an early print copy of Bitcoin Magazine. Later, in 2015, an international tourism business he co-owns with his wife was separated from its client base due to financial sanctions. Bitcoin became a way to receive payments, bypassing sanctions and saving their business. This experience triggered a deep interest in Bitcoin as a solution to immediate problems, related specifically to its use as an uncensorable medium of exchange.",
    category: { en: "Community", pt: "Comunidade" },
    firstName: "Hermann",
    lastName: "Vivier",
    picture: hermannVivier,
    sex: "male",
    socials: {
      x: "BitcoinEkasi",
    },
  },
  {
    bio: "Peter is the Managing Director of the Free Cities Foundation, a non-profit dedicated to advancing self-governing territories that uphold individual rights, freedoms, and voluntary governance. The foundation's partners include autonomous zones like the ZEDEs in Honduras, intentional communities such as Montelibero in Montenegro, and self-governing territories such as Sark and Madeira. A Bitcoiner since 2017, Peter previously worked alongside Saifedean Ammous, supporting his online learning platform and contributing to educational resources on bitcoin, sound money and economic freedom.",
    firstName: "Peter",
    lastName: "Young",
    picture: peterYoung,
    sex: "male",
    socials: {
      linkedin: "in/peter-young-70b80a42",
      nostr:
        "nprofile1qqs0cfrsa5vksqwa4nju9093fffl5hhflq0wxedlf9v0jnrpzlv7ufcvg8qer",
      x: "petermiyoung",
    },
  },
];
