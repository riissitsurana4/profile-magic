import { NextResponse } from "next/server";

export function isValidAdminAuth(request) {
    const authHeader = request.headers.get("authorization") || "";
    if (!authHeader.startsWith("Bearer ")) return false;
    const tokenFromRequest = authHeader.slice(7);
    const expectedToken = process.env.ADMIN_KEY || "";
    return tokenFromRequest === expectedToken;
}


export function requireAdmin(request) {
    if (isValidAdminAuth(request)) return null;
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
