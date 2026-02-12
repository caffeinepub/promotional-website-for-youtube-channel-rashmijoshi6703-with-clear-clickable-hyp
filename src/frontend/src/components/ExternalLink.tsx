import { type AnchorHTMLAttributes, type ReactNode } from 'react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  showIcon?: boolean;
}

export function ExternalLink({ 
  href, 
  children, 
  showIcon = false,
  className = '',
  ...props 
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md transition-colors ${className}`}
      {...props}
    >
      {children}
      {showIcon && <ExternalLinkIcon className="h-4 w-4" />}
    </a>
  );
}
