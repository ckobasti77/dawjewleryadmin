import { Button } from "@/components/ui/button"

export default function AuthLayour({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex items-center justify-center h-full w-full">
            {children}
        </div>
    )
}