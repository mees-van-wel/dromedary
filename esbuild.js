import * as esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

esbuild
  .build({
    entryPoints: ["./src/app.ts"],
    bundle: true,
    platform: "node",
    target: "es2022",
    outdir: "dist",
    format: "esm",
    minify: !process.argv.includes("--dev"),
    sourcemap: process.argv.includes("--dev"),
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1));
