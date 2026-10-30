# Build from the repository root: docker build -f services/indexer/Dockerfile .
FROM node:24-slim AS install
RUN npm install --global pnpm@12.15.0
WORKDIR /repo
COPY . .
# The indexer and the workspace packages it uses, with production dependencies only.
RUN pnpm install --frozen-lockfile --prod --filter @freemadeira/indexer...

# The workspace's layout, kept: Node strips TypeScript's types only outside
# node_modules, so the packages stay where the indexer's links point.
FROM node:24-slim
ENV NODE_ENV=production
WORKDIR /repo
COPY --from=install --chown=node:node /repo/package.json /repo/pnpm-workspace.yaml ./
COPY --from=install --chown=node:node /repo/node_modules ./node_modules
COPY --from=install --chown=node:node /repo/packages/blog ./packages/blog
COPY --from=install --chown=node:node /repo/packages/db ./packages/db
COPY --from=install --chown=node:node /repo/packages/i18n ./packages/i18n
COPY --from=install --chown=node:node /repo/services/indexer ./services/indexer
WORKDIR /repo/services/indexer
USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s CMD node -e "fetch('http://127.0.0.1:' + (process.env.PORT ?? 3000)).then((r) => process.exit(r.ok ? 0 : 1), () => process.exit(1))"
CMD ["node", "src/index.ts"]
