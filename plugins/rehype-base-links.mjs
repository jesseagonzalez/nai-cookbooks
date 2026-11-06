/**
 * Prefixes root-relative links in Markdown/MDX (e.g. "/recipes/") with Astro's `base`,
 * so content can be written without knowing where the site is hosted.
 */
import { visit } from 'unist-util-visit';

export default function rehypeBaseLinks(base = '/') {
  const prefix = base.replace(/\/$/, '');
  return () => (tree) => {
    if (!prefix) return;
    visit(tree, 'element', (node) => {
      const href = node.properties?.href;
      if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && !href.startsWith(prefix + '/')) {
        node.properties.href = prefix + href;
      }
    });
  };
}
