import { ExternalLink } from './ExternalLink';
import { Button } from '@/components/ui/button';
import { socialLinks } from '../content/channelContent';
import { SiYoutube, SiFacebook, SiX, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Mail, Globe } from 'lucide-react';

const iconMap = {
  youtube: SiYoutube,
  facebook: SiFacebook,
  twitter: SiX,
  instagram: SiInstagram,
  linkedin: SiLinkedin,
  email: Mail,
  website: Globe,
};

export function SocialLinks() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.platform as keyof typeof iconMap] || Globe;
          
          return (
            <ExternalLink 
              key={link.id} 
              href={link.url}
              className="block"
            >
              <Button 
                variant="outline" 
                className="w-full h-auto py-4 px-6 justify-start hover:bg-accent hover:border-primary/50 transition-all group"
              >
                <Icon className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-semibold">{link.label}</div>
                  {link.description && (
                    <div className="text-xs text-muted-foreground">{link.description}</div>
                  )}
                </div>
              </Button>
            </ExternalLink>
          );
        })}
      </div>
    </div>
  );
}
