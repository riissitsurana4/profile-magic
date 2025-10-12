import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || (globalForPrisma.prisma = new PrismaClient());

const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
    try {
        const body = await request.json();
        const user_name = (body.name || "").trim();
        const user_email = (body.email || "").trim().toLowerCase();
        const user_message = (body.message || "").trim();

        if (!user_name || !user_email || !user_message) {
            console.warn("Missing required fields:", { user_name, user_email });
            return NextResponse.json({ error: "All fields are required." }, { status: 400 })
        }
        if (!emailCheck.test(user_email)) {
            console.warn("Invalid email format:", user_email);
            return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
        }

        if (user_name.length > 100 || user_message.length > 5000) {
            return NextResponse.json({ error: "Name or message is too long." }, { status: 400 });
        }

        const savedContact = await prisma.contact.create({
            data: {
                name: user_name,
                email: user_email,
                message: user_message,
            },
        });

        return NextResponse.json(
            { message: "Thanks for reaching out! We'll get back to you soon.", id: savedContact.id },
            { status: 201 }
        );
    } catch (err) {
        console.error("Failed to handle contact form submission:", err);
        return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
    }
}




