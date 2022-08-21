import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		host: true,
		port: 8080,
		fs: {
			strict: false,
		},
		hmr: {
			port: 8081,
		},
	},
	build: {
		rollupOptions: {
			output: {
				format: "es",
			},
		},
	},
})