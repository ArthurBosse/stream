/*
  # Correction des politiques RLS

  1. Modifications
    - Ajout de politiques pour permettre l'insertion anonyme dans page_views
    - Ajout de politiques pour permettre l'insertion anonyme dans movie_views
    
  2. Sécurité
    - Maintien de la restriction de lecture aux administrateurs
    - Autorisation d'insertion pour les utilisateurs anonymes
*/

-- Politique pour permettre l'insertion anonyme dans page_views
CREATE POLICY "Allow anonymous insert on page_views"
  ON page_views
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Politique pour permettre l'insertion anonyme dans movie_views
CREATE POLICY "Allow anonymous insert on movie_views"
  ON movie_views
  FOR INSERT
  TO anon
  WITH CHECK (true);