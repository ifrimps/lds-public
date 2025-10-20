The Diriyah LDS XT Library is a component library designed to simplify the process of developing user interfaces. It includes a collection of reusable components developed with React and TypeScript.

## Getting Started

### System Requirements
- Node.js (version 14.x or higher)
- npm (version 6.x or higher)

### Initial Setup
1. Clone the repository:
   ```bash
   git clone git@github.com:psdg001/diriyah-lds-xt-library.git
   ```

2. Navigate to the project directory:
   ```bash
   cd diriyah-lds-xt-library
   ```

3. Install the dependencies:
   ```bash
   npm i
   ```

4. Start the development server:
   ```bash
   npm start
   ```

### Other scripts

**Build for production**
```bash
npm run build
```

**Run tests**
```bash
npm test
```

**Open tests for development and debugging**
```bash
npm run test:open
```

**Open storybook in development mode**
```bash
npm run storybook
```

**Build storybook for production**
```bash
npm run build-storybook
```

**Run chromatic**
You will need to have a .env file containing the CHROMATIC_PROJECT_TOKEN environment variable.
```bash
npm run chromatic
```
