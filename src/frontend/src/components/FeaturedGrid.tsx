import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from './ExternalLink';
import { featuredContent } from '../content/channelContent';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

export function FeaturedGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {featuredContent.map((item) => (
        <ExternalLink 
          key={item.id} 
          href={item.url}
          className="group block hover:scale-[1.02] transition-transform"
        >
          <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <ExternalLinkIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
              <CardDescription className="text-base">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="px-3 py-1 bg-accent rounded-full font-medium">
                  {item.type}
                </span>
              </div>
            </CardContent>
          </Card>
        </ExternalLink>
      ))}
    </div>
  );
}
