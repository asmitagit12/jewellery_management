import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function ProductCard({ product }: any) {
    return (
        <Card>
            <img src={product.image} className="h-60 w-full object-cover" />
            <CardContent className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-muted-foreground">₹{product.price}</p>
                <Link href={`/products/${product.id}`}>
                    <Button className="mt-3 w-full">View</Button>
                </Link>
            </CardContent>
        </Card>
    )
}