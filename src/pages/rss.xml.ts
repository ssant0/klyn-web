import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.datePublished.getTime() - a.data.datePublished.getTime(),
  );

  return rss({
    title: 'Blog Klyn — Suministros de limpieza y papelería',
    description:
      'Guías, consejos y recursos sobre suministros de limpieza, papelería y abastecimiento B2B para empresas en México.',
    site: context.site ?? 'https://www.klyn.com.mx',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.datePublished,
      link: `/blog/posts/${post.id}/`,
      categories: [post.data.category, ...(post.data.tags ?? [])],
      author: post.data.author,
    })),
    customData: '<language>es-MX</language>',
  });
}
