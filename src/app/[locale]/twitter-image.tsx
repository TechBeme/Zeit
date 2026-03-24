import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { NextResponse } from "next/server";

export const alt = "Zeit";
export const contentType = "image/png";

export default async function Image() {
    const buffer = await readFile(join(process.cwd(), "public", "logo.png"));
    return new NextResponse(buffer, {
        headers: { "Content-Type": "image/png" },
    });
}
