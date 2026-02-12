export interface FeaturedContent {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'Video' | 'Playlist' | 'Series';
}

export interface SocialLink {
  id: string;
  platform: string;
  label: string;
  url: string;
  description?: string;
}

export interface ShortsItem {
  id: string;
  title: string;
  url: string;
  views: string;
}

export const featuredContent: FeaturedContent[] = [
  {
    id: '1',
    title: 'Latest Upload',
    description: 'Check out my most recent video on the channel',
    url: 'https://www.youtube.com/@rashmijoshi6703/videos',
    type: 'Video',
  },
  {
    id: '2',
    title: 'Popular Videos',
    description: 'Most watched content from the channel',
    url: 'https://www.youtube.com/@rashmijoshi6703/videos?view=0&sort=p',
    type: 'Playlist',
  },
  {
    id: '3',
    title: 'Getting Started',
    description: 'Perfect for new subscribers to begin their journey',
    url: 'https://www.youtube.com/@rashmijoshi6703/playlists',
    type: 'Series',
  },
  {
    id: '4',
    title: 'Community Favorites',
    description: 'Videos loved by our amazing community',
    url: 'https://www.youtube.com/@rashmijoshi6703/community',
    type: 'Playlist',
  },
  {
    id: '5',
    title: 'Behind the Scenes',
    description: 'Exclusive content and channel updates',
    url: 'https://www.youtube.com/@rashmijoshi6703/about',
    type: 'Series',
  },
  {
    id: '6',
    title: 'All Playlists',
    description: 'Browse organized collections of videos',
    url: 'https://www.youtube.com/@rashmijoshi6703/playlists',
    type: 'Playlist',
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: '1',
    platform: 'youtube',
    label: 'YouTube Channel',
    url: 'https://www.youtube.com/@rashmijoshi6703',
    description: 'Subscribe for new content',
  },
  {
    id: '2',
    platform: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com',
    description: 'Follow for updates',
  },
  {
    id: '3',
    platform: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com',
    description: 'Behind the scenes',
  },
  {
    id: '4',
    platform: 'twitter',
    label: 'X (Twitter)',
    url: 'https://www.twitter.com',
    description: 'Latest thoughts',
  },
  {
    id: '5',
    platform: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com',
    description: 'Professional network',
  },
  {
    id: '6',
    platform: 'email',
    label: 'Email',
    url: 'mailto:contact@example.com',
    description: 'Get in touch',
  },
];

export const topShorts: ShortsItem[] = [
  {
    id: '1',
    title: 'Most Viewed Short #1',
    url: 'https://www.youtube.com/@rashmijoshi6703/shorts',
    views: '1.2M views',
  },
  {
    id: '2',
    title: 'Most Viewed Short #2',
    url: 'https://www.youtube.com/@rashmijoshi6703/shorts',
    views: '950K views',
  },
  {
    id: '3',
    title: 'Most Viewed Short #3',
    url: 'https://www.youtube.com/@rashmijoshi6703/shorts',
    views: '780K views',
  },
  {
    id: '4',
    title: 'Most Viewed Short #4',
    url: 'https://www.youtube.com/@rashmijoshi6703/shorts',
    views: '650K views',
  },
  {
    id: '5',
    title: 'Most Viewed Short #5',
    url: 'https://www.youtube.com/@rashmijoshi6703/shorts',
    views: '520K views',
  },
];
