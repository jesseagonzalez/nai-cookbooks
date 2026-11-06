/** Pulls a short intro paragraph and the H2 section titles out of a page's MDX source, for card previews. */
export function previewOf(body = '') {
  const lines = body.split('\n');
  const intro =
    lines
      .map((l) => l.trim())
      .find((l) => l && !/^(import |export |<|#|```|\||- |\d+\.|\*\*Interface)/.test(l))
      ?.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`]/g, '') ?? '';
  const sections = lines
    .filter((l) => l.startsWith('## '))
    .map((l) => l.slice(3).replace(/^\d+\s*·\s*/, '').trim());
  return { intro, sections };
}
