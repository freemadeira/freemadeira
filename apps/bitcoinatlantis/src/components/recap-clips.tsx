import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@freemadeira/ui/components/combobox";
import { useId, useState } from "react";

import {
  recapClips,
  recapDays,
  recapSpeakers,
  recapStages,
} from "@/data/recap-clips";

import { Disclosure } from "./disclosure";

interface RecapClipsProps {
  /** BCP 47 tag, for joining speaker names ("A, B, and C" / "A, B e C"). */
  lang: string;
  labels: {
    all: string;
    day: string;
    noMatches: string;
    speaker: string;
    stage: string;
  };
}

interface FilterProps {
  all: string;
  items: string[];
  label: string;
  noMatches: string;
  onChange: (value: string) => void;
  value: string;
}

function Filter({
  all,
  items,
  label,
  noMatches,
  onChange,
  value,
}: FilterProps) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-sm leading-7 font-light">
        {label}
      </label>
      <Combobox
        items={[all, ...items]}
        value={value}
        onValueChange={(next) => onChange(next ?? all)}
      >
        {/* The 2024 filter's size: 42px tall, rounded-md, text-sm from sm. */}
        <ComboboxInput
          id={id}
          className="mt-1 h-auto w-full rounded-md bg-white shadow-xs [&_input]:h-10 [&_input]:pl-3 sm:[&_input]:text-sm"
        />
        <ComboboxContent>
          <ComboboxEmpty>{noMatches}</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

/** The 2024 talks, filterable by speaker, stage and day. */
export function RecapClips({ labels, lang }: RecapClipsProps) {
  const [speaker, setSpeaker] = useState(labels.all);
  const [stage, setStage] = useState(labels.all);
  const [day, setDay] = useState(labels.all);

  const clips = recapClips.filter(
    (clip) =>
      (stage === labels.all || clip.stage === stage) &&
      (day === labels.all || clip.day === day) &&
      (speaker === labels.all || clip.speakers.includes(speaker))
  );

  const speakerList = new Intl.ListFormat(lang, { type: "conjunction" });

  return (
    <div className="mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="-mt-4 mb-2 flex w-full max-w-4xl flex-col justify-between gap-4 sm:mb-12 sm:flex-row">
        <Filter
          all={labels.all}
          items={recapSpeakers}
          label={labels.speaker}
          noMatches={labels.noMatches}
          onChange={setSpeaker}
          value={speaker}
        />
        <Filter
          all={labels.all}
          items={recapStages}
          label={labels.stage}
          noMatches={labels.noMatches}
          onChange={setStage}
          value={stage}
        />
        <Filter
          all={labels.all}
          items={recapDays}
          label={labels.day}
          noMatches={labels.noMatches}
          onChange={setDay}
          value={day}
        />
      </div>
      {clips.length > 0 ? (
        // Tailwind 3's divide-y: the line above each row, after its margin.
        <div className="w-full max-w-4xl [&>*+*]:border-t [&>*+*]:border-gray-900/10">
          {clips.map((clip) => (
            <div key={clip.youtube} className="mt-4">
              <Disclosure
                iconClassName="ml-12 h-auto"
                panelClassName="data-open:mt-6"
                triggerClassName="items-center"
                summary={
                  <span className="flex grow flex-col">
                    <span className="text-base leading-7 font-semibold">
                      {clip.title}
                    </span>
                    <span className="flex flex-col sm:w-full sm:flex-row sm:justify-between">
                      <span className="text-base leading-7 font-light">
                        {speakerList.format(clip.speakers)}
                      </span>
                      <span className="text-base leading-7 font-light sm:ml-6">
                        {clip.stage}
                      </span>
                    </span>
                  </span>
                }
              >
                <div className="relative aspect-video">
                  {/* YouTube's player needs scripts and its own origin, which a sandbox cannot give together. */}
                  {/* oxlint-disable-next-line react/iframe-missing-sandbox */}
                  <iframe
                    src={`https://www.youtube.com/embed/${clip.youtube}`}
                    title={clip.title}
                    allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 h-full w-full bg-black"
                  />
                </div>
              </Disclosure>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 w-full max-w-4xl">
          <p className="text-base leading-7 font-medium">{labels.noMatches}</p>
        </div>
      )}
    </div>
  );
}
