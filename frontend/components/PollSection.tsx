"use client";

import { useState } from "react";
import { BarChart3, CheckCircle2 } from "lucide-react";
import { useLanguageAndData } from "@/hooks/useLanguageAndData";

export default function PollSection() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const { t, data } = useLanguageAndData();
  const candidateData = data;

  // Poll data from candidate data
  const pollOptions = candidateData.poll;

  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = (optionId: string) => {
    if (!hasVoted) {
      setSelectedOption(optionId);
      setHasVoted(true);
    }
  };

  const getPercentage = (votes: number) => {
    return totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
  };

  return (
    <section id="poll" className="py-12 bg-gradient-to-b from-white-900 to-stone-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-200 text-teal-900 text-sm font-semibold mb-4">
              <BarChart3 className="w-5 h-5" />
              {t.poll.subtitle}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sky-900 mb-4">
              {t.poll.title}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t.poll.description.replace("{{party}}", candidateData.party.name)}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-stone-200/80 p-8 space-y-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">
                {t.poll.question.replace("{{abbreviation}}", candidateData.party.abbreviation)}
              </h3>
              <p className="text-stone-600 text-sm">
                {totalVotes.toLocaleString()} {t.poll.participants}
              </p>
            </div>

            {/* Poll Options - Two Columns Layout for Medium Screens and Up */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pollOptions.map((option) => {
                const percentage = getPercentage(option.votes);
                const isSelected = selectedOption === option.id;
                const showResults = hasVoted;

                return (
                  <div
                    key={option.id}
                    className={`relative rounded-2xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? "border-teal-600 bg-teal-50"
                        : showResults
                        ? "border-stone-300 bg-white"
                        : "border-stone-300 bg-white hover:border-teal-400 hover:bg-teal-100/20"
                    }`}
                    onClick={() => handleVote(option.id)}
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center gap-3 cursor-pointer flex-1">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              isSelected
                                ? "border-teal-600 bg-teal-600"
                                : "border-stone-400"
                            }`}
                          >
                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <span className="font-medium text-stone-900">{option.label}</span>
                        </label>
                        {showResults && (
                          <span className="text-sm font-bold text-stone-700 ml-4">
                            {percentage}%
                          </span>
                        )}
                      </div>
                      {showResults && (
                        <div className="mt-4">
                          <div className="w-full bg-stone-200 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                isSelected
                                  ? "bg-gradient-to-r from-teal-600 to-teal-700"
                                  : "bg-stone-400"
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <p className="text-xs text-stone-500 mt-1">
                            {option.votes.toLocaleString()} votes
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {!hasVoted && (
              <div className="text-center">
                <p className="text-sm text-stone-500 mb-4">{t.poll.selectOption}</p>
              </div>
            )}

            {hasVoted && (
              <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-6 text-center">
                <p className="text-teal-900 font-semibold">✓ {t.poll.thankyou}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
