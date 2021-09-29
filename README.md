# Document Signing PROJECT

# Require

-   **Nodejs** : 12.22.2
-   **MongoDB** : 4.4.4
-   **Use TypeScript** : 4.1.5

# Environments

-   **development**: Development (local) environment
-   **staging** : Staging environment
-   **production** : Production environment

# Pattern

-   Repository Pattern

# How to run

-   **Step 1:** Clone git repository:
-   **Step 2:** Install packages:
    `npm install`
-   **Step 3:** :

    -   Copy file `.env` (not public)
    -   Notice changing database connection parameters...in local, ...

-   **Step 4:** Run server
    -   Run in normal mode: `npm run dev`
    -   Run fast, skip syntax checking: `npm run dev_fast`

## Api docs

-   Postman API docs

# Build & Deploy

-   **Step 1: Build project**
    -   `npm run build`
    -   dev: `NODE_ENV=development`
    -   staging: `NODE_ENV=staging`
    -   production: `NODE_ENV=production`
-   **Step 2: Run project**
    -   `node build/index.js`

# Change log
