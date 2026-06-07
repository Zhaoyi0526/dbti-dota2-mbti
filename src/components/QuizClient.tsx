"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useMemo, useState } from "react";
import { questions, TOTAL_QUESTIONS } from "@/data/questions";
import { scoreAllAnswers } from "@/lib/scoring";
import { ProgressBar } from "./ProgressBar";

const STORAGE_KEY = "dbti-result";

const optionBaseClass =
  "w-full cursor-pointer block rounded-lg border border-zinc-800/60 bg-zinc-900/50 px-4 py-3.5 text-left text-sm text-zinc-300 transition-all active:bg-zinc-800/80 has-[:checked]:border-purple-500/70 has-[:checked]:bg-zinc-800/60 has-[:checked]:text-zinc-100 has-[:checked]:shadow-[0_0_0_1px_rgba(168,85,247,0.35)]";

const incompleteSectionClass =
  "rounded-xl border border-red-500/80 p-3 shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse";

export function QuizClient() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [highlightedQuestionId, setHighlightedQuestionId] = useState<number | null>(
    null
  );
  const [validationHint, setValidationHint] = useState<string | null>(null);

  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const allAnswered = answeredCount === TOTAL_QUESTIONS;

  const getFirstUnansweredId = useCallback(() => {
    const unanswered = questions.find((q) => answers[q.id] === undefined);
    return unanswered?.id ?? null;
  }, [answers]);

  const scrollToQuestion = useCallback((questionId: number) => {
    const element = document.getElementById(`question-${questionId}`);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "center" });
    setHighlightedQuestionId(questionId);

    window.setTimeout(() => {
      setHighlightedQuestionId((current) =>
        current === questionId ? null : current
      );
    }, 4000);
  }, []);

  const handleChange = (questionId: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    setValidationHint(null);

    if (highlightedQuestionId === questionId) {
      setHighlightedQuestionId(null);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!allAnswered) {
      const firstMissed = getFirstUnansweredId();
      if (firstMissed !== null) {
        const remaining = TOTAL_QUESTIONS - answeredCount;
        setValidationHint(`还有 ${remaining} 题未作答，已定位到第一处漏题`);
        scrollToQuestion(firstMissed);
      }
      return;
    }

    const result = scoreAllAnswers(questions, answers);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(result));
    router.push("/result");
  };

  return (
    <>
      <ProgressBar answered={answeredCount} total={TOTAL_QUESTIONS} />

      <main className="min-h-dvh bg-[#121214] pb-32 pt-6">
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-lg px-4"
          noValidate
        >
          <header className="mb-8 border-b border-zinc-800/50 pb-6 pt-4">
            <p className="mb-1 font-mono text-xs uppercase tracking-widest text-cyan-500/80">
              DBTI · 7.41C
            </p>
            <h1 className="mb-2 text-2xl font-semibold text-zinc-100">
              刀狗人格测试
            </h1>
            <p className="text-sm leading-relaxed text-zinc-400">
              向下滚动，根据你过往对局中最常出现的行为作答。已答{" "}
              <span className="font-mono text-zinc-200">{answeredCount}</span> /{" "}
              {TOTAL_QUESTIONS}
            </p>
          </header>

          <div className="space-y-10">
            {questions.map((question) => {
              const isHighlighted = highlightedQuestionId === question.id;
              const isUnanswered = answers[question.id] === undefined;

              return (
                <section
                  key={question.id}
                  id={`question-${question.id}`}
                  className={`scroll-mt-6 transition-all duration-300 ${
                    isHighlighted && isUnanswered ? incompleteSectionClass : ""
                  }`}
                >
                  <div className="mb-4">
                    <p className="mb-1 font-mono text-xs text-violet-400/90">
                      Q{question.id}
                    </p>
                    <p className="mb-2 text-xs text-zinc-500">
                      在你过往的对局中，你最常出现的行为是……
                    </p>
                    <h2 className="text-base font-medium leading-relaxed text-zinc-100">
                      {question.text}
                    </h2>
                    {isHighlighted && isUnanswered && (
                      <p className="mt-2 text-xs font-medium text-red-400">
                        请选择一个选项
                      </p>
                    )}
                  </div>

                  <fieldset className="space-y-2.5">
                    <legend className="sr-only">第 {question.id} 题选项</legend>
                    {question.options.map((option, optionIndex) => {
                      const inputId = `q${question.id}-o${optionIndex}`;
                      const checked = answers[question.id] === optionIndex;

                      return (
                        <label
                          key={optionIndex}
                          htmlFor={inputId}
                          className={`${optionBaseClass} ${
                            checked ? "border-amber-500/50" : ""
                          }`}
                        >
                          <input
                            id={inputId}
                            type="radio"
                            name={`question-${question.id}`}
                            value={optionIndex}
                            checked={checked}
                            onChange={() => handleChange(question.id, optionIndex)}
                            className="sr-only"
                          />
                          {option.text}
                        </label>
                      );
                    })}
                  </fieldset>
                </section>
              );
            })}
          </div>

          <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-800/60 bg-[#121214]/95 px-4 py-4 backdrop-blur-md">
            <div className="mx-auto w-full max-w-lg">
              {validationHint && (
                <p className="mb-2 text-center text-xs font-medium text-red-400">
                  {validationHint}
                </p>
              )}
              <div className="flex items-center gap-3">
                <p className="min-w-0 flex-1 truncate text-xs text-zinc-500">
                  {allAnswered
                    ? "全部作答完成，可提交查看本命报告"
                    : `还需作答 ${TOTAL_QUESTIONS - answeredCount} 题`}
                </p>
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  查看我的本命报告
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
