import type { CartItem } from "@/types/product"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
import Image from "next/image"

interface CartSidebarProps {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  onUpdateQuantity: (productId: number, quantity: number) => void
  onRemoveItem: (productId: number) => void
  onClearCart: () => void
}

export function CartSidebar({
  items,
  totalItems,
  totalPrice,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartSidebarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-left">
            Carrito de Compras 
            {totalItems > 0 && (
              <span className="text-primary ml-2">({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-lg font-medium text-muted-foreground mb-2">Tu carrito está vacío</p>
                <p className="text-sm text-muted-foreground">¡Agregá algunos productos para comenzar!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                      <p className="text-sm text-primary font-semibold">${item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7 hover:bg-primary hover:text-primary-foreground"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-semibold w-8 text-center bg-muted rounded px-2 py-1">
                          {item.quantity}
                        </span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7 hover:bg-primary hover:text-primary-foreground"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          size="icon"
                          variant="destructive"
                          className="h-7 w-7 ml-auto"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-primary">${totalPrice.toLocaleString()}</span>
              </div>
              <div className="space-y-2">
                <Button className="w-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300" size="lg">
                  Proceder al Pago
                </Button>
                <Button variant="outline" className="w-full hover:bg-destructive hover:text-destructive-foreground" onClick={onClearCart}>
                  Vaciar Carrito
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
