import { requireAdmin } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// made with help of ai, as i did not know how to make admin access pages
export async function GET(request) {
  const unauthorized = requireAdmin(request);
  if (unauthorized) return unauthorized;

  const contact = await prisma.contact.findMany({
    orderBy: { submittedAt: "desc" },
    select: { id: true, name: true, email: true, message: true, createdAt: true, status: true, submittedAt: true },
  });

  return new Response(JSON.stringify(contact), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PATCH(request, { params }) {
  const unauthorized = requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = params;
  const { status } = await request.json();

  if (!["UNREAD", "READ", "REPLIED"].includes(status)) {
    return new Response(JSON.stringify({ error: "Invalid status" }), { status: 400 });
  }

  const updated = await prisma.contact.update({
    where: { id },
    data: { status }
  });

  return new Response(JSON.stringify(updated), { status: 200 });
}

export async function DELETE(request, { params }) {
  const unauthorized = requireAdmin(request);
  if (unauthorized) return unauthorized;
  const { id } = params;

  await prisma.contact.delete({ where: { id } });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}