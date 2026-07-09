import {createClient} from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

const hasSanity = Boolean(projectId)

const client = hasSanity
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null

function wrap(data) {
  return {data, loading: false}
}

async function fetchSanity(query, params) {
  if (!client) throw new Error('Sanity not configured')
  return client.fetch(query, params)
}

export function getPhilosophers() {
  if (hasSanity) {
    return fetchSanity(`*[_type == "philosopher"]{
      _id, name, greekName, "slug": slug.current, era, lifespan, bio, portraitBg, imageUrl, theme,
      quotes[]{text, source, context},
      "bookCount": count(*[_type == "book" && author._ref == ^._id]),
      "quoteCount": count(quotes)
    }`).then(d => ({data: d, loading: false}))
  }
  return import('../data/localData').then(m => wrap(m.philosophers))
}

export function getPhilosopher(slug) {
  if (hasSanity) {
    return fetchSanity(
      `*[_type == "philosopher" && slug.current == $slug][0]{
        _id, name, greekName, "slug": slug.current, era, lifespan, bio, portraitBg, imageUrl, theme,
        quotes[]{text, source, context},
        "bookCount": count(*[_type == "book" && author._ref == ^._id]),
        "quoteCount": count(quotes)
      }`,
      {slug}
    ).then(d => ({data: d, loading: false}))
  }
  return import('../data/localData').then(m => wrap(m.getPhilosopherBySlug(slug)))
}

export function getBooks() {
  if (hasSanity) {
    return fetchSanity(`*[_type == "book"]{
      _id, title, "authorId": author->slug.current, "slug": slug.current,
      description, complexity, era, coverUrl, pdfUrl, pages
    }`).then(d => ({data: d, loading: false}))
  }
  return import('../data/localData').then(m => wrap(m.books))
}

export function getBooksByAuthor(authorSlug) {
  if (hasSanity) {
    return fetchSanity(
      `*[_type == "book" && author->slug.current == $authorSlug]{
        _id, title, "authorId": author->slug.current, "slug": slug.current,
        description, complexity, era, coverUrl, pdfUrl, pages
      }`,
      {authorSlug}
    ).then(d => ({data: d, loading: false}))
  }
  return import('../data/localData').then(m => wrap(m.getBooksByAuthor(authorSlug)))
}

export function getBook(slug) {
  if (hasSanity) {
    return fetchSanity(
      `*[_type == "book" && slug.current == $slug][0]{
        _id, title, "authorId": author->slug.current, "authorName": author->name,
        "authorSlug": author->slug.current, "slug": slug.current,
        description, complexity, era, coverUrl, pdfUrl, pages
      }`,
      {slug}
    ).then(d => ({data: d, loading: false}))
  }
  return import('../data/localData').then(m => wrap(m.getBookBySlug(slug)))
}
