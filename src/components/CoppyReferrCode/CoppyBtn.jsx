/* eslint-disable react/prop-types */
import { useState } from "react";

const CopyToClipboardButton = ({ textToCopy }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyTextToClipboard = (text) => {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);

    // Select the text within the textarea
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Clean up: remove the temporary textarea from the DOM
    document.body.removeChild(textarea);

    // Set copy success state to true and reset after 2 seconds
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          copyTextToClipboard(textToCopy);
        }}
      >
        Copy
      </button>
      {copySuccess && (
        <p style={{ color: "green" }}>Referrer's Code copied !</p>
      )}
    </div>
  );
};

export default CopyToClipboardButton;
