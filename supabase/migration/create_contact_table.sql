/*
  # Create contacts table for portfolio form submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required) - Contact person's name
      - `email` (text, required) - Contact person's email
      - `message` (text, required) - Message from contact
      - `created_at` (timestamptz) - Timestamp of submission
      - `read` (boolean, default false) - Track if message has been read
  
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for inserting new contacts (public access for form submission)
    - Add policy for reading contacts (authenticated access only for portfolio owner)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);