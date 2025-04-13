module.exports = {
    content: ['./dist/*.html'],
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
    corePlugins: {
      // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
      preflight: false,
    }
  }