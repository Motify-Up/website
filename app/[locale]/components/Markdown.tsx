type MarkdownProps = {
  content: string;
};

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Minimal markdown to HTML converter (headings, lists, bold/italic, code, links)
function markdownToHtml(md: string): string {
  // Code blocks
  let html = md.replace(/```([\s\S]*?)```/g, (_, code) => `<pre class="rounded-xl bg-gray-900 text-gray-100 p-4 overflow-x-auto"><code>${escapeHtml(code.trim())}</code></pre>`);

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded-md bg-gray-100 text-gray-800">$1</code>');

  // Headings
  html = html
    .replace(/^###\s+(.*)$/gm, '<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-3">$1<\/h3>')
    .replace(/^##\s+(.*)$/gm, '<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">$1<\/h2>')
    .replace(/^#\s+(.*)$/gm, '<h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">$1<\/h1>');

  // Bold and italic
  html = html
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1<\/strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1<\/em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" class="text-green-700 hover:text-green-800 underline underline-offset-2" target="_blank" rel="noopener noreferrer">$1<\/a>');

  // Lists (simple)
  html = html.replace(/(?:^|\n)(- .*(?:\n- .*)*)/g, (match) => {
    const items = match
      .trim()
      .split(/\n/)
      .map((l) => l.replace(/^-\s+/, ''))
      .map((t) => `<li class="ml-1">${t}<\/li>`) // small indent
      .join('');
    return `\n<ul class="list-disc pl-6 space-y-2 text-gray-700">${items}<\/ul>`;
  });

  // Paragraphs
  html = html
    .split(/\n{2,}/)
    .map((block) => {
      if (/^\s*<h[1-3]|^\s*<ul|^\s*<pre/.test(block)) return block;
      return `<p class="text-gray-700 leading-7">${block.trim()}<\/p>`;
    })
    .join('\n');

  return html;
}

export default function Markdown({ content }: MarkdownProps) {
  const html = markdownToHtml(content);
  return (
    <div
      className="prose prose-neutral max-w-none prose-a:no-underline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

