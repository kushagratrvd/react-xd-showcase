
# PopX - React Fresher Interview Task

A pixel-perfect mobile app interface built with React, TypeScript, and Tailwind CSS based on the provided Adobe XD design.

## 🚀 Live Demo

- **Hosted Application**: [Your Netlify/Vercel URL here]
- **GitHub Repository**: [Your GitHub repo URL here]

## 📱 Features

- **Landing Page**: Welcome screen with navigation buttons
- **Authentication**: Login and signup forms with validation
- **Profile Page**: User account settings display
- **Responsive Design**: Mobile-first, pixel-perfect implementation
- **Smooth Navigation**: Seamless routing between pages
- **Modern UI**: Clean design using Tailwind CSS and shadcn/ui components

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Navigation
- **Vite** - Build tool

## 📋 Pages

1. **Landing Screen** (`/`) - Welcome to PopX with Create Account and Login buttons
2. **Login Screen** (`/login`) - Email and password authentication
3. **Signup Screen** (`/signup`) - User registration form with validation
4. **Profile Screen** (`/profile`) - User account settings and info

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone [your-repo-url]
cd popx-react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 🌐 Deployment

### Netlify Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect the Vite configuration
3. Deploy with default settings

## 🎨 Design Implementation

The application follows the Adobe XD design specifications:

- **Mobile Frame**: 375x812px viewport simulation
- **Typography**: Rubik font family for consistency
- **Colors**: Matching the design color palette
- **Spacing**: Pixel-perfect padding and margins
- **Components**: Form elements, buttons, and layouts match the design

## 📝 Code Quality

- Clean, well-formatted code structure
- TypeScript for type safety
- Responsive design principles
- Component-based architecture
- Proper error handling and validation

## 🔗 Navigation Flow

```
Landing (/) 
├── Create Account → Signup (/signup) → Profile (/profile)
└── Login → Login (/login) → Profile (/profile)
```

## 📸 Screenshots

The application includes:
- Landing screen with welcome message
- Login form with email/password fields
- Signup form with comprehensive user details
- Profile page with user information display

---

**Developed by**: [Your Name]  
**Date**: [Current Date]  
**Purpose**: React Fresher Interview Task
