import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
    try {
        await connectDB();

        const { name, email, description } = await req.json();

        if (!name || !email || !description) {
            return Response.json(
                { success: false, message: "All fields are required" },
                { status: 400 }
            );
        }

        const contact = await Contact.create({
            name,
            email,
            description,
        });

        return Response.json(
            { success: true, data: contact, message: "Message sent successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Contact error:", error);
        return Response.json(
            { success: false, message: error.message || "Server error" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectDB();

        const contacts = await Contact.find().sort({ createdAt: -1 });

        return Response.json(
            { success: true, data: contacts },
            { status: 200 }
        );
    } catch (error) {
        console.error("Fetch error:", error);
        return Response.json(
            { success: false, message: error.message || "Server error" },
            { status: 500 }
        );
    }
}
