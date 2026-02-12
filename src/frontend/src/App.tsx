import { SiteHeader } from './components/SiteHeader';
import { FeaturedGrid } from './components/FeaturedGrid';
import { TopShortsGrid } from './components/TopShortsGrid';
import { SocialLinks } from './components/SocialLinks';
import { ExternalLink } from './components/ExternalLink';
import { Button } from './components/ui/button';
import { SiYoutube } from 'react-icons/si';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/assets/generated/hero-banner.dim_1920x800.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative">
              <img
                src="/assets/generated/channel-avatar.dim_512x512.png"
                alt="Rashmi Joshi Channel Avatar"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-2xl"
                width={160}
                height={160}
              />
            </div>
            
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Welcome to Rashmi Joshi
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Join me on an inspiring journey of creativity, learning, and growth. Subscribe to stay connected!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <ExternalLink href="https://www.youtube.com/@rashmijoshi6703">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                  <SiYoutube className="mr-2 h-6 w-6" />
                  Subscribe on YouTube
                </Button>
              </ExternalLink>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Content
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              About the Channel
            </h2>
            <div className="prose prose-lg dark:prose-invert mx-auto text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Welcome to my YouTube channel! I'm passionate about sharing knowledge, 
                experiences, and creative content that inspires and empowers. Whether you're 
                here to learn something new, find inspiration, or simply enjoy quality content, 
                you're in the right place. Join our growing community and let's embark on this 
                journey together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section id="featured" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Content
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out some of my popular videos and playlists
            </p>
          </div>
          <FeaturedGrid />
        </div>
      </section>

      {/* Top 5 Most-Viewed Shorts Section */}
      <section id="shorts" className="py-20 md:py-28 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top 5 Most-Viewed Shorts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick, engaging content that our community loves the most
            </p>
          </div>
          <TopShortsGrid />
        </div>
      </section>

      {/* Links Section */}
      <section id="links" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect With Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow me on social media and stay updated with the latest content
            </p>
          </div>
          <SocialLinks />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Rashmi Joshi. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <span className="text-destructive">♥</span>
              <span>using</span>
              <ExternalLink 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'rashmijoshi6703')}`}
                className="font-medium hover:text-foreground transition-colors"
              >
                caffeine.ai
              </ExternalLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
