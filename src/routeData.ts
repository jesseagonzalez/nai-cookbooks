import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

/**
 * One page at a time: drop the site-wide sidebar so each page shows only its own
 * "On this page" sections (moved to the left in theme.css). Section pages are
 * reached from the header navigation and the resource library.
 */
export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  route.hasSidebar = false;
  // Section and index pages have no sections of their own: give them the full width.
  if (route.toc && route.toc.items.length <= 1) route.toc = undefined;
});
