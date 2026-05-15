if (window.mermaid) {
  var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  window.mermaid.initialize({
    startOnLoad: true,
    theme: isDark ? 'dark' : 'default',
    themeVariables: {
      fontFamily: 'Inter, sans-serif',
      primaryColor: isDark ? '#1a1410' : '#f5efe3',
      primaryTextColor: isDark ? '#f0e6d2' : '#1a1612',
      primaryBorderColor: isDark ? '#3a2f23' : '#c9bea7',
      lineColor: isDark ? '#95876e' : '#6b5d4d',
      mainBkg: isDark ? '#1a1410' : '#f5efe3'
    }
  });
}
