// astro.config.mjs
import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';

export default defineConfig({
    integrations: [
        mermaid({
            // Default theme: 'default', 'dark', 'forest', 'neutral', 'base'
            theme: 'neutral',

            // Enable automatic theme switching based on data-theme attribute
            autoTheme: true,

            // Additional mermaid configuration
            mermaidConfig: {
                flowchart: {
                    curve: 'basis'
                }
            },

            // Register icon packs for use in diagrams
            iconPacks: [
                {
                    name: 'logos',
                    loader: () => fetch('https://unpkg.com/@iconify-json/logos@1/icons.json').then(res => res.json())
                },
                {
                    name: 'iconoir',
                    loader: () => fetch('https://unpkg.com/@iconify-json/iconoir@1/icons.json').then(res => res.json())
                }
            ]
        })
    ]
});