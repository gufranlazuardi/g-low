/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        // Find the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.(".svg")
        );

        if (fileLoaderRule) {
            // Add new rules for SVG handling
            config.module.rules.push(
                // Reapply the existing rule, but only for SVG imports ending in ?url
                {
                    ...fileLoaderRule,
                    test: /\.svg$/i,
                    resourceQuery: /url/, // *.svg?url
                },
                // Convert all other *.svg imports to React components
                {
                    test: /\.svg$/i,
                    issuer: fileLoaderRule.issuer,
                    resourceQuery: {
                        not: [
                            ...(fileLoaderRule.resourceQuery.not || []),
                            /url/,
                        ],
                    }, // exclude if *.svg?url
                    use: ["@svgr/webpack"],
                }
            );

            // Modify the file loader rule to ignore *.svg, since we have it handled now
            fileLoaderRule.exclude = /\.svg$/i;
        }

        return config;
    },
};

export default nextConfig;
