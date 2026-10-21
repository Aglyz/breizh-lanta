#!/usr/bin/env bash
set -Eeuo pipefail

cd "$(dirname "$0")/.."

if [[ ! -f .env ]]; then
  echo "Erreur : le fichier .env de production est absent."
  exit 1
fi

echo "Validation de la configuration..."
docker compose config -q

echo "Construction des images..."
docker compose build

echo "Démarrage des services..."
docker compose up -d --remove-orphans

echo "État des services :"
docker compose ps

echo "Déploiement lancé. Vérifier les journaux et le endpoint de santé."