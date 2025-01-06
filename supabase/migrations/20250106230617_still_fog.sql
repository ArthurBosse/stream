/*
  # Create analytics tables
  
  1. New Tables
    - `page_views`
      - `id` (uuid, primary key) 
      - `timestamp` (timestamptz)
      - `ip` (text)
      - `user_agent` (text)
      - `page_url` (text)
      - `created_at` (timestamptz)
    
    - `movie_views`
      - `id` (uuid, primary key)
      - `movie_id` (integer, references movies)
      - `view_count` (integer)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for admin access
*/

CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  timestamp timestamptz NOT NULL DEFAULT now(),
  ip text NOT NULL,
  user_agent text NOT NULL,
  page_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS movie_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  movie_id integer REFERENCES movies(id) ON DELETE CASCADE,
  view_count integer DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE movie_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow admin select on page_views"
  ON page_views
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM auth.users WHERE email = 'admin@example.com'));

CREATE POLICY "Allow admin select on movie_views"
  ON movie_views
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM auth.users WHERE email = 'admin@example.com'));