import type { Metadata } from 'next'
import { CookiesProvider } from 'next-client-cookies/server';

export const metadata: Metadata = {
    title: 'Official Website Kosyuk',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <CookiesProvider>
                {children}
            </CookiesProvider>
        </>
    )
}