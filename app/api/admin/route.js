import { requireAdmin } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// made with help of ai, as i did not know how to make admin access pages
export async function GET(request) {
  const unauthorized = requireAdmin(request);
  if (unauthorized) return unauthorized;

  const contact = await prisma.contact.findMany({
    orderBy: { submittedAt: "desc" },
    select: { id: true, name: true, email: true, message: true, createdAt: true },
  });

  return new Response(JSON.stringify(contact), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}