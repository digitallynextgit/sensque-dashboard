import type { Metadata } from "next";
import * as React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "SensuQ Dashboard",
    description: "Modern SensuQ dashboard platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased`}>
                <AuthProvider>
                    <ThemeProvider defaultTheme="dark">
                        {children}
                    </ThemeProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
