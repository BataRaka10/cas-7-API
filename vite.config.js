import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	console.log("working directory: ", process.cwd());
	console.log("Mode: ", mode);

	return {
		plugins: [react()],
		define: {
			"process.env": env,
		},
	};
});
