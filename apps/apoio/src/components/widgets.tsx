import { useState } from "react";

const widget =
  "relative left-1/2 my-12 w-[min(56rem,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border-2 border-(--tier) bg-white p-6 sm:p-8";
// An answer fades and rises in as it appears; under reduced motion it only fades.
const answer =
  "my-3 border-l-4 border-(--tier) bg-bridal-50 px-3 py-2 transition-[opacity,translate,filter] duration-300 ease-out starting:opacity-0 motion-safe:starting:translate-y-3 motion-safe:starting:blur-xs";
const linkBtn =
  "px-1 py-2 text-bridal-700 underline underline-offset-2 transition-colors duration-150 hover:text-dark";
const press =
  "transition-[background-color,border-color,color,scale] duration-150 ease-out enabled:active:scale-[0.96]";
const choice = (on: boolean) =>
  `rounded-md border px-4 py-2 disabled:opacity-40 ${press} ${on ? "border-dark bg-dark text-white" : "border-mountain-mist-200 bg-white enabled:hover:border-mountain-mist-300 enabled:hover:bg-mountain-mist-50"}`;
// A full-width choice: too wide to shrink on press, so it only changes colour.
const option =
  "rounded-md border border-mountain-mist-200 bg-white px-4 py-2 text-left transition-colors duration-150 hover:border-mountain-mist-300 hover:bg-mountain-mist-50";

/* ------------------------------------------------------------ inflation */
export function Inflation() {
  const [years, setYears] = useState(10);
  const value = 100 / 1.02 ** years;
  return (
    <figure className={widget}>
      <figcaption className="mb-3 font-semibold">
        O que valem 100 € de hoje, daqui a quanto tempo?
      </figcaption>
      <label className="block">
        <span>
          Daqui a <strong>{years}</strong> {years === 1 ? "ano" : "anos"}
        </span>
        <input
          className="accent-bridal-700 mt-2 w-full"
          type="range"
          min={0}
          max={30}
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </label>
      <div
        className="bg-mountain-mist-100 block h-4 overflow-hidden rounded-full"
        aria-hidden="true"
      >
        <div
          className="bg-primary-400 block h-full origin-left rounded-full transition-transform duration-150 ease-out motion-reduce:transition-none"
          style={{ transform: `scaleX(${value / 100})` }}
        />
      </div>
      <p className="my-3 text-lg font-semibold">
        100 € de hoje comprarão o que ≈ {Math.round(value)} € de hoje compram.
      </p>
      <p className="text-mountain-mist-500 text-sm">
        Simulação simples, à meta oficial de 2% de inflação ao ano do Banco
        Central Europeu. Não é uma previsão.
      </p>
    </figure>
  );
}

/* ------------------------------------------------------------- timeline */
const ROWS = [
  {
    id: "cartao",
    name: "Cartão",
    tag: "comissão para ti",
    text: "O dinheiro fica a caminho. Os prazos variam com o banco e o contrato.",
    when: "1 a 3 dias úteis",
    width: 100,
  },
  {
    id: "euros",
    name: "Bitcoin → euros (Swiss Bitcoin Pay)",
    tag: "comissão de 1,5%",
    text: "O valor em euros fica fixado no momento da venda e entra na tua conta por transferência SEPA.",
    when: "tipicamente no dia útil seguinte",
    width: 52,
  },
  {
    id: "ln",
    name: "Bitcoin (Lightning)",
    tag: "taxa de rede paga por quem envia",
    text: "Já está na tua carteira antes de o cliente sair da loja.",
    when: "agora",
    width: 8,
  },
] as const;

export function Timeline() {
  const [open, setOpen] = useState<string>("ln");
  return (
    <figure className={widget}>
      <figcaption className="mb-3 font-semibold">
        Quando chega o dinheiro? Toca numa linha.
      </figcaption>
      {ROWS.map((r) => (
        <button
          key={r.id}
          type="button"
          className={`my-2 grid w-full gap-1 rounded-md border px-3 py-2 text-left transition-colors duration-150 ${open === r.id ? "border-dark bg-bridal-50" : "border-mountain-mist-200 hover:border-mountain-mist-300"}`}
          onClick={() => setOpen(r.id)}
          aria-pressed={open === r.id}
        >
          <span className="font-semibold">{r.name}</span>
          <span className="bg-mountain-mist-100 block h-4 overflow-hidden rounded-full">
            <span
              className="bg-primary-400 block h-full rounded-full"
              style={{ width: `${r.width}%` }}
            />
          </span>
          <span className="text-mountain-mist-500 text-sm">{r.when}</span>
        </button>
      ))}
      <div
        className="text-mountain-mist-500 mt-2 flex justify-between text-xs"
        aria-hidden="true"
      >
        <span>agora</span>
        <span>fim do dia</span>
        <span>1 dia útil</span>
        <span>2–3 dias úteis</span>
      </div>
      {ROWS.filter((r) => r.id === open).map((r) => (
        <p key={r.id} className="mt-3">
          <strong>{r.tag}.</strong> {r.text}
        </p>
      ))}
    </figure>
  );
}

/* -------------------------------------------------------------- chooser */
const QUESTIONS = [
  {
    q: "Preciso de euros na conta para pagar fornecedores e salários?",
    yes: "Caminho A. Não compliques: recebes euros na conta.",
  },
  {
    q: "Tenho empregados a receber pagamentos por mim?",
    yes: "Escolhe uma solução com modo de caixa: o caminho A, ou a Blink ou a Wallet of Satoshi, que têm ponto de venda próprio.",
  },
  {
    q: "Quero começar a guardar uma parte a longo prazo?",
    yes: "Aí faz sentido o caminho C — mas só para a poupança, não para o balcão.",
  },
];

export function Chooser() {
  const [answers, setAnswers] = useState<(boolean | null)[]>([
    null,
    null,
    null,
  ]);
  const set = (i: number, v: boolean) =>
    setAnswers((a) => a.map((x, j) => (j === i ? v : x)));
  const done = answers.every((a) => a !== null);
  const anyYes = answers.some((a) => a === true);
  return (
    <figure className={widget}>
      <figcaption className="mb-3 font-semibold">
        Três perguntas que te ajudam a decidir
      </figcaption>
      {QUESTIONS.map((item, i) => (
        <div key={item.q} className="mt-4">
          <p>{item.q}</p>
          <div className="my-2 flex flex-wrap gap-2">
            <button
              type="button"
              className={choice(answers[i] === true)}
              onClick={() => set(i, true)}
              aria-pressed={answers[i] === true}
            >
              Sim
            </button>
            <button
              type="button"
              className={choice(answers[i] === false)}
              onClick={() => set(i, false)}
              aria-pressed={answers[i] === false}
            >
              Não
            </button>
          </div>
          {answers[i] === true && <p className={answer}>{item.yes}</p>}
        </div>
      ))}
      {done && !anyYes && (
        <p className={answer}>
          Se nenhuma se aplica, começa pelo caminho A, o mais fácil, ou
          experimenta o B, que é simples e bom para experimentar.
        </p>
      )}
      {done && (
        <p className="text-mountain-mist-500 text-sm">
          Muitos acabam por usar dois ao mesmo tempo: A ou B para o balcão, C
          para o que guardam.
        </p>
      )}
      {answers.some((a) => a !== null) && (
        <button
          type="button"
          className={linkBtn}
          onClick={() => setAnswers([null, null, null])}
        >
          Recomeçar
        </button>
      )}
    </figure>
  );
}

/* ----------------------------------------------------------------- taps */
const TAPS = [
  { d: "No telemóvel do negócio.", t: "Abre a carteira" },
  { d: "E escreve o valor em euros.", t: "Toca em «Receber»" },
  { d: "O cliente lê com o telemóvel.", t: "Mostra o código" },
  {
    d: "O ecrã avisa-te. Está pago. Só depois entregas o produto.",
    t: "Confirmação",
  },
];

function stepStyle(index: number, current: number) {
  if (index === current) {
    return "outline-dark outline-2";
  }
  return index < current ? "opacity-90" : "opacity-60";
}

export function Taps() {
  const [step, setStep] = useState(0);
  return (
    <figure className={widget}>
      <figcaption className="mb-3 font-semibold">
        Quatro toques no ecrã. Experimenta, passo a passo.
      </figcaption>
      <ol className="my-3 grid list-none grid-cols-2 gap-2 p-0 sm:grid-cols-4">
        {TAPS.map((s, i) => (
          <li
            key={s.t}
            className={`flex flex-col gap-1 rounded-md p-3 text-sm ${i === 3 && step === 3 ? "bg-primary-400" : "bg-bridal-50"} ${stepStyle(i, step)}`}
          >
            <span className="bg-dark text-primary-400 inline-grid size-6 place-items-center rounded-full text-xs font-bold">
              {i + 1}
            </span>
            <strong>{s.t}</strong>
            <span>{s.d}</span>
          </li>
        ))}
      </ol>
      <div className="my-2 flex flex-wrap gap-2">
        <button
          type="button"
          className={choice(false)}
          disabled={step === 0}
          onClick={() => setStep((s) => s - 1)}
        >
          Anterior
        </button>
        <button
          type="button"
          className={choice(true)}
          disabled={step === 3}
          onClick={() => setStep((s) => s + 1)}
        >
          Seguinte
        </button>
        {step > 0 && (
          <button type="button" className={linkBtn} onClick={() => setStep(0)}>
            Recomeçar
          </button>
        )}
      </div>
      {step === 3 && (
        <p className={answer}>
          A regra de ouro: confirma sempre no teu telemóvel, nunca no do
          cliente. Se não viste entrar na tua carteira, ainda não recebeste.
        </p>
      )}
    </figure>
  );
}

/* --------------------------------------------------------------- triage */
interface Node {
  q?: string;
  options?: { label: string; to: string }[];
  end?: string;
}

const TRIAGE: Record<string, Node> = {
  e1: {
    end: "O pagamento não saiu. Que tente outra vez. Algumas carteiras ficam uns segundos em «A enviar…»: espera mais um pouco antes de concluir.",
  },
  e3a: { end: "O pagamento nunca chegou a sair. O dinheiro continua com ele." },
  e3b: {
    end: "Guarda o identificador e verifica a tua ligação à internet. Se estiver tudo bem do teu lado, pede ao cliente uma cópia da fatura ou do comprovativo e envia-a para a FREE até ao fim do dia. Nós falamos diretamente com o prestador do serviço; a Swiss Bitcoin Pay já devolveu dinheiro a comerciantes em situações assim.",
  },
  ok: {
    end: "Está pago. Confirma sempre no teu ecrã e só depois entrega o produto.",
  },
  s1: {
    options: [
      { label: "Vejo «Pago» ou «Enviado»", to: "s2" },
      { label: "Não vejo nada, ou diz «A enviar…»", to: "e1" },
    ],
    q: "1 · Pede para veres o ecrã do cliente. O que vês?",
  },
  s2: {
    options: [
      { label: "Começa por ln", to: "s2ln" },
      { label: "Começa por bc1, 1 ou 3", to: "s4" },
    ],
    q: "2 · Vê como começa o código do pagamento.",
  },
  s2ln: {
    options: [
      { label: "Já aparece no meu ecrã", to: "ok" },
      { label: "Continua sem aparecer, e ele garante que enviou", to: "s3" },
    ],
    q: "Foi Lightning. Provavelmente o pedido expirou: faz um novo. Se não chegou, o dinheiro volta sozinho à carteira dele. E agora?",
  },
  s3: {
    options: [
      { label: "Não existe nenhum", to: "e3a" },
      { label: "Existe", to: "e3b" },
    ],
    q: "3 · Pede o identificador da transação. Existe?",
  },
  s4: {
    end: "4 · Foi on-chain, é só esperar: 10 a 15 minutos, às vezes mais. É normal e não significa que se tenha perdido. Combina com o cliente: ou espera contigo, ou trocam contactos e resolvem quando entrar.",
  },
};

export function Triage() {
  const [path, setPath] = useState<string[]>(["s1"]);
  const node: Node = TRIAGE[path.at(-1) ?? "s1"] ?? { end: "" };
  return (
    <figure className={widget}>
      <figcaption className="mb-3 font-semibold">
        O cliente diz «já paguei» e não vês nada? Segue as perguntas.
      </figcaption>
      {node.q && <p className="my-3 text-lg font-semibold">{node.q}</p>}
      {node.options && (
        <div className="my-2 flex flex-col gap-2">
          {node.options.map((o) => (
            <button
              key={o.to}
              type="button"
              className={option}
              onClick={() => setPath((p) => [...p, o.to])}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
      {node.end && (
        <p className={answer} key={path.at(-1)}>
          {node.end}
        </p>
      )}
      <div className="my-2 flex flex-wrap gap-2">
        {path.length > 1 && (
          <button
            type="button"
            className={linkBtn}
            onClick={() => setPath((p) => p.slice(0, -1))}
          >
            ← Voltar
          </button>
        )}
        {path.length > 1 && (
          <button
            type="button"
            className={linkBtn}
            onClick={() => setPath(["s1"])}
          >
            Recomeçar
          </button>
        )}
      </div>
    </figure>
  );
}
