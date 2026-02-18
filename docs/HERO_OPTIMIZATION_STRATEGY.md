# Hero Section A+ Optimization Strategy
**Target:** Lighthouse Score 95+ | Core Web Vitals: Green | SEO Score: 100

---

## Current Setup Analysis

✅ **Already Optimized:**
- Lazy-loaded Spline component (~500KB)
- Mobile video fallback (reduces 3D overhead on mobile)
- Local `.splinecode` hosting (no external network dependency)
- Coordinated animations (synchronized reveal)

⚠️ **Needs Optimization:**
- SEO metadata and structured data
- Resource hints and preloading
- Critical rendering path optimization
- Accessibility improvements
- Core Web Vitals tuning

---

## Performance Optimization (Speed)

### 1. Resource Hints & Preloading

Add to `app/layout.tsx` or page `<head>`:

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/container_logistics.splinecode"
          as="fetch"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/hero-animation.webm"
          as="video"
          type="video/webm"
        />

        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 2. Optimize Spline Scene File

**Before exporting from Spline editor:**

| Setting | Recommendation | Impact |
|---------|---------------|--------|
| **Polygon Count** | < 100k (desktop), < 50k (mobile) | -40% GPU load |
| **Lights** | ≤ 2 lights total | -30% render time |
| **Textures** | < 1024x1024px, compressed | -60% file size |
| **Geometry Quality** | "Performance" mode | -50% file size |
| **Geometry Compression** | Enable (70-80%) | -50-80% file size |
| **Hidden Objects** | Delete all unused | -20% load time |

**Export checklist:**
```
□ Open Performance panel in Spline
□ Polygon count < 100k
□ Only 1-2 lights used
□ All textures compressed
□ No hidden/unused objects
□ Export with "Performance" quality
□ Enable geometry compression
```

### 3. Video Optimization (Mobile Fallback)

**Current:** You need to create `hero-animation.webm` and `.mp4`

**Optimization commands:**

```bash
# Create WebM (VP9 codec, optimized for web)
ffmpeg -i source.mov \
  -c:v libvpx-vp9 \
  -b:v 400k \
  -vf "scale=1280:-1" \
  -an \
  -auto-alt-ref 0 \
  hero-animation.webm

# Create MP4 fallback (H.264, universal support)
ffmpeg -i source.mov \
  -c:v libx264 \
  -b:v 400k \
  -vf "scale=1280:-1" \
  -an \
  -movflags +faststart \
  hero-animation.mp4
```

**Target sizes:**
- WebM: 300-800KB (5-10 seconds)
- MP4: 400-1MB (5-10 seconds)

### 4. Critical CSS Inline

Inline critical hero section styles in `<head>` to avoid render-blocking:

```tsx
// app/layout.tsx or page component
<head>
  <style dangerouslySetInnerHTML={{
    __html: `
      .hero-section {
        min-height: 80vh;
        background: var(--background);
        position: relative;
        overflow: hidden;
      }
      .hero-content {
        opacity: 0;
        transform: translateY(20px);
      }
      .hero-content.loaded {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
    `
  }} />
</head>
```

### 5. Lazy Load Below-the-Fold Content

Ensure Spline only loads when visible (Intersection Observer):

```tsx
// SplineHero.tsx enhancement
const [shouldLoad, setShouldLoad] = useState(false);
const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  if (containerRef.current) {
    observer.observe(containerRef.current);
  }

  return () => observer.disconnect();
}, []);

// Only render Spline when in viewport
{shouldLoad && <Spline scene={scene} onLoad={handleLoad} />}
```

---

## SEO Optimization

### 1. Semantic HTML Structure

Update `HeroSection.tsx` with proper semantic markup:

```tsx
<section
  id="hero"
  aria-label="Welcome to our platform"
  className="relative bg-background dark:bg-background-dark min-h-[80vh] flex flex-col justify-start overflow-hidden"
>
  <header className="relative pt-32 pb-20 md:pt-24 lg:pt-32 lg:pb-40 z-20">
    <div className="max-w-7xl mx-auto px-mobile relative">
      <h1 className="...">
        A single source of truth for the decoration industry.
      </h1>
      <p className="..." role="doc-subtitle">
        Our system allows you to focus on what you do best.
      </p>

      <nav aria-label="Primary call-to-action">
        <a href="/contact" className="...">Let's Talk</a>
        <button onClick={...} className="...">See How It Works</button>
      </nav>
    </div>
  </header>
</section>
```

### 2. Metadata & Open Graph

Add to page metadata (Next.js App Router):

```tsx
// app/page.tsx or app/layout.tsx
export const metadata = {
  title: 'Decoration Industry Platform | Your Company Name',
  description: 'A single source of truth for the decoration industry. Our system allows you to focus on what you do best.',
  keywords: 'decoration, industry platform, logistics, container management',

  openGraph: {
    title: 'Decoration Industry Platform | Your Company Name',
    description: 'A single source of truth for the decoration industry.',
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Your Company Name',
    images: [
      {
        url: '/og-image.jpg', // Screenshot of hero section
        width: 1200,
        height: 630,
        alt: 'Decoration industry platform hero',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Decoration Industry Platform',
    description: 'A single source of truth for the decoration industry.',
    images: ['/twitter-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### 3. Structured Data (JSON-LD)

Add organization schema to `app/layout.tsx`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Your Company Name",
      "description": "A single source of truth for the decoration industry",
      "url": "https://yourdomain.com",
      "logo": "https://yourdomain.com/logo.png",
      "sameAs": [
        "https://twitter.com/yourcompany",
        "https://linkedin.com/company/yourcompany"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "contact@yourdomain.com"
      }
    })
  }}
/>
```

### 4. Accessibility (ARIA) Enhancements

```tsx
// SplineHero.tsx
<div
  className="absolute inset-0 z-0"
  role="img"
  aria-label="3D visualization of logistics containers and machinery"
>
  {isMobile && mobileVideoFallback ? (
    <video
      aria-hidden="true" // Decorative, not content
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src={mobileVideoFallback} type="video/webm" />
    </video>
  ) : (
    <Spline scene={scene} />
  )}
</div>

// Buttons with proper ARIA
<a
  href="/contact"
  className="..."
  aria-label="Contact us to get started"
>
  Let's Talk
</a>
```

---

## Core Web Vitals Targets

### LCP (Largest Contentful Paint)
**Target:** < 2.5s

**Optimizations:**
- ✅ Preload hero fonts and critical assets
- ✅ Inline critical CSS
- ✅ Use video on mobile (faster than 3D)
- ✅ Lazy load Spline component
- ✅ Serve local assets from CDN

### FID (First Input Delay)
**Target:** < 100ms

**Optimizations:**
- ✅ Defer non-critical JavaScript
- ✅ Lazy load Spline runtime
- ✅ Use requestIdleCallback for non-urgent tasks
- ✅ Minimize main thread work

### CLS (Cumulative Layout Shift)
**Target:** < 0.1

**Optimizations:**
- ✅ Set explicit dimensions on all containers
- ✅ Use aspect-ratio for responsive elements
- ✅ Reserve space for Spline canvas
- ✅ Avoid layout shifts during animation reveal

```tsx
// Reserve space for 3D canvas (prevents CLS)
<div
  className="absolute inset-0"
  style={{
    aspectRatio: '16/9', // Or your canvas ratio
    minHeight: '400px'
  }}
>
  <SplineHero />
</div>
```

---

## Image Optimization (For Social/SEO)

Create optimized hero screenshot for Open Graph:

```bash
# Create OG image (1200x630px)
ffmpeg -i hero-screenshot.png \
  -vf "scale=1200:630:force_original_aspect_ratio=decrease,pad=1200:630:(ow-iw)/2:(oh-ih)/2" \
  -q:v 85 \
  og-image.jpg

# Create Twitter card (1200x600px)
ffmpeg -i hero-screenshot.png \
  -vf "scale=1200:600:force_original_aspect_ratio=decrease,pad=1200:600:(ow-iw)/2:(oh-ih)/2" \
  -q:v 85 \
  twitter-image.jpg
```

---

## Lighthouse Optimization Checklist

### Performance (Target: 95+)
```
✅ Lazy load Spline component
✅ Preload critical assets
✅ Optimize images and videos
✅ Minimize main thread work
✅ Serve static assets with efficient caching
✅ Use compression (Brotli/Gzip)
✅ Eliminate render-blocking resources
✅ Properly size images
```

### SEO (Target: 100)
```
✅ Semantic HTML5 structure
✅ Meta description (50-160 chars)
✅ Heading hierarchy (H1 → H2 → H3)
✅ Alt text for images
✅ Structured data (JSON-LD)
✅ Crawlable links
✅ Mobile-friendly
✅ HTTPS
```

### Accessibility (Target: 95+)
```
✅ ARIA labels on interactive elements
✅ Keyboard navigation support
✅ Color contrast (WCAG AA: 4.5:1)
✅ Skip to content link
✅ Focus indicators
✅ Screen reader compatibility
```

### Best Practices (Target: 100)
```
✅ HTTPS
✅ No console errors
✅ Proper DOCTYPE
✅ Valid HTML
✅ No deprecated APIs
✅ Secure dependencies
```

---

## Next.js App Router Configuration

```tsx
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  // Compression
  compress: true,

  // Headers for caching
  async headers() {
    return [
      {
        source: '/container_logistics.splinecode',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.webm',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

---

## Testing & Validation

### Tools to Use

1. **Lighthouse** (Chrome DevTools)
   ```bash
   npm install -g lighthouse
   lighthouse https://yourdomain.com --view
   ```

2. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Test both mobile and desktop

3. **WebPageTest**
   - https://www.webpagetest.org/
   - Test from multiple locations

4. **Core Web Vitals**
   - https://search.google.com/search-console
   - Monitor real user data

### Performance Budget

| Metric | Target | Critical |
|--------|--------|----------|
| **LCP** | < 2.5s | < 4.0s |
| **FID** | < 100ms | < 300ms |
| **CLS** | < 0.1 | < 0.25 |
| **Total Page Size** | < 3MB | < 5MB |
| **Time to Interactive** | < 3.5s | < 7.3s |
| **First Contentful Paint** | < 1.8s | < 3.0s |

---

## Implementation Priority

### Phase 1: Critical (Do Now)
1. ✅ Export optimized `.splinecode` from Spline (< 100k polygons)
2. ✅ Create optimized mobile videos (WebM + MP4)
3. ✅ Add resource hints (preload, dns-prefetch)
4. ✅ Implement Intersection Observer for lazy loading
5. ✅ Add proper metadata and Open Graph tags

### Phase 2: Important (This Week)
1. ⚠️ Inline critical CSS
2. ⚠️ Add structured data (JSON-LD)
3. ⚠️ Improve semantic HTML and ARIA labels
4. ⚠️ Configure Next.js caching headers
5. ⚠️ Create OG images for social sharing

### Phase 3: Enhancement (This Month)
1. 📊 Set up Core Web Vitals monitoring
2. 📊 A/B test video vs 3D on tablet devices
3. 📊 Implement service worker for offline support
4. 📊 Add analytics tracking for 3D interactions
5. 📊 Monitor and optimize based on real user data

---

## Expected Results

### Before Optimization
- Lighthouse Performance: ~60-70
- LCP: 4-6s
- FID: 200-400ms
- Page Size: 5-10MB

### After Optimization
- Lighthouse Performance: **95+** ⭐
- LCP: **< 2.5s** ⭐
- FID: **< 100ms** ⭐
- Page Size: **< 3MB** ⭐
- SEO Score: **100** ⭐
- Accessibility: **95+** ⭐

---

## Monitoring & Maintenance

### Weekly
- Check PageSpeed Insights scores
- Monitor Core Web Vitals in Search Console
- Review error logs for 3D loading failures

### Monthly
- Audit Spline scene size and complexity
- Review video compression ratios
- Test on real devices (iOS, Android, low-end)
- Update dependencies for security patches

### Quarterly
- Full Lighthouse audit
- Competitor performance analysis
- User feedback review
- A/B testing new optimizations

---

## Resources

- [Spline Performance Guide](../.agent/skills/spline-3d-integration/guides/PERFORMANCE.md)
- [Web.dev Core Web Vitals](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Lighthouse Docs](https://developer.chrome.com/docs/lighthouse/)
