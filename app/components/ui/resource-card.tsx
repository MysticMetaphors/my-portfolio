import React from 'react';
import { Resource } from '@/types/type'; // Assuming this is correct for your project
import { LiveProvider, LivePreview, LiveError } from 'react-live';

const renderLiveComponent = (preview: string | null) => {
  if (!preview) {
    return (
      <div className="text-white/40 text-sm border border-dashed border-white/20 p-4 rounded-lg">
        No preview available
      </div>
    );
  }

  return (
    <LiveProvider code={preview}>
      <div className="w-full flex items-center justify-center">
        <LivePreview />
      </div>

      <LiveError className="absolute bottom-2 left-2 right-2 text-red-400 text-xs bg-red-950/80 p-2 rounded border border-red-500/50" />
    </LiveProvider>
  );
};

export default function ResourceCard({ item }: { item: Resource }) {
  const [copied, setCopied] = React.useState(false);
  const [selectedFramework, setSelectedFramework] = React.useState<string>('tailwindcss');

  function copyToClipboard(text: string) {
    if (!text) return; // Prevent copying empty strings
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  // 1. New function to determine WHICH code to copy
  const handleCopyClick = () => {
    if (selectedFramework === 'tailwindcss') {
      copyToClipboard(item.preview || '');
    } else {
      const activeSnippet = item.snippets?.find(s => s.framework_slug === selectedFramework);
      copyToClipboard(activeSnippet?.source || '');
    }
  };

  // Helper to ensure the top-right icon doesn't break when "html-css" is selected
  const displayIconSlug = selectedFramework === 'html-css' ? 'html5' : selectedFramework;

  console.log(item);

  return (
    <div className="group block relative rounded-2xl outline-none h-full">
      <div className="absolute bg-darkblue-primary border-b border-l border-white/10 p-1 px-4 rounded-bl-md rounded-tr-xl text-sm flex items-center gap-2 top-0 right-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* 2. Attach the new copy handler here */}
        <button onClick={handleCopyClick} className="bg-darkblue-primary border border-white/10 p-1 px-2 rounded-sm cursor-pointer text-sm font-medium text-white/80 flex items-center gap-1 hover:text-white transition-colors duration-300">
          {copied ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg> : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>}
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <div className="flex items-center">
          {/* 3. Removed the hardcoded onClick={() => setSelectedFramework('react')} that was here */}
          <div className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center opacity-100 transition-opacity">
            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${displayIconSlug}/${displayIconSlug}-original.svg`} className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" alt={`${displayIconSlug} icon`} />
          </div>
        </div>
      </div>
      <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-primary/0 via-blue-primary/50 to-blue-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full bg-[#0a0f1a] rounded-2xl border border-white/10 flex flex-col overflow-hidden transition-all duration-300 shadow-lg">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-primary rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none z-0" />
        <div className="relative w-full h-56 bg-white border-b border-white/5 flex items-center justify-center overflow-hidden z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />

          <div className="relative z-20 flex items-center justify-center w-full h-full p-4">
            {renderLiveComponent(item.preview)}
          </div>
        </div>

        {/* BOTTOM SECTION: Content & Metadata */}
        <div className="p-6 flex flex-col flex-1 z-10 bg-[#0a0f1a]">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 tracking-wide">
              {item.name}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Tags / Variants */}
          <div className="mt-2 flex items-center flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="uppercase px-2.5 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer: Tech Stack Icons & Live Link */}
          <div className="mt-3 flex items-center justify-between pt-5 border-t border-white/5">
            {/* Framework Icons */}
            <div className="flex items-center gap-3">
              <img
                key="default"
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg`}
                onClick={() => setSelectedFramework("tailwindcss")}
                className={`w-8 h-8 p-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity rounded-sm ${selectedFramework === "tailwindcss" ? "bg-darkblue-primary border border-white/10" : ""}`}
                alt="TailwindCSS"
                title="TailwindCSS"
              />
              {item.snippets?.map((snippet, idx) => {
                // 1. Handle the special "html-css" combo case
                if (snippet.framework_slug === "html-css") {
                  return (
                    <img
                      key={idx}
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                      alt="HTML5"
                      title="HTML5"
                      // 4. Fixed: Set state to the actual slug instead of "html5"
                      onClick={() => setSelectedFramework("html-css")}
                      sizes='10px'
                      className={`w-8 h-8 p-1 cursor-pointer opacity-70 hover:opacity-100 rounded-sm transition-opacity ${selectedFramework === "html-css" ? "bg-darkblue-primary border border-white/10" : ""}`}
                    />
                  );
                }

                // 2. Handle all other standard frameworks
                return (
                  <img
                    key={idx}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${snippet.framework_slug}/${snippet.framework_slug}-original.svg`}
                    alt={snippet.framework}
                    sizes='10px'
                    onClick={() => setSelectedFramework(snippet.framework_slug)}
                    title={snippet.framework}
                    className={`w-8 h-8 p-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity rounded-sm ${selectedFramework === snippet.framework_slug ? "bg-darkblue-primary border border-white/10" : ""}`}
                  />
                );
              })}
            </div>

            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-400 hover:text-white border border-blue-500/30 hover:border-blue-400 rounded-lg transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}