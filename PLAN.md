# Kirk's Dog Care Website - Implementation Plan

## Overview
Create a single-page responsive website for Kirk the English Bulldog that serves as a reference guide for dog sitters. The site will include an introduction, daily schedule table, important notes, and embedded YouTube videos with care instructions.

## Project Requirements
- **Framework**: Astro 5.16.6 (already installed)
- **Styling**: Tailwind CSS (needs installation)
- **Design**: Mobile-first responsive design
- **Structure**: Single-page with scrollable sections
- **Videos**: YouTube embeds
- **Deployment**: GitHub Pages at `https://[username].github.io/kirk-dog/`

## Implementation Steps

### Phase 1: Setup & Configuration

#### 1.1 Install Tailwind CSS Integration
- Run: `pnpm astro add tailwind`
- **Important**: Astro 5.2+ uses the official Tailwind v4 Vite plugin (`@tailwindcss/vite`)
- This will:
  - Install `@tailwindcss/vite` plugin
  - Create `src/styles/global.css` with `@import "tailwindcss"`
  - Update `astro.config.mjs` to include Tailwind Vite plugin
- Import global CSS in BaseLayout: `import '../styles/global.css'`

#### 1.2 Configure GitHub Pages Deployment
**Critical files to modify:**
- `astro.config.mjs` - Add site and base URL configuration:
  ```javascript
  export default defineConfig({
    site: 'https://[username].github.io',
    base: '/kirk-dog',
    integrations: [tailwind()]
  });
  ```
- `package.json` - Add project name: `"name": "kirk-dog"`

#### 1.3 GitHub Actions Workflow
- Create `.github/workflows/deploy.yml` for automatic deployment
- **Use official `withastro/action@v5`** - automatically detects pnpm
- Configure workflow to:
  - Build Astro site on push to main branch
  - Deploy to GitHub Pages using official Astro action
  - Set proper permissions (contents: read, pages: write, id-token: write)
- **User action required**: Enable GitHub Pages in repo settings (Source: "GitHub Actions")

### Phase 2: Create Base Layout & Components

#### 2.1 Create Shared Layout
**File**: `src/layouts/BaseLayout.astro`
- **Import global CSS**: `import '../styles/global.css'` (Tailwind imports)
- HTML structure with proper meta tags
- Mobile-friendly viewport configuration
- SEO-optimized title and description
- Props for dynamic page title and description
- Include `<slot />` for page content

#### 2.2 Navigation Approach
**Single-page site**: No separate Navigation component needed
- Use anchor links within the page for smooth scrolling
- Optional: Sticky navigation bar with section links
- Keep navigation simple since it's one page

#### 2.3 Create Footer Component
**File**: `src/components/Footer.astro`
- Simple footer with contact info or emergency numbers
- Optional: Last updated date
- Responsive Tailwind styling

### Phase 3: Build Main Page Content Sections

**File**: `src/pages/index.astro`

#### 3.1 Hero/Introduction Section
- Kirk's name and photo (placeholder for user to add image)
- Breed: English Bulldog
- Brief welcoming description
- Tailwind: Hero layout with responsive image sizing
- Image should be placed in `public/kirk.jpg` (or similar)

#### 3.2 Daily Schedule Section
- HTML table with Tailwind styling for schedule
- Responsive table design (mobile-friendly)
- Columns: Time | Activity | Notes
- Sample data structure for user to fill in:
  - Morning feeding time
  - Walk times
  - Medication schedules
  - Evening feeding
  - Bedtime routine
- Tailwind: Striped rows, responsive overflow handling

#### 3.3 Important Notes Section
- List or card-based layout for critical information:
  - Dietary restrictions
  - Allergies
  - Behavioral notes
  - Emergency vet contact
  - Medication details
- Tailwind: Cards or alert-style boxes with icons
- Mobile-responsive grid layout

#### 3.4 Care Instructions Video Section
- Grid layout for video embeds
- Each video card includes:
  - Title (e.g., "Cleaning Skin Folds", "Cherry Eye Care")
  - YouTube embed (responsive iframe)
  - Optional: Short text description
- **Use native Tailwind `aspect-video` utility** (16:9 ratio):
  ```html
  <div class="w-full aspect-video">
    <iframe src="..." class="w-full h-full" allowfullscreen></iframe>
  </div>
  ```
- Placeholder YouTube IDs for user to replace
- Tailwind: Responsive grid (1 col mobile, 2 col tablet/desktop: `grid grid-cols-1 md:grid-cols-2`)

### Phase 4: Responsive Design & Styling

#### 4.1 Mobile-First Approach
- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`
- Ensure touch-friendly tap targets (min 44x44px)
- Readable font sizes on mobile (min 16px for body)
- Adequate spacing and padding for touch interaction

#### 4.2 Color Scheme & Branding
- Choose dog-friendly color palette (can use Tailwind's default colors)
- Consistent spacing using Tailwind spacing scale
- Accessible color contrast ratios
- Consider warm, friendly colors suitable for a pet website

#### 4.3 Typography
- Clear heading hierarchy (h1, h2, h3)
- Readable body text size and line height
- Use Tailwind typography utilities
- Web-safe fonts or import Google Fonts

### Phase 5: Assets & Content Placeholders

#### 5.1 Image Preparation
- Add placeholder image reference for Kirk's photo
- Recommend placing in `public/` directory as `public/kirk.jpg`
- User will need to replace with actual photo
- Include alt text for accessibility

#### 5.2 Content Placeholders
- Add realistic placeholder content throughout
- Clear comments indicating where user needs to add:
  - Kirk's photo
  - Actual schedule times
  - Real important notes
  - YouTube video IDs

### Phase 6: Testing & Deployment Setup

#### 6.1 Local Testing
- Ensure `pnpm dev` works correctly
- Test responsive design at different breakpoints
- **Important**: Use `pnpm build && pnpm preview` to test with base path `/kirk-dog/`
- Base path won't be applied in dev mode - always test preview before deploying
- Verify all sections scroll smoothly
- Check navigation/anchor links work

#### 6.2 GitHub Pages Configuration
- Document steps for user:
  1. Push code to GitHub repository
  2. Enable GitHub Pages in repository settings
  3. Set source to "GitHub Actions"
  4. Workflow will auto-deploy on push to main

#### 6.3 Build Verification
- Run `pnpm build` to ensure no errors
- Verify output in `dist/` folder
- Check that base path is correctly applied to all assets

## Critical Files to Create/Modify

### New Files to Create:
1. `src/layouts/BaseLayout.astro` - Main layout template (imports global CSS)
2. `src/components/Footer.astro` - Footer component (optional)
3. `.github/workflows/deploy.yml` - GitHub Actions deployment (using `withastro/action@v5`)
4. `src/styles/global.css` - Tailwind imports (auto-created by `astro add tailwind`)

### Existing Files to Modify:
1. `src/pages/index.astro` - Complete rebuild with all sections
2. `astro.config.mjs` - Add Tailwind integration + GitHub Pages config
3. `package.json` - Add project name

### Files to Create (by user):
1. `public/kirk.jpg` - Kirk's photo (user provides)

## Implementation Phases for Multi-Step Approach

### Step 1: Foundation (Recommend doing first)
- Install Tailwind CSS
- Configure GitHub Pages deployment settings
- Create base layout and footer component
- Set up project structure

### Step 2: Content & Styling (Second step)
- Build all page sections with placeholder content
- Implement responsive design
- Add color scheme and typography
- Create schedule table and notes sections

### Step 3: Videos & Polish (Final step)
- Add video embed section with placeholders
- Test responsive design thoroughly
- Add any final styling touches
- Prepare deployment documentation

## Notes for User
- **GitHub Username Needed**: You'll need to provide your GitHub username for the Pages URL
- **Git Remote Setup**: You'll need to configure: `git remote add origin https://github.com/[username]/kirk-dog.git`
- **GitHub Pages Settings**: After pushing, enable GitHub Pages in repo settings (Source: "GitHub Actions")
- **Content to Prepare**: Kirk's photo, actual schedule, important notes, YouTube videos
- **Video Instructions**: Upload care videos to YouTube (can set as unlisted), then we'll embed them
- **Mobile Testing**: Test on actual mobile device once deployed
- **Image Optimization**: Optimize Kirk's photo before adding (consider WebP format)
- **Testing with Base Path**: Always test with `pnpm build && pnpm preview` before deploying

## Technology Stack Summary
- **Astro 5.16.6**: Static site generation
- **Tailwind CSS 3.x**: Utility-first styling
- **GitHub Actions**: Automated deployment
- **GitHub Pages**: Free hosting
- **YouTube**: Video hosting (embeds)
