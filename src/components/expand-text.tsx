import { useState } from "react";

type ExpandableTextProps = {
  text: string;
};

export default function ExpandableText({ text }: ExpandableTextProps) {
  const [expand, setExpand] = useState(false);

  const firstSentenceMatch = text.match(/.*?[.?!](\s|$)/);
  const firstSentence = firstSentenceMatch ? firstSentenceMatch[0] : text;

  const shouldTruncate = firstSentence.length < text.length;

  return (
    <div className='text-md text-white/90 max-w-xl'>
      {expand || !shouldTruncate ? text : firstSentence}
      {shouldTruncate && (
        <button
          onClick={() => setExpand(!expand)}
          className='hover:underline font-medium'
        >
          {expand ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
