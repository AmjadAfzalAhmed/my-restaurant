import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const chefQuery = `*[_type == "chef"] {
  name,
  position,
  experience,
  specialty,
  "imageUrl": image.asset->url,
  description,
  available
}`

export const foodQuery = `*[_type == "food"] {
  name,
  category,
  price,
  originalPrice,
  tags,
  "imageUrl": image.asset->url,
  description,
  available
}
`

