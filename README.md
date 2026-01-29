# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```mini-shop/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── app/                       # глобальные настройки приложения
│   │   ├── store.ts               # Redux Toolkit store
│   │   ├── rootReducer.ts         # комбинируем слайсы
│   │   └── providers.tsx          # обёртки типа <Provider>
│   │
│   ├── entities/                  # бизнес-сущности
│   │   ├── product/
│   │   │   ├── model/
│   │   │   │   ├── types.ts       # типы Product
│   │   │   │   ├── productSlice.ts
│   │   │   │   └── productSelectors.ts
│   │   │   └── ui/
│   │   │       ├── ProductCard.tsx
│   │   │       └── ProductDetails.tsx
│   │   │
│   │   ├── cart/
│   │   │   ├── model/
│   │   │   │   ├── types.ts       # типы CartItem
│   │   │   │   ├── cartSlice.ts
│   │   │   │   ├── cartSelectors.ts
│   │   │   │   └── persist.ts     # localStorage helpers
│   │   │   └── ui/
│   │   │       ├── CartItem.tsx
│   │   │       └── CartList.tsx
│   │   │
│   │   └── user/
│   │       ├── model/
│   │       │   ├── types.ts       # типы User
│   │       │   ├── userSlice.ts
│   │       │   └── userSelectors.ts
│   │
│   ├── features/                  # фичи, которые используют сущности
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── LoginSchema.ts
│   │   │   │   └── loginSlice.ts  # локальный слайс, если нужно
│   │   │   └── register/
│   │   │       ├── RegisterForm.tsx
│   │   │       ├── RegisterSchema.ts
│   │   │       └── registerSlice.ts
│   │   │
│   │   ├── checkout/
│   │   │   └── ui/
│   │   │       ├── CheckoutButton.tsx
│   │   │       └── CheckoutModal.tsx
│   │   │
│   │   └── select-cart-items/
│   │       ├── SelectCartItems.tsx
│   │       └── selectCartItemsSlice.ts
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── ProductPage.tsx        # детальная страница товара
│   │
│   ├── widgets/                   # переиспользуемые UI-компоненты
│   │   ├── Header/
│   │   ├── ProductGrid/
│   │   └── CartDrawer/
│   │
│   ├── shared/                    # общие утилиты и типы
│   │   ├── api/                   # axios/fetch wrappers
│   │   ├── ui/                    # общие UI-компоненты (Button, Input)
│   │   ├── lib/                   # хелперы и утилиты
│   │   └── types/                 # глобальные типы
│   │
│   ├── mocks/                      # мок API
│   │   └── msw/
│   │
│   ├── routes/
│   │   └── AppRouter.tsx
│   │
│   ├── main.tsx
│   ├── index.css
│   └── App.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── postcss.config.js
├── tailwind.config.js
└── ...

```
