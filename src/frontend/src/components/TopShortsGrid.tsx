import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from './ExternalLink';
import { topShorts } from '../content/channelContent';
import { ExternalLink as ExternalLinkIcon, Eye } from 'lucide-react';

export function TopShortsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
      {topShorts.map((short, index) => (
        <ExternalLink 
          key={short.id} 
          href={short.url}
          className="group block hover:scale-[1.02] transition-transform"
        >
          <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <ExternalLinkIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                {short.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="h-4 w-4" />
                <span className="font-medium">{short.views}</span>
              </div>
            </CardContent>
          </Card>
        </ExternalLink>
      ))}
    </div>
  );
}
