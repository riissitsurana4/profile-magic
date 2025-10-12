'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
export default function AdminPage() {
    const [adminKey, setAdminKey] = useState("");
    const [input, setInput] = useState("");
    const [submissions, setSubmissions] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const key = localStorage.getItem("adminKey") || "";
            setAdminKey(key);
        }
    }, []);

    useEffect(() => {
        if (!adminKey) return;
        async function fetchContacts() {
            try {
                const res = await fetch("/api/admin/[id]", {
                    headers: {
                        Authorization: "Bearer " + adminKey
                    }
                });
                if (!res.ok) throw new Error("Unauthorized or error fetching contacts");
                const data = await res.json();
                setSubmissions(data);
                setError("");
            } catch (err) {
                setError(err.message);
                setSubmissions([]);
            }
        }
        fetchContacts();
    }, [adminKey]);

    function handleKeySubmit(e) {
        e.preventDefault();
        if (!input.trim()) return;
        setAdminKey(input.trim());
        if (typeof window !== "undefined") {
            localStorage.setItem("adminKey", input.trim());
        }
    }

    function handleLogout() {
        setAdminKey("");
        setInput("");
        if (typeof window !== "undefined") {
            localStorage.removeItem("adminKey");
        }
        setSubmissions([]);
    }
    if (!adminKey) {
        return (
            <main className="min-h-screen flex flex-col bg-gray-900 text-white items-center justify-center p-4">
                <div className="absolute top-8 left-8 z-20">
                    <Link href="/" className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                        <span className="mr-2 text-2xl">←</span>
                        <span>Back to Magic Realm</span>
                    </Link>
                </div>
                <h1 className="text-4xl mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Admin Login</h1>
                <p className="mb-6 text-gray-400">AdminKey: 1234567890abcdef </p>
                <form onSubmit={handleKeySubmit} className="flex flex-col items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter admin key"
                        className="mb-4 p-2 rounded border border-white text-white"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Login
                    </button>
                </form>
            </main>
        );
    }
    return (
        <main className="min-h-screen bg-gray-900 text-white p-4">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Submissions
                </h1>
                <button
                    onClick={handleLogout}
                    className="bg-gray-700 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors"
                >
                    Logout
                </button>
            </div>
            {error && <div className="text-red-400 mb-4">{error}</div>}
            <section className="space-y-6">
                {submissions.length === 0 && <div className="text-gray-400">No submissions found.</div>}
                {submissions.map(contact => (
                    <div key={contact.id} className="bg-gray-800 p-6 rounded-xl shadow border border-gray-700">
                        <div className="mb-2"><span className="font-semibold text-purple-300">Name:</span> {contact.name}</div>
                        <div className="mb-2"><span className="font-semibold text-purple-300">Email:</span> {contact.email}</div>
                        {contact.subject && (
                            <div className="mb-2"><span className="font-semibold text-purple-300">Subject:</span> {contact.subject}</div>
                        )}
                        <div className="mb-2"><span className="font-semibold text-purple-300">Message:</span> {contact.message}</div>
                        {contact.status && (
                            <div className="mb-2"><span className="font-semibold text-purple-300">Status:</span> {contact.status}</div>
                        )}
                        {contact.submittedAt && (
                            <div className="mb-2"><span className="font-semibold text-purple-300">Submitted At:</span> {new Date(contact.submittedAt).toLocaleString()}</div>
                        )}
                        <div className="flex gap-2 mt-2">
                            {contact.status !== "READ" && (
                                <button onClick={async () => {
                                    await fetch(`/api/admin/${contact.id}`, {
                                        method: "PATCH",
                                        headers: { "Content-Type": "application/json", Authorization: "Bearer " + adminKey },
                                        body: JSON.stringify({ status: "READ" })
                                    });
                                    window.location.reload();
                                }}
                                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition-colors"
                                >
                                    Mark as Read
                                </button>
                            )}
                            {contact.status !== "REPLIED" && (
                                <button
                                    onClick={async () => {
                                        await fetch(`/api/admin/${contact.id}`, {
                                            method: "PATCH",
                                            headers: { "Content-Type": "application/json", Authorization: "Bearer " + adminKey },
                                            body: JSON.stringify({ status: "REPLIED" })
                                        });
                                        window.location.reload();
                                    }}
                                    className="bg-green-600 text-white px-2 py-1 rounded"
                                >
                                    Mark as Replied
                                </button>
                            )}
                            <button
                                onClick={async () => {
                                    await fetch(`/api/admin/${contact.id}`, {
                                        method: "DELETE",
                                        headers: { Authorization: "Bearer " + adminKey }
                                    });
                                    window.location.reload();
                                }}
                                className="bg-red-600 text-white px-2 py-1 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
        </section>
        </main >

    );
}