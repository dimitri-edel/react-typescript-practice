# OBJECTIVES OF THE PRACTICE

* Cover all the necessary Typescript features that are necessary for writing React applications
* Create a i18n feature for the application
* Explore React features


# SETTING UP THE REACT APP

I am using this YouTube video totorial as a starting point : https://youtu.be/665UnOGx3Pg

Furthermore, I am going to use Google's Gemini and GitHub Copilot for further assistance.

In the video the tutor suggest that the project be created using Vite, so I will do the same. (Instead of using ***npx create-react-app my-app --template typescript***)

1. Run the command : ***npm create vite@latest .*** (Mind the dot that signifies that it the project is to be created in the current folder)
2. Vite gives you a list of possible frameworks that can be used. Select **React**.
3. Select **TypeScript**

As one can see in the terminal, in order to run the app you will need to ***npm install*** first and then ***npm run dev*** 





# Vite created all of the text below
<section><details>
## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
</details>
</section>

