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
- **GSAP (Phase 7)**: Scroll-based animations

### Phase 7: Interactive Passport Page

Create an interactive passport page showcasing Kirk's travels to 9 cities with scroll-based horizontal page flip animations.

#### 7.1 Dependencies & Setup

**Install GSAP:**
```bash
pnpm add gsap
```

**Cities to Feature:** LA, San Diego, Portland, Forks, Vancouver, Seattle, Bay Area, Lake Tahoe, Salt Lake City

**Page Organization:** 5 passport spreads (two-page layouts)
- Spread 1: LA + San Diego
- Spread 2: Portland + Forks
- Spread 3: Vancouver + Seattle
- Spread 4: Bay Area + Lake Tahoe
- Spread 5: Salt Lake City + Back page

#### 7.2 File Structure

**New Files to Create:**
1. `/src/pages/passport.astro` - Main passport page route
2. `/src/components/PassportStamp.astro` - Reusable CSS-based stamp component
3. `/src/scripts/passport-animations.ts` - GSAP ScrollTrigger animation logic

**Files to Modify:**
1. `/src/pages/index.astro` - Add "Kirk's Travel Passport" button in About section (around line 40-50, next to Instagram button)
2. `/package.json` - Add GSAP dependency (via pnpm add command)

#### 7.3 Component Design

**PassportStamp.astro:**
- Props: `city`, `date`, `type` ('entry'|'departure'|'special'), `color`, `rotation`
- CSS-based circular stamp with dashed border
- Tailwind styling: `w-32 h-32 rounded-full border-4 border-dashed`
- Random rotation (-15° to 15°) for authentic look
- Color variations: red (entry), blue (departure), purple (special)

**Passport Page Layout:**
- Cover page with "Kirk's Passport" title and paw print
- Each spread: left page + right page side-by-side on desktop
- Stack vertically on mobile (< 768px)
- 2-3 stamps per city in grid layout
- Aged paper aesthetic (beige/cream background: `bg-[#f5f1e8]`)
- Border styling with drop shadows

#### 7.4 GSAP Animation Implementation

**ScrollTrigger Configuration:**
```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

spreads.forEach((spread) => {
  gsap.from(spread, {
    scrollTrigger: {
      trigger: spread,
      start: 'top center',
      end: 'center center',
      scrub: 1,
      snap: 1
    },
    rotationY: -180,
    transformOrigin: 'left center',
    opacity: 0,
    duration: 1.5,
    ease: 'power2.inOut'
  });
});
```

**Animation Sequence:**
1. Cover page fade-in
2. Each spread flips horizontally on scroll (3D rotation)
3. Stamps pop in with stagger effect after page settles
4. Responsive: Simple fade on mobile, full 3D on desktop

**Performance Optimizations:**
- Use `will-change: transform` CSS property
- GPU acceleration with `transform3d`
- Support `prefers-reduced-motion` media query

#### 7.5 Responsive Design

**Breakpoints:**
- **Mobile (< 768px):** Stack pages vertically, simple fade transitions
- **Tablet (768px - 1023px):** Two-column layout, moderate 3D effects
- **Desktop (> 1024px):** Full horizontal page flip with 3D transforms

**Tailwind Classes:**
- Container: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8`
- Spreads: `grid grid-cols-1 md:grid-cols-2 gap-8`
- Pages: `bg-[#f5f1e8] border-2 border-gray-300 p-6 md:p-8 rounded-lg shadow-xl`

#### 7.6 Navigation Button

Add to `/src/pages/index.astro` after the Instagram button (in About section):

```html
<a
  href="/kirk-dog/passport"
  class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 w-full md:w-auto"
>
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
  Kirk's Travel Passport
</a>
```

**Design Notes:**
- Blue/cyan gradient (distinct from Instagram's purple/pink)
- Book/document icon from Heroicons
- Full width on mobile, auto width on desktop
- Proper base path handling (`/kirk-dog/`)

#### 7.7 Stamp Content Structure

**Example Data for Los Angeles:**
```typescript
{
  city: 'Los Angeles',
  stamps: [
    { date: '2024-07-15', location: 'LAX', type: 'entry', color: 'red', rotation: 12 },
    { date: '2024-07-17', location: 'Santa Monica', type: 'special', color: 'blue', rotation: -8 },
    { date: '2024-07-18', location: 'Hollywood', type: 'departure', color: 'red', rotation: 5 }
  ]
}
```

**Content Pattern:**
- Mix of entry/departure/special stamps per city
- Realistic dates throughout 2024
- Small descriptive notes (e.g., "Beach day", "Visited pier")
- 21-27 total stamps across all cities

#### 7.8 Implementation Steps

**Step 1: Setup (30 min)**
- Install GSAP: `pnpm add gsap`
- Create component files structure

**Step 2: Build Components (1.5 hours)**
- Create PassportStamp.astro with CSS-based design
- Build reusable stamp with Tailwind styling
- Test stamp variations (colors, rotations, sizes)

**Step 3: Create Main Page (1.5 hours)**
- Build `/src/pages/passport.astro` using BaseLayout
- Structure 5 spreads with city content
- Add cover and back pages
- Import Footer component

**Step 4: Implement Animations (2 hours)**
- Create `/src/scripts/passport-animations.ts`
- Register GSAP ScrollTrigger plugin
- Implement horizontal flip animation
- Add stamp pop-in effects with stagger
- Handle responsive breakpoints
- Test scroll behavior

**Step 5: Add Navigation (30 min)**
- Modify `/src/pages/index.astro` About section
- Add passport button with blue/cyan gradient
- Test navigation flow between pages

**Step 6: Content & Polish (1 hour)**
- Add stamp content for all 9 cities
- Design passport cover with paw print emblem
- Apply aged paper textures and effects
- Add drop shadows and page curl effects

**Step 7: Test & Deploy (1 hour)**
- Test animations on desktop browsers
- Test responsive behavior (mobile, tablet)
- Run `pnpm build && pnpm preview` with base path
- Verify performance (Lighthouse score > 90)
- Push to GitHub and verify deployment

**Total Estimated Time:** ~7.5 hours

#### 7.9 Technical Considerations

**Astro SSG + GSAP:**
- Initialize GSAP client-side only: `if (typeof window !== 'undefined')`
- Use `<script>` tag in passport.astro for GSAP initialization
- Ensure DOM is ready before ScrollTrigger runs

**GitHub Pages Base Path:**
- All passport links use `/kirk-dog/` prefix
- Test with preview before deploying
- Verify asset paths are correct

**Accessibility:**
- Add `aria-label` to passport sections
- Ensure keyboard navigation works
- Include alt text for stamps
- Support `prefers-reduced-motion`

**Performance Targets:**
- Lighthouse Score: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Use GPU acceleration for smooth animations

#### 7.10 Critical Files Summary

1. `/src/pages/passport.astro` - Main passport page route
2. `/src/components/PassportStamp.astro` - Reusable stamp component
3. `/src/scripts/passport-animations.ts` - GSAP animation logic
4. `/src/pages/index.astro` - Add navigation button (line ~40-50)
5. `/package.json` - Add GSAP dependency
