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
    <Card className="h-full flex flex-col card-hover border border-border/50 overflow-hidden group">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground font-medium shadow-md">
            {categoryNames[product.category]}
          </Badge>
          {product.stock <= 5 && product.stock > 0 && (
            <Badge className="absolute top-3 right-3 bg-orange-500 text-white font-medium shadow-md">
              ¡Últimas {product.stock}!
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">${product.price.toLocaleString()}</span>
            <p className="text-xs text-muted-foreground">
              {product.stock > 10 ? "En stock" : `Solo ${product.stock} disponibles`}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
          disabled={product.stock === 0}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.stock === 0 ? "Sin Stock" : "Agregar al Carrito"}
        </Button>
      </CardFooter>
    </Card>
  )
}
