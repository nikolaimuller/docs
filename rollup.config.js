import pkg from "./package.json";

import typescript from "rollup-plugin-typescript2";
// import postcss from "rollup-plugin-postcss";
import styles from "rollup-plugin-styles";

const banner = `/* ${pkg.name} version: ${pkg.version} */`;

const standardOpts = {
	name: pkg.name,
	banner,
	exports: "named",
	minifyInternalExports: true,
	preserveModules: true,
};

const config = [
	{
		input: "./src/index.ts",
		strictDeprecations: true,
		output: [
			{
				...standardOpts,
				dir: "dist",
				format: "cjs",
				assetFileNames: "[name][extname]",
			},
			{
				...standardOpts,
				dir: "dist/esm",
				format: "esm",
				assetFileNames: "[name][extname]",
			},
		],
		external: [
			...Object.keys(pkg.dependencies),
			"react/jsx-runtime",
			"prettier/standalone",
			"prettier/parser-babel",
		],
		plugins: [
			typescript({
				tsconfig: "tsconfig.json",
				tsconfigOverride: {
					rootDir: "src",
					include: ["src/**/*.ts", "src/**/*.tsx"],
					exclude: ["**/example*"],
				},
			}),
			styles({
				mode: ["extract", "styles.css"],
			}),
		],
	},
];

export default config;
