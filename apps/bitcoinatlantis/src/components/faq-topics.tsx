import { Disclosure } from "./disclosure";

export interface FaqTopicItem {
  id: string;
  questions: { answer: string; question: string }[];
  topic: string;
}

interface FaqTopicsProps {
  topics: FaqTopicItem[];
}

/** Questions open one by one; answers are trusted HTML from src/data/faqs.ts. */
export function FaqTopics({ topics }: FaqTopicsProps) {
  return topics.map(({ id, questions, topic }) => (
    <div key={id} id={id} className="mt-20 scroll-mt-36 sm:scroll-mt-32">
      {/* Tailwind 3's divide-y and space-y styled the later sibling, so each
          line sat above its row, after the gap; v4's style the earlier one. */}
      <div className="mx-auto max-w-4xl [&>*+*]:border-t [&>*+*]:border-gray-900/10">
        <h2 className="text-2xl leading-10 font-bold tracking-tight text-gray-900">
          {topic}
        </h2>
        <div className="mt-10 [&>*+*]:mt-6 [&>*+*]:border-t [&>*+*]:border-gray-900/10">
          {questions.map(({ answer, question }) => (
            <Disclosure
              key={question}
              keepMounted
              panelClassName="pr-12"
              summary={
                <span className="text-base leading-7 font-semibold">
                  {question}
                </span>
              }
            >
              <div
                className="text-base leading-7 text-gray-600 [&_a]:font-medium [&_a]:text-yellow-500"
                // Written by us in src/data/faqs.ts.
                // oxlint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  ));
}
