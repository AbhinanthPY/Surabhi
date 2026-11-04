interface HeadingLine {
  text: string;
  emphasis?: boolean;
}
interface Props {
  as?: "h1" | "h2";
  lines: HeadingLine[];
  className?: string;
  id?: string;
}

/** Real text remains in the document; masks animate presentation, never reading order. */
export function RevealHeading({
  as: Tag = "h2",
  lines,
  className = "",
  id,
}: Props) {
  const text = lines.map((line) => line.text).join(" ");
  return (
    <Tag
      id={id}
      className={`reveal-heading ${className}`}
      data-reveal-lines
      aria-label={text}
    >
      {lines.map((line, i) => (
        <span
          className="reveal-line"
          key={`${line.text}-${i}`}
          aria-hidden="true"
        >
          <span className="reveal-line-content">
            {line.emphasis ? <em>{line.text}</em> : line.text}
          </span>
          {i < lines.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
