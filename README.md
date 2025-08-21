# Cinemate 🎬

A modern movie discovery and playlist management application built with Next.js, featuring seamless integration with The Movie Database (TMDb) API and Supabase authentication.

## 🚀 Features

### Core Functionality
- **Movie Discovery**: Browse movies by categories (Now Playing, Popular, Top Rated)
- **Movie Details**: View comprehensive movie information including cast, director, and ratings
- **Search**: Find movies using the integrated search functionality
- **Authentication**: Secure user authentication with Supabase
- **Playlists**: Create and manage movie playlists (in development)
- **Responsive Design**: Optimized for desktop and mobile devices

### User Experience
- **Dark/Light Theme**: Toggle between themes with next-themes
- **Movie Carousel**: Featured movies carousel on homepage
- **Movie Grid**: Grid layout for browsing movies by category
- **Movie Cards**: Interactive cards with ratings, favorites, and quick actions
- **Navigation**: Clean navigation with authentication status

## 🛠 Tech Stack

### Frontend
- **Next.js 15.2.3** - React framework with App Router
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### Backend & Services
- **Supabase** - Authentication and database
- **TMDb API** - Movie data and images
- **Next.js API Routes** - Server-side functionality

### Development Tools
- **ESLint** - Code linting
- **Turbopack** - Fast bundler for development
- **React Hook Form** - Form state management
- **Zod** - Schema validation

## 📁 Project Structure

```
cinemate/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── auth/           # Authentication pages
│   │   ├── movie/          # Movie detail pages
│   │   ├── movies/         # Movie category pages
│   │   ├── playlists/      # Playlist pages
│   │   └── profile/        # User profile
│   ├── components/         # Reusable UI components
│   │   ├── auth/          # Authentication components
│   │   ├── ui/            # Base UI components
│   │   └── movie-*.tsx    # Movie-related components
│   ├── lib/               # Utilities and services
│   │   ├── movie-service.tsx  # TMDb API integration
│   │   ├── auth-service.tsx   # Authentication logic
│   │   ├── types.ts          # TypeScript definitions
│   │   └── utils.ts          # Utility functions
│   └── utils/supabase/    # Supabase configuration
└── public/               # Static assets
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ 
- Yarn package manager
- TMDb API key
- Supabase project

### Environment Variables
Create a `.env.local` file:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd cinemate

# Install dependencies
yarn install

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎯 Current Status

### ✅ Completed Features
- Movie browsing by categories
- Movie detail pages with cast/crew
- Search functionality
- Authentication system setup
- Responsive UI components
- Basic playlist structure

### 🚧 In Development
- User playlist management
- Favorites functionality
- Movie recommendations
- User profile customization

### 📋 Planned Features
- Advanced search filters
- Movie reviews and ratings
- Social features and sharing
- Watchlist functionality
- Mobile app

## 🚀 Scripts

```bash
yarn dev          # Start development server with Turbopack
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
```

## 🔑 API Integration

### TMDb API
- **Base URL**: `https://api.themoviedb.org/3`
- **Categories**: now_playing, popular, top_rated, upcoming, trending
- **Features**: Movie details, search, credits, images

### Supabase
- **Authentication**: Email/password signup and login
- **Database**: User profiles and playlist data
- **Real-time**: Future real-time features

## 📱 Pages & Routes

- `/` - Homepage with movie categories
- `/auth` - Authentication pages
- `/movie/[id]` - Movie detail page
- `/movies/[category]` - Movies by category
- `/playlists` - User playlists
- `/playlists/[id]` - Individual playlist
- `/profile` - User profile

## 🎨 Design System

### Components
- **Movie Card**: Interactive movie display with ratings and actions
- **Movie Grid**: Responsive grid layout for movie collections
- **Movie Carousel**: Featured movies slider
- **Navigation**: Main navigation with auth status
- **UI Components**: Built on Radix UI primitives

### Styling
- **Tailwind CSS**: Utility-first styling
- **CSS Variables**: Theme-aware color system
- **Responsive**: Mobile-first approach
- **Animations**: Smooth transitions and hover effects

## 🔒 Authentication Flow

1. **Public Pages**: Homepage, movie browsing (unauthenticated)
2. **Protected Pages**: Profile, playlists (requires authentication)
3. **Redirect Logic**: Automatic redirection based on auth status
4. **Session Management**: Supabase handles session persistence

## 📊 Data Models

### Movie
```typescript
interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  runtime: number;
}
```

### Playlist
```typescript
interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  movieCount: number;
  lastUpdated: string;
  movies?: Movie[];
}
```

<!-- ## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request -->