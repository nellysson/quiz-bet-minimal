"use client"

import type React from "react"

interface TraditionalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  className?: string
}

export default function TraditionalLink({ href, children, className, ...props }: TraditionalLinkProps) {
  // Usa uma tag <a> tradicional em vez do componente Link do Next.js
  // Isso força um recarregamento completo da página
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  )
}
