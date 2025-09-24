# Application Full-Stack IA avec Next.js, Upstash & Llama 3

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Upstash](https://img.shields.io/badge/Upstash-04A69C?style=for-the-badge&logo=redis&logoColor=white)
![Llama3](https://img.shields.io/badge/Llama3-A020F0?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

Cette application est une démonstration de la création d’une app full-stack basée sur l’intelligence artificielle.  
Elle permet de chatter avec des sites web en intégrant un modèle IA (Llama 3), tout en gérant l’historique et le stockage via une base vectorielle Redis (Upstash).

---

## Fonctionnalités

- Interface web moderne construite avec **Next.js** et **DaisyUI**  
- Intégration d’un modèle d’IA **Llama 3** pour générer des réponses pertinentes  
- Stockage et récupération des données conversationnelles avec **Redis / Upstash**  
- Mise en place d’une **base vectorielle** pour les requêtes contextuelles (RAG)  
- API pour l’historique des messages et gestion des requêtes IA  
- Gestion de **sessions utilisateurs** via cookies  

---

## Technologies utilisées

- [Next.js](https://nextjs.org/) (React framework)
- [DaisyUI](https://daisyui.com/) (composants Tailwind CSS)
- [Upstash Redis](https://upstash.com/) (Redis serverless + base vectorielle)
- [Llama 3](https://ai.meta.com/llama/) (modèle IA)
- API interne Next.js pour les endpoints / RAG Chat
- Cookies pour les sessions utilisateurs

---

## Installation

### Prérequis

- Node.js 18+  
- Un compte [Upstash Redis](https://upstash.com/)  
- Un token API / clé pour **Llama 3** (ou endpoint fourni)  

### Étapes

```bash
# Cloner le dépôt
git clone https://github.com/ton-utilisateur/ton-projet.git
cd ton-projet

# Installer les dépendances
npm install

# Configurer les variables d’environnement
cp .env.example .env.local
# Éditer .env.local et ajouter vos clés Upstash / Llama3
```

---

##  Utilisation

```bash
# Lancer le serveur Next.js
npm run dev
```

Puis ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.  
Vous pouvez chatter avec l’IA et visualiser l’historique stocké dans Redis.


---

## Remerciements

- [Tutoriel YouTube “Créer une application full-stack IA avec Next.js, Upstash et Llama 3”](https://www.youtube.com/watch?v=YS5etmvl5Ic)  
- Llama 3 par Meta AI  
- Upstash Redis pour la base vectorielle  
- DaisyUI pour l’UI rapide  
