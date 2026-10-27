import type { Locale } from "@freemadeira/i18n";

/** Shown where a FAQ answer is the class calendar rather than text. */
export const CALENDAR = "calendar";

interface DiplomaBitcoin {
  calendar: { chapter: string; practice: string; theory: string }[];
  calendarHeadings: { chapter: string; practice: string; theory: string };
  faq: { answer: string; question: string }[];
  format: string[];
  formatIntro: string;
  intro: string[];
  manual: { digital: string; printed: string; text: string; title: string };
  materials: { items: string[]; title: string };
  summary: { items: { label: string; value: string }[]; title: string };
  topics: { items: string[]; title: string };
}

export const diplomaLinks = {
  digital:
    "https://github.com/freemadeira/diploma-bitcoin/releases/download/v2025.1.0/Diploma_Bitcoin_pt-PT_2025.1.0.pdf",
  printed:
    "https://shop.freemadeira.org/products/o-meu-primeiro-bitcoin-diploma-bitcoin",
  signUp: "https://forms.gle/LC2VQRdxY4v5y7DPA",
};

export const diplomaBitcoin: Record<Locale, DiplomaBitcoin> = {
  en: {
    calendar: [
      { chapter: "#1: Why do we need money?", practice: "18 Apr", theory: "" },
      {
        chapter: "#2: What is money?",
        practice: "25 Apr",
        theory: "18 Apr – 24 Apr",
      },
      {
        chapter: "#3: The history of money",
        practice: "2 May",
        theory: "25 Apr – 1 May",
      },
      {
        chapter: "#4: What are fiat currencies and who controls them?",
        practice: "9 May",
        theory: "2 May – 8 May",
      },
      {
        chapter: "#5: Building solutions from problems",
        practice: "16 May",
        theory: "9 May – 15 May",
      },
      {
        chapter: "#6: Introduction to Bitcoin",
        practice: "23 May",
        theory: "16 May – 22 May",
      },
      {
        chapter: "#7: How to use Bitcoin",
        practice: "30 May",
        theory: "23 May – 29 May",
      },
      {
        chapter: "#8: The Lightning Network: using bitcoin every day",
        practice: "6 Jun",
        theory: "30 May – 5 Jun",
      },
      {
        chapter: "#9: An introduction to Bitcoin's technical side",
        practice: "13 Jun",
        theory: "6 Jun – 12 Jun",
      },
      {
        chapter: "#10: Why Bitcoin?",
        practice: "20 Jun",
        theory: "13 Jun – 19 Jun",
      },
    ],
    calendarHeadings: {
      chapter: "Chapter",
      practice: "Practical class",
      theory: "Theory class",
    },
    faq: [
      {
        answer:
          "Diploma Bitcoin is an adaptation of the internationally recognised 10-week programme developed by My First Bitcoin. This course will give you a solid understanding of Bitcoin.",
        question: "What is Diploma Bitcoin?",
      },
      {
        answer:
          "Anyone who wants to learn about Bitcoin, or to deepen what they already know. It is a great opportunity to understand the fundamentals of Bitcoin and its impact on society, in a structured and accessible way.",
        question: "Who is this course for?",
      },
      {
        answer: "The course is taught entirely in Portuguese.",
        question: "What language is the course in?",
      },
      {
        answer: "The course has ten chapters, spread over ten weeks.",
        question: "How long is the course?",
      },
      {
        answer:
          "Each week has a recorded theory class, which students watch before the practical class, and a live practical class (online) for exercises, questions and discussion of the chapter's topics. The practical class is on Saturday mornings.",
        question: "What format do the classes take?",
      },
      { answer: CALENDAR, question: "What is the class calendar?" },
      {
        answer:
          "The practical classes are on Saturdays at 10 a.m. (mainland Portugal and Madeira time).",
        question: "When are the practical classes?",
      },
      {
        answer:
          "The link to the practical classes is sent before the course starts, to the email address you signed up with.",
        question: "How do I join the practical classes?",
      },
      {
        answer: "The recorded classes stay available after the course ends.",
        question: "How long are the recorded classes available?",
      },
      {
        answer:
          "My First Bitcoin is a global, decentralised movement focused on independent, impartial, community-led Bitcoin education. Diploma Bitcoin started in El Salvador, has been translated into eight languages and taught in many countries around the world.",
        question: "What is My First Bitcoin?",
      },
      {
        answer:
          "Yes, attending the practical classes is required to receive the diploma.",
        question: "Do I have to attend the practical classes?",
      },
      {
        answer:
          "If you can't attend a practical class, please let us know by email at education@freemadeira.org. We will take it into account in the assessment.",
        question:
          "I can't attend one of the practical classes. What should I do?",
      },
      {
        answer:
          "The assessment is based on attendance and active participation in the practical classes.",
        question: "How is the course assessed?",
      },
      {
        answer: "Yes, as long as you meet the assessment goals.",
        question:
          "Will I get a diploma or certificate of participation at the end?",
      },
      {
        answer:
          "We want taking part in this course to be engaging and about sharing knowledge, with room for everyone to take part and ask questions. That only works when everyone involved connects, and eye contact is essential for that.",
        question:
          "Why do I need to have my camera on during the practical classes?",
      },
      {
        answer:
          "No. The practical classes are live only. They are not recorded, for the comfort and privacy of the participants. The theory classes are always available on our website.",
        question: "Are the practical classes recorded?",
      },
      {
        answer:
          "The symbolic sign-up fee makes sure participants are committed. It is later returned as a discount in our online shop.",
        question: "Why isn't this course free?",
      },
      {
        answer:
          "Yes, there is a maximum number of participants, so we can keep the practical classes good. We recommend signing up as soon as you can.",
        question: "Are places limited?",
      },
      {
        answer:
          "Sign-ups are open until 16 April, or until the maximum number of participants is reached.",
        question: "What is the sign-up deadline?",
      },
      {
        answer:
          "The course has 10 chapters in a fixed order. Missing the first classes means missing information you need to follow the course. You can still watch the recorded classes, though.",
        question: "Why can't I join halfway through the course?",
      },
      {
        answer:
          "Yes, we plan to teach this course regularly. Subscribe to our newsletter or follow us on social media to hear about the courses and workshops we teach.",
        question: "I can't take this course. Will there be another one?",
      },
      {
        answer:
          'Yes, the Diploma Bitcoin handbook is the main course material, and you can download it for free. If you prefer a printed copy, you can buy one in our online shop. The slides from the theory and practical classes are shared too. The download and shop links are above, under "Student handbook".',
        question: "Is there any course material?",
      },
    ],
    format: [
      "A recorded theory class (up to 45 minutes), which students watch before the practical class. The recording is released a week before the practical class and stays available at any time.",
      "A live practical class (online) for exercises, questions and discussion of the chapter's topics. It takes place every Saturday morning for the length of the course.",
    ],
    formatIntro: "Classes are weekly and online only. Each chapter has:",
    intro: [
      "Diploma Bitcoin is the Portuguese adaptation of the internationally recognised course created by My First Bitcoin, already translated into more than 8 languages.",
      "This 10-chapter programme is designed to empower individuals, businesses and communities, promoting financial literacy and a solid understanding of Bitcoin.",
      "It is a great opportunity to understand the fundamentals of Bitcoin and its impact on society, in a structured and accessible way.",
      "Taking part costs a symbolic €21, which makes sure participants are committed. It is later returned as a discount in our online shop.",
    ],
    manual: {
      digital: "Digital edition",
      printed: "Printed edition",
      text: "You can download the digital handbook for free. If you like, you can also buy the printed edition.",
      title: "Student handbook",
    },
    materials: {
      items: [
        "A device with internet access and a working microphone and camera, to watch and take part in the classes.",
        "A smartphone with internet access, for the hands-on parts.",
      ],
      title: "What you need",
    },
    summary: {
      items: [
        { label: "Length", value: "10 weeks" },
        { label: "Classes", value: "20 (10 recorded, 10 live)" },
        { label: "When", value: "Every Saturday at 10 a.m." },
      ],
      title: "Calendar at a glance",
    },
    topics: {
      items: [
        "What money is, its history and how it works",
        "What fiat currencies are",
        "Problems with today's financial system",
        "What Bitcoin is and how to use it",
        "The Lightning Network and everyday payments",
        "Bitcoin's technical side",
      ],
      title: "Topics covered in the course",
    },
  },
  pt: {
    calendar: [
      {
        chapter: "#1: Porque é que precisamos de dinheiro?",
        practice: "18 Abr",
        theory: "",
      },
      {
        chapter: "#2: O que é o dinheiro?",
        practice: "25 Abr",
        theory: "18 Abr – 24 Abr",
      },
      {
        chapter: "#3: A história do dinheiro",
        practice: "2 Mai",
        theory: "25 Abr – 1 Mai",
      },
      {
        chapter: "#4: O que são moedas fiduciárias e quem as controla?",
        practice: "9 Mai",
        theory: "2 Mai – 8 Mai",
      },
      {
        chapter: "#5: A criação de soluções, com base nos problemas",
        practice: "16 Mai",
        theory: "9 Mai – 15 Mai",
      },
      {
        chapter: "#6: Introdução ao Bitcoin",
        practice: "23 Mai",
        theory: "16 Mai – 22 Mai",
      },
      {
        chapter: "#7: Como usar o Bitcoin",
        practice: "30 Mai",
        theory: "23 Mai – 29 Mai",
      },
      {
        chapter: "#8: Rede Lightning: Usar bitcoin no dia a dia",
        practice: "6 Jun",
        theory: "30 Mai – 5 Jun",
      },
      {
        chapter: "#9: Uma Introdução ao lado técnico do Bitcoin",
        practice: "13 Jun",
        theory: "6 Jun – 12 Jun",
      },
      {
        chapter: "#10: Porquê o Bitcoin?",
        practice: "20 Jun",
        theory: "13 Jun – 19 Jun",
      },
    ],
    calendarHeadings: {
      chapter: "Capítulo",
      practice: "Aula prática",
      theory: "Aula teórica",
    },
    faq: [
      {
        answer:
          "O Diploma Bitcoin é uma adaptação do programa de 10 semanas internacionalmente reconhecido desenvolvido pela My First Bitcoin. Este curso dar-te-á noções sólidas sobre o Bitcoin.",
        question: "O que é o Diploma Bitcoin?",
      },
      {
        answer:
          "A todos os que têm interesse em aprender mas também aprofundar os seus conhecimentos sobre Bitcoin. Este curso é uma excelente oportunidade para quem deseja compreender os fundamentos do Bitcoin e o seu impacto na sociedade, de forma estruturada e acessível.",
        question: "A quem se destina este curso?",
      },
      {
        answer: "O curso será lecionado inteiramente em português.",
        question: "Qual a língua do curso?",
      },
      {
        answer:
          "No total, o curso conta com dez capítulos, distribuídos por dez semanas.",
        question: "Qual a duração do curso?",
      },
      {
        answer:
          "Cada semana inclui uma aula teórica gravada, a que os alunos devem assistir antes da aula prática, e uma aula prática em direto (online) para exercícios práticos, esclarecimento de dúvidas e discussão dos temas do capítulo. A aula prática acontece aos sábados de manhã.",
        question: "Qual o formato das aulas?",
      },
      { answer: CALENDAR, question: "Qual o calendário das aulas?" },
      {
        answer:
          "As aulas práticas acontecerão aos sábados, às 10 da manhã (hora de Portugal Continental e Madeira).",
        question: "Quando e a que horas serão dadas as aulas práticas?",
      },
      {
        answer:
          "A ligação para as aulas práticas será enviada antes do início do curso para o endereço de e-mail indicado na inscrição.",
        question: "Como posso aceder às aulas práticas?",
      },
      {
        answer:
          "As aulas gravadas ficarão disponíveis mesmo depois de terminado o curso.",
        question: "Durante quanto tempo ficam disponíveis as aulas gravadas?",
      },
      {
        answer:
          "O My First Bitcoin é um movimento global e descentralizado, com foco na educação de Bitcoin independente, imparcial e liderada pela comunidade. O Diploma Bitcoin teve início em El Salvador, tendo já sido traduzido para oito idiomas e lecionado em diversos países por todo o mundo.",
        question: "O que é o My First Bitcoin?",
      },
      {
        answer:
          "Sim, a presença nas aulas práticas é obrigatória para a obtenção do diploma.",
        question: "A presença nas aulas práticas é obrigatória?",
      },
      {
        answer:
          "Caso não possas participar numa das aulas práticas, por favor, informa-nos por e-mail para education@freemadeira.org. Teremos isso em conta no momento da avaliação.",
        question:
          "Não vou poder participar numa das aulas práticas. O que devo fazer?",
      },
      {
        answer:
          "A avaliação terá em conta a assiduidade e a participação ativa nas aulas práticas.",
        question: "Como será feita a avaliação do curso?",
      },
      {
        answer: "Sim, desde que cumpras os objetivos de avaliação.",
        question:
          "No final do curso terei direito a um diploma ou comprovativo de participação?",
      },
      {
        answer:
          "Queremos que a experiência de participar neste curso seja envolvente e de partilha de conhecimentos, com espaço para participação e esclarecimento de dúvidas de todos os participantes. Isto só é possível criando uma ligação entre todas as pessoas envolvidas. O contacto visual é essencial para isso.",
        question:
          "Porque é obrigatório ter a câmara ligada durante as aulas práticas?",
      },
      {
        answer:
          "Não. As aulas práticas acontecerão apenas em direto. Não será feita qualquer gravação das mesmas por uma questão de conforto e privacidade dos participantes. As aulas teóricas estarão sempre disponíveis no nosso site.",
        question: "As aulas práticas serão gravadas?",
      },
      {
        answer:
          "O valor simbólico de inscrição serve para garantir o compromisso dos participantes. Esse valor será posteriormente devolvido sob a forma de desconto na nossa loja online.",
        question: "Porque é que este curso não é gratuito?",
      },
      {
        answer:
          "Sim, existe um número máximo de participantes, de forma a podermos garantir a qualidade das aulas práticas. Aconselhamos-te a inscreveres-te logo que possas.",
        question: "As vagas são limitadas?",
      },
      {
        answer:
          "As inscrições estarão abertas até dia 16 de Abril ou até ser atingido o número máximo de participantes",
        question: "Qual o prazo para me inscrever?",
      },
      {
        answer:
          "Este curso está organizado em 10 capítulos, com uma ordem fixa. Ao não participares nas primeiras aulas, estás a perder informação pertinente que te permite acompanhar o curso. No entanto, podes sempre assistir às aulas gravadas.",
        question: "Porque não me posso inscrever a meio do curso?",
      },
      {
        answer:
          "Sim, planeamos lecionar regularmente este curso. Subscreve a nossa newsletter ou segue-nos nas redes sociais para estares sempre a par das novidades sobre os cursos e workshops que lecionamos.",
        question: "Não posso participar neste curso. Haverá outro no futuro?",
      },
      {
        answer:
          'Sim, o manual Diploma Bitcoin é o material de apoio principal. Podes fazer o download gratuito do mesmo. Se preferires adquiri-lo em formato físico podes comprá-lo na nossa loja online. Para além do manual, também as apresentações das aulas teóricas e práticas serão partilhadas. As ligações para download e para compra do manual estão disponíveis acima, na secção "Manual do aluno".',
        question: "Existe algum material de suporte ao curso?",
      },
    ],
    format: [
      "Uma aula teórica gravada (de até 45 minutos), a que os alunos devem assistir antes da aula prática. Esta gravação é disponibilizada com uma semana de antecedência da aula prática e fica disponível para consulta a qualquer momento.",
      "Uma aula prática em direto (online) para exercícios práticos, esclarecimento de dúvidas e discussão dos temas do capítulo. Esta sessão acontece todos os sábados de manhã ao longo da duração do curso.",
    ],
    formatIntro:
      "As aulas acontecem semanalmente, exclusivamente online. Cada capítulo inclui:",
    intro: [
      "O Diploma Bitcoin é a adaptação portuguesa do curso internacionalmente reconhecido, criado pela My First Bitcoin e já traduzido para mais de 8 idiomas.",
      "Este programa de 10 capítulos foi projetado para capacitar indivíduos, empresas e comunidades, promovendo a literacia financeira e uma compreensão sólida do Bitcoin.",
      "É uma excelente oportunidade para quem deseja compreender os fundamentos do Bitcoin e o seu impacto na sociedade, de forma estruturada e acessível.",
      "A participação no curso tem um valor simbólico de 21 €, que serve para garantir o compromisso dos participantes. Esse valor será posteriormente devolvido sob a forma de desconto na nossa loja online.",
    ],
    manual: {
      digital: "Versão digital",
      printed: "Versão impressa",
      text: "Podes descarregar gratuitamente o manual em versão digital. Se quiseres, podes também comprar a versão impressa.",
      title: "Manual do aluno",
    },
    materials: {
      items: [
        "Equipamento com acesso à internet, microfone e câmara em correto funcionamento, para assistir e participar nas aulas.",
        "Smartphone com acesso à internet, para as partes práticas.",
      ],
      title: "Material necessário",
    },
    summary: {
      items: [
        { label: "Duração", value: "10 semanas" },
        { label: "Total de aulas", value: "20 (10 gravadas, 10 em direto)" },
        { label: "Quando", value: "Todos os sábados às 10h" },
      ],
      title: "Resumo do calendário",
    },
    topics: {
      items: [
        "O que é o dinheiro, a sua história e como funciona",
        "O que são moedas fiduciárias",
        "Problemas do sistema financeiro atual",
        "O que é o Bitcoin e como o utilizar",
        "Rede Lightning e pagamentos do dia a dia",
        "O lado técnico do Bitcoin",
      ],
      title: "Temas discutidos durante o curso",
    },
  },
};
