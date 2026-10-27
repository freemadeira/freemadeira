import { buttonVariants } from "@freemadeira/ui/components/button";
import {
  RadioGroup,
  RadioGroupItem,
} from "@freemadeira/ui/components/radio-group";
import { cn } from "cn";
import { useState } from "react";

type Choice = "english" | "portuguese" | "all";

interface Props {
  initial: Choice;
  labels: {
    error: string;
    group: string;
    options: Record<Choice, { description: string; name: string }>;
    save: string;
    saved: string;
  };
}

const choices: Choice[] = ["english", "portuguese", "all"];

/** Which language(s) the newsletter arrives in. */
export default function NewsletterPreferences({ initial, labels }: Props) {
  const [choice, setChoice] = useState<Choice>(initial);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle"
  );

  async function save() {
    setStatus("saving");
    const languages = choice === "all" ? ["english", "portuguese"] : [choice];
    try {
      const response = await fetch("/api/newsletter/preferences", {
        body: JSON.stringify({ languages }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      setStatus(response.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <RadioGroup
        aria-label={labels.group}
        className="w-full max-w-md gap-4 md:w-1/2"
        onValueChange={(value) => setChoice(value as Choice)}
        value={choice}
      >
        {choices.map((key) => (
          <label
            className={cn(
              "bg-bridal-50/50 hover:outline-mountain-mist-200 flex cursor-pointer items-center gap-4 px-5 py-4 outline-[1.5px] outline-transparent transition",
              choice === key && "bg-bridal-50 outline-primary-400"
            )}
            key={key}
          >
            <RadioGroupItem className="size-6" value={key} />
            <span className="flex grow flex-col text-sm/6">
              <span className="text-[20px] leading-[150%] sm:text-xl">
                {labels.options[key].name}
              </span>
              <span className="text-mountain-mist-400">
                {labels.options[key].description}
              </span>
            </span>
          </label>
        ))}
      </RadioGroup>
      <div className="flex flex-col gap-2">
        <button
          className={buttonVariants({ variant: "fm" })}
          disabled={status === "saving"}
          onClick={save}
          type="button"
        >
          {labels.save}
        </button>
        <p aria-live="polite" className="min-h-5 text-sm">
          {status === "saved" && labels.saved}
          {status === "error" && labels.error}
        </p>
      </div>
    </div>
  );
}
