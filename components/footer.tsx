"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted/50 to-primary/10 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/images/logo.png"
                  alt="Roxana Aromaterapia Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:text-foreground">
                  Roxana Aromaterapia
                </span>
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Descubre nuestra hermosa tienda, estamos orgullosos de decir que somos la regaleria de confianza del
              barrio San Carlos, los invitamos a que pasen a conocernos.
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <div>
                  <p className="text-sm font-medium">Teléfono</p>
                  <a
                    href="tel:+5491123456789"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +54 9 221 436 3284
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:info@roxanaaromaterapia.com "
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@roxanaaromaterapia.com(pedir real)
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <div>
                  <p className="text-sm font-medium">Dirección</p>
                  <address className="text-sm text-muted-foreground not-italic">
                    Calle 136, entre 530 y 531. Numero 124
                    <br />
                    📍La Plata, San Carlos
                    <br />
                    Argentina
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Información */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Información</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre Nosotros
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Envíos y Devoluciones
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Preguntas Frecuentes
              </a>
            </nav>
          </div>
        </div>

        <Separator className="my-8 bg-primary/20" />

        {/* Copyright */}
        <div className="flex justify-center items-center">
          <div className="text-sm text-muted-foreground">
            <span>© 2025 Roxana Aromaterapia. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
