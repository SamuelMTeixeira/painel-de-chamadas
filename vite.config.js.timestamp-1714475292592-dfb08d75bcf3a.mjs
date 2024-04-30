// vite.config.js
import { defineConfig } from "file:///C:/Users/samuel.teixeira/Documents/projects/painel-de-chamadas/node_modules/.pnpm/vite@5.0.11/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/samuel.teixeira/Documents/projects/painel-de-chamadas/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.0.11/node_modules/@vitejs/plugin-react/dist/index.mjs";
import jsconfigPaths from "file:///C:/Users/samuel.teixeira/Documents/projects/painel-de-chamadas/node_modules/.pnpm/vite-jsconfig-paths@2.0.1_vite@5.0.11/node_modules/vite-jsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), jsconfigPaths()],
  test: {
    globals: true,
    setupFiles: ["./test/setup.js"],
    environment: "jsdom"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzYW11ZWwudGVpeGVpcmFcXFxcRG9jdW1lbnRzXFxcXHByb2plY3RzXFxcXHBhaW5lbC1kZS1jaGFtYWRhc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcc2FtdWVsLnRlaXhlaXJhXFxcXERvY3VtZW50c1xcXFxwcm9qZWN0c1xcXFxwYWluZWwtZGUtY2hhbWFkYXNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3NhbXVlbC50ZWl4ZWlyYS9Eb2N1bWVudHMvcHJvamVjdHMvcGFpbmVsLWRlLWNoYW1hZGFzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQganNjb25maWdQYXRocyBmcm9tICd2aXRlLWpzY29uZmlnLXBhdGhzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKSwganNjb25maWdQYXRocygpXSxcclxuICB0ZXN0OiB7XHJcbiAgICBnbG9iYWxzOiB0cnVlLFxyXG4gICAgc2V0dXBGaWxlczogWycuL3Rlc3Qvc2V0dXAuanMnXSxcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1gsU0FBUyxvQkFBb0I7QUFDclosT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBRTFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO0FBQUEsRUFDbEMsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsWUFBWSxDQUFDLGlCQUFpQjtBQUFBLElBQzlCLGFBQWE7QUFBQSxFQUNmO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
