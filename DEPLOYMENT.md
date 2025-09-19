# Custom Build and Deployment Options

## Entry Points

This project supports multiple entry points for different deployment scenarios:

1. **Default Next.js entry point** - Uses the standard Next.js routing
2. **Custom index.js entry point** - Custom server implementation for more control

## Build Scripts

We've added several new build scripts to package.json:

- `build` - Standard Next.js build
- `build:standalone` - Build with standalone server support
- `dev:custom` - Run development server with custom entry point
- `start:standalone` - Start the standalone server

## Usage

### Standard Development
```bash
npm run dev
```

### Custom Server Development
```bash
npm run dev:custom
```

### Production Build
```bash
npm run build
```

### Standalone Production Build
```bash
npm run build:standalone
```

### Start Production Server
```bash
npm start
```

### Start Standalone Production Server
```bash
npm run start:standalone
```

## Standalone Deployment

The `build:standalone` script creates a self-contained version of the application that can be deployed without the need for the full source code. This is useful for containerized deployments or when you want to minimize the deployment package size.