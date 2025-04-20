"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import NextLink from "next/link"
import { forwardRef } from "react"

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  forceReload?: boolean
  children: React.ReactNode
}

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ href, forceReload = false, children, ...props }, ref) => {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (forceReload) {
        // Força o recarregamento completo da página
        window.location.href = href
        e.preventDefault()
      }
    }

    return (
      <NextLink href={href} ref={ref} onClick={handleClick} {...props}>
        {children}
      </NextLink>
    )
  },
)

CustomLink.displayName = "CustomLink"

export default CustomLink
