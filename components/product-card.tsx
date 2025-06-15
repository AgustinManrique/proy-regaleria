"use client"

import type { Product } from "@/types/product"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const categoryNames: Record<string, string> = {
    "essential-oils": "Aceites Esenciales",
    diffusers: "Difusores",
    candles: "Velas Aromáticas",
    cosmetics: "Cosméticos Naturales",
    "bath-salts": "Sales de Baño",
    soaps: "Jabones Artesanales",
    kits: "Kits",
    sprays: "Sprays",
  }

  return (
    <Card className="h-full flex flex-col card-hover border-2 border-border/50 overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground font-medium">
            {categoryNames[product.category]}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-4 bg-gradient-to-br from-transparent to-muted/50">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          <span className="text-sm text-muted-foreground">Stock: {product.stock}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 bg-gradient-to-t from-transparent to-muted/50">
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          disabled={product.stock === 0}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.stock === 0 ? "Sin Stock" : "Agregar al Carrito"}
        </Button>
      </CardFooter>
    </Card>
  )
}
