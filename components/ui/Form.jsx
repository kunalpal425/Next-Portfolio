"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "@emailjs/browser"


const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Enter valid email"),
    description: z.string().min(10, "Message too short"),
})

export default function ContactForm() {
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    })

    //  EMAILJS SEND
    const onSubmit = async (data) => {
        setLoading(true)

        try {
            await emailjs.send(
                "service_a47zpbo",
                "template_3kg4v6b",
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.description,
                },
                "eSDdCm18KgzwCisSw"
            )

            reset()
            alert("Message sent successfully ✅")
        } catch (error) {
            console.error(error)
            alert("Failed to send ❌")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Contact Us
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name */}
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            {...register("name")}
                            className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            {...register("email")}
                            className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <textarea
                            rows={4}
                            placeholder="Type Anything..."
                            {...register("description")}
                            className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                        {errors.description && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.description.message}
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3 font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                        {loading && (
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        )}
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    )
}
