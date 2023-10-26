import { useState } from 'react';


function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);

    // Reset copied state after a short delay
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="my-4 p-4 rounded-md bg-[#242424] text-gray-300 w-[78%] relative">
      {code}
      <button
        onClick={handleCopyClick}
        className={`hidden sm:block absolute top-2 ${copied ? 'mr-4 mt-1' : 'hover:bg-gray-700' } right-2 w-[50px] px-2 py-1 rounded-2xl`}
      >
        {copied ? 'copied' : <img src="copy.png" alt="" srcset="" /> }
      </button>
    </div>
  );
}

export default CodeBlock;
