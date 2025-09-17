# Cinemate 🎬

A modern movie discovery and favorites tracking application built with Next.js 15 and React 18.

## Features

- **Movie Discovery**: Browse movies by categories (Now Playing, Popular, Top Rated)
- **Movie Carousel**: Featured movies showcase on the homepage
- **Favorites System**: Save and manage your favorite movies
- **Search Functionality**: Find movies quickly with the search feature
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive Design**: Optimized for desktop and mobile devices
- **Authentication**: User authentication system with Supabase
- **Modern UI**: Built with Radix UI components and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Authentication**: Supabase
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Theming**: next-themes
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cinemate
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── favorites/         # Favorites page
│   ├── home/              # Home page components
│   ├── movie/             # Individual movie pages
│   ├── movies/            # Movies listing pages
│   └── pages/             # Additional pages
├── components/            # Reusable UI components
│   ├── auth/              # Authentication components
│   ├── ui/                # Base UI components (Radix UI)
│   ├── movie-card.tsx     # Movie card component
│   ├── movie-carousel.tsx # Featured movies carousel
│   ├── movie-grid.tsx     # Movies grid layout
│   ├── search-box.tsx     # Search functionality
│   └── ...
├── contexts/              # React contexts
├── lib/                   # Utility libraries and configurations
├── utils/                 # Helper functions
└── middleware.ts          # Next.js middleware
```

## Key Components

- **MovieCarousel**: Displays featured movies in a carousel format
- **MovieGrid**: Shows movies in a grid layout with pagination
- **MovieCard**: Individual movie display component with favorite functionality
- **SearchBox**: Movie search functionality
- **FavoriteButton**: Add/remove movies from favorites
- **MainNav**: Navigation bar with theme toggle and user menu

<!-- ## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and not licensed for public use.

## Support

For support, please contact the development team or create an issue in the repository. -->
