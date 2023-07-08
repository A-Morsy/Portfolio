export default {
    // Other Rollup configuration options
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Specify the manual chunks here
            // Example: 'vendor' chunk for third-party dependencies
            vendor: ['module1', 'module2'],
          },
        },
      },
    },
  };