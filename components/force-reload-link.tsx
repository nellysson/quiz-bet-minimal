"use client"

import type React from "react"

interface ForceReloadLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  className?: string
}

/**
 * Componente que substitui o Link do Next.js por um link HTML tradicional
 * que força o recarregamento completo da página ao ser clicado
 */
export default function ForceReloadLink({ href, children, className, ...props }: ForceReloadLinkProps) {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  )
}
