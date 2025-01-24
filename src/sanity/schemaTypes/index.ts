import { type SchemaTypeDefinition } from 'sanity'
import {  products } from './product'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
}
