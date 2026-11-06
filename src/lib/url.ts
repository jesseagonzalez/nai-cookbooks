/** Builds a site-internal URL that respects the configured `base` path. Use for component props like <LinkCard href>. */
export const withBase = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
