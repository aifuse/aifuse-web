import { defineConfig } from 'astro/config';
import Atomico from '@atomico/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://aifuse.github.io',
    base: '/aifuse-web',
    vite: {
        optimizeDeps: {},
        ssr: {
            external: ['atomico/html'],
        },
    },
    integrations: [Atomico({ cssLiterals: { minify: true } })],
});
