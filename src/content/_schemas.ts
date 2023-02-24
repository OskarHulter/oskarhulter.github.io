import { z } from 'zod'

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(['others']),
    ogImage: z.string().optional(),
    description: z.string(),
  })
  .strict()

export type BlogFrontmatter = z.infer<typeof blogSchema>

export const npmCreatorSchema = z
  .object({
    name: z.string(),
    avatarUrl: z.string().optional(),
    twitter: z.string().optional(),
    homepage: z.string().optional(),
  })
  .strict()

export type NpmCreator = z.infer<typeof npmCreatorSchema>

export const npmPackageSchema = z
  .object({
    name: z.string(),
    version: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).optional(),
    stars: z.number().optional(),
    downloads: z.number().optional(),
    license: z.string().optional(),
    repositoryUrl: z.string().optional(),
    homepageUrl: z.string().optional(),
    issues: z.number().optional(),
    npmUrl: z.string().optional(),
    creator: z.string().optional(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
  })
  .strict()

export type NpmPackage = z.infer<typeof npmPackageSchema>

export const packageReviewSchema = z
  .object({
    name: z.string(),
    version: z.string(),
    description: z.string(),
    score: z.number().min(0).max(5),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
  })
  .strict()

export type PackageReview = z.infer<typeof packageReviewSchema>
