import { InferModel } from 'drizzle-orm'
import {
  serial,
  timestamp,
  pgTable,
  varchar,
  numeric,
  integer,
  text,
} from 'drizzle-orm/pg-core'

export const donor = pgTable('donor', {
  id: serial('id').primaryKey(),
  created_at: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),

  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 100 }).unique().notNull(),
  hash: varchar('hash', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }),
  stripe_id: varchar('stripe_id', { length: 30 }).unique(),
  address: text('address'),
  refresh_token: varchar('refresh_token', { length: 255 }),
})

export const donation = pgTable('donation', {
  id: serial('id').primaryKey(),
  created_at: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
  updated_at: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),

  donor_id: integer("donor_id").notNull().references(() => donor.id),
  amount: integer('amount').notNull(),
  status: varchar('status', { length: 10 }).$type<"complete" | "pending" | "error" | "delete">().default('pending'),
  description: text('description'),
  currency: varchar('currency', { length: 3 }).$type<"USD" | "EUR" | "CAD">().default('USD')
})

export type Donor = InferModel<typeof donor>
export type Donation = InferModel<typeof donation>
