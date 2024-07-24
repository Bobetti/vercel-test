import { Hono } from "hono";
import { handle } from "@hono/node-server/vercel";
import { myName } from "./test";

// export const config = {
//   runtime: 'edge'
// }

const app = new Hono().basePath("/api");

app.get("/", (c) => {
    return c.json({ message: `Hello ${myName}` });
});

export default handle(app);
