import { generateMock } from '@anatine/zod-mock'
import { blogSchema, npmCreatorSchema } from '../../src/content/_schemas'

export const mockFrontmatter = generateMock(blogSchema)
export const mockNpmCreator = generateMock(npmCreatorSchema)

export const MockCardProps = {
  href: '/',
  frontmatter: mockFrontmatter,
  secHeading: true,
}
