import { Fragment, useState } from "react";

export default function TextExpander({ maxValue, children }) {
  const [shortenText, setShortenText] = useState(false);

  const canExpandable = children.split(" ").length >= maxValue;

  function handleClick() {
    setShortenText((prev) => !prev);
  }

  if (shortenText)
    if (canExpandable && setShortenText) {
      const shortedText = children.split(" ").slice(0, maxValue).join(" ");
      return (
        <Fragment>
          <div style={{ display: "inline-block" }}>{shortedText}</div>
          <span
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            Show More
          </span>
        </Fragment>
      );
    }
  return (
    <>
      <div>{children}</div>
      <span
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={handleExpand}
      >
        {canExpandable ? "Show Less" : ""}
      </span>
    </>
  );
}
