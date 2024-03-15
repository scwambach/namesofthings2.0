# Next.js Boilerplate Starter

This is a comprehensive boilerplate starter for building web applications using Next.js. It comes pre-configured with the following technologies:

- Next.js
- Husky (Git hooks)
- Prettier (Code formatting)
- ESLint (Code linting)
- TypeScript
- Jest (Unit testing)
- Cypress (End-to-end testing)
- SCSS (Sass for styling)
- Storybook (Component documentation)

## Getting Started

To get started with this boilerplate, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nextjs-boilerplate.git
2. Navigate to the project directory: `cd nextjs-boilerplate`
3. Install dependencies: `yarn`
4. Start the development server: `yarn dev`

## Scripts
- __dev__: Start the development server.
- __dev:test__: Start the development server with `jest watch`.
- __build__: Build the production-ready application.
- __start__: Start the production server.
- __lint__: Lint the code using ESLint.
- __lint__:fix: Lint the code and automatically fix issues.
- __test__: Run unit tests using Jest.
- __test:watch__: Run unit tests in watch mode.
- __coverage__: Generate test coverage report.

```
nextjs-boilerplate/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js pages and layout
│   │   ├── favicon.ico      # Favicon
│   │   ├── layout.tsx       # Layout component
│   │   ├── page.tsx         # Sample page component
│   ├── components/          # React components
│   │   ├── blocks/
│   │   ├── global/
│   │   ├── modules/
│   │   ├── utility/
│   ├── data/                # Data assets
│   ├── hooks/               # React hooks
│   ├── images/              # Static images
│   ├── styles/              # SCSS styles
│   └── styles/              # SCSS styles
├── .eslintrc.json           # ESLint configuration
├── jest.config.js           # Jest configuration
├── cypress.json             # Cypress configuration
├── tsconfig.json            # TypeScript configuration
└── .prettierrc              # Prettier configuration

```

## License
Feel free to customize this README according to your specific project needs.
