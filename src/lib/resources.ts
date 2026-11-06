import { getCollection, type CollectionEntry } from 'astro:content';

export type Resource = CollectionEntry<'docs'>;

/** Library tabs. Each tab lists the content `type`s it shows. */
export const formats = [
  { label: 'Learn', types: ['concept'], dir: 'learn' },
  { label: 'Cookbook', types: ['cookbook', 'playbook'], dir: 'cookbook' },
  { label: 'Recipes', types: ['recipe'], dir: 'recipes' },
  { label: 'Showcase', types: ['demo', 'showcase'], dir: 'showcase' },
  { label: 'Blog', types: ['blog'], dir: 'blog' },
] as const;

export const typeLabel = (t?: string) =>
  ({ concept: 'Learn', demo: 'Interactive lab', cookbook: 'Cookbook', playbook: 'Playbook', recipe: 'Recipe', showcase: 'Scenario', blog: 'Blog', guide: 'Guide' })[t ?? ''] ?? '';

export const cap = (s?: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : '');

/** All library resources (pages with a resource `type`), optionally limited to one folder. */
export async function getResources(dir?: string): Promise<Resource[]> {
  const all = await getCollection(
    'docs',
    (e) =>
      !!e.data.type && e.data.type !== 'guide' && !e.id.endsWith('/index') && !e.data.draft &&
      (!dir || e.id.startsWith(`${dir}/`)),
  );
  const rank = (t?: string) => formats.findIndex((f) => (f.types as readonly string[]).includes(t ?? ''));
  return all.sort(
    (a, b) =>
      (a.data.sidebar?.order ?? 999) - (b.data.sidebar?.order ?? 999) ||
      rank(a.data.type) - rank(b.data.type) ||
      a.data.title.localeCompare(b.data.title),
  );
}
