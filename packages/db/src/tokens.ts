/**
 * Keys and tokens for sqld's JWT authentication (Ed25519):
 *
 *   pnpm --filter @freemadeira/db tokens keys   a key pair: the public key goes in sqld's SQLD_AUTH_JWT_KEY
 *   pnpm --filter @freemadeira/db tokens ro     a read-only token, for the sites (needs SQLD_PRIVATE_KEY)
 *   pnpm --filter @freemadeira/db tokens rw     a read-write token, for the indexer (needs SQLD_PRIVATE_KEY)
 *
 * Tokens don't expire: to revoke them, give sqld a new key pair.
 */
import { createPrivateKey, generateKeyPairSync, sign } from "node:crypto";

function base64url(data: Buffer | string): string {
  return Buffer.from(data).toString("base64url");
}

function keys(): void {
  const { privateKey, publicKey } = generateKeyPairSync("ed25519");
  // The raw 32 bytes of the public key are the last 32 of its DER encoding.
  const raw = publicKey.export({ format: "der", type: "spki" }).subarray(-32);
  const pem = privateKey.export({ format: "pem", type: "pkcs8" }).toString();
  console.log(`SQLD_AUTH_JWT_KEY=${base64url(raw)}`);
  console.log(
    "\nSQLD_PRIVATE_KEY, for minting tokens; keep it out of every server:"
  );
  console.log(base64url(pem));
}

function token(access: "ro" | "rw"): void {
  const encoded = process.env.SQLD_PRIVATE_KEY?.trim();
  if (!encoded) {
    throw new Error("Set SQLD_PRIVATE_KEY to the key `tokens keys` printed.");
  }
  const key = createPrivateKey(Buffer.from(encoded, "base64url").toString());
  const header = base64url(JSON.stringify({ alg: "EdDSA", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({ a: access, iat: Math.floor(Date.now() / 1000) })
  );
  const signature = sign(null, Buffer.from(`${header}.${claims}`), key);
  console.log(`${header}.${claims}.${base64url(signature)}`);
}

const [command] = process.argv.slice(2);
if (command === "keys") {
  keys();
} else if (command === "ro" || command === "rw") {
  token(command);
} else {
  console.error("Usage: tokens keys | ro | rw");
  process.exitCode = 1;
}
