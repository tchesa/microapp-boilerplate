<img alt='Typescript' src='https://img.shields.io/badge/Typescript-100000?style=for-the-badge&logo=Typescript&logoColor=white&labelColor=3456FF&color=3456FF'/><img alt='Nextjs' src='https://img.shields.io/badge/Next.js-100000?style=for-the-badge&logo=Nextjs&logoColor=white&labelColor=3456FF&color=000000'/><img alt='Mantine' src='https://img.shields.io/badge/Mantine-100000?style=for-the-badge&logo=Mantine&logoColor=white&labelColor=3456FF&color=37ace7'/>

## Getting Started

First:

```bash
yarn install
```

Install husky:

```bash
yarn prepare
```

Run the app locally:

```bash
yarn dev
```

Open [https://localhost:3000](https://localhost:3000) with your browser.

## Creating a micro app

In order to create your app, please check the [template](pages/index.tsx) page.

## UI

We are using Mantine for our UI. You can see available components [here](https://ui.mantine.dev/).

See the list of reusable components:

- [AppCard](components/AppCard/AppCard.tsx)
- [AppDetailsHeader](components/AppDetailsHeader/AppDetailsHeader.tsx)
- [ColorSchemeToggle](components/ColorSchemeToggle/ColorSchemeToggle.tsx)
- [Footer](components/Footer/Footer.tsx)
- [Logo](components/Logo/Logo.tsx)
- [NavBar](components/NavBar/NavBar.tsx)
- [Newsletter](components/Newsletter/Newsletter.tsx)
- [TextInputLeftComponent](components/TextInputLeftComponent/TextInputLeftComponent.tsx)

Please check Mantine's [documentation](https://mantine.dev/) for more information on how to use it.

## Layout

There is Layout provider that wraps the entire app. Also, there is a `MainLayout` that is being used for all the routes, so when you create a new page, it will come with the `NavBar` and `Footer`, if your page doesn't need the footer, please check [LayoutProvider](providers/Layout/LayoutProvider.tsx) to see how it works.

<em>Note: We are not using the benefits of the experimental `app` folder in Next.js 13, but we'll change this once it gets more stable.</em>

## Folder structure

- assets
- components
- layouts
- pages
- providers
- public
