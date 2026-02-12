# Blog Automation Guide

This guide outlines how to automate the fetching and publishing of blog posts using Cron Jobs, moving away from hardcoded data to a dynamic, automated system.

## Overview

The goal is to automatically fetch blog content from an external source (CMS, RSS feed, AI generator, or database) on a schedule and update the website.

There are two main approaches depending on your hosting and architecture:

1.  **Dynamic / Database Approach (Recommended for Next.js)**: Store posts in a database. Use a Cron Job to fetch new posts and insert them into the database. The site reads from the database.
2.  **GitOps / Static Approach**: Use a Cron Job to generate a new static file (like `blog-data.ts` or markdown files), create a commit, and push it to GitHub to trigger a rebuild.

---

## Strategy 1: Vercel Cron + API Route (Dynamic)

If you are hosting on Vercel, this is the easiest integration.

### Architecture
1.  **External Source**: Where the content comes from (e.g., Contentful, WordPress, or an AI Agent).
2.  **Cron Job**: A Vercel Cron Job hits an API route (`/api/cron/fetch-blogs`) every day.
3.  **API Route**:
    *   Authenticates the request.
    *   Fetches new data from the External Source.
    *   Upserts (update or insert) the data into your Database (e.g., Supabase, Postgres).
4.  **Frontend**: The `/blog/[slug]` page fetches data from the Database (or cache).

### Implementation Steps

#### 1. Create the API Route
Create `apps/marketing/app/api/cron/update-blogs/route.ts`:

```typescript
import { NextResponse } from 'next/server';
// import { db } from '@/lib/db'; 

export async function GET(request: Request) {
  // 1. Verify Authentication (Critical so public can't trigger it)
  const authHeader = request.headers.get('authorization');
  if (authHeader !== \`Bearer \${process.env.CRON_SECRET}\`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // 2. Fetch new content
  const newPosts = await fetchExternalContent(); 

  // 3. Save to Database
  // await db.posts.createMany({ data: newPosts });

  return NextResponse.json({ success: true, count: newPosts.length });
}
```

#### 2. Configure Vercel Cron
Add `vercel.json` to your root:

```json
{
  "crons": [
    {
      "path": "/api/cron/update-blogs",
      "schedule": "0 10 * * *" 
    }
  ]
}
```
*`0 10 * * *` means "Every day at 10:00 AM".*

---

## Strategy 2: GitHub Actions (Static / GitOps)

If you want to keep the "static file" approach without a database, you can use GitHub Actions to commit new code.

### Architecture
1.  **GitHub Action**: Runs on a schedule (e.g., nightly).
2.  **Script**: A Node.js script fetches data and overwrites `lib/blog-data.ts`.
3.  **Commit**: The Action commits the change and pushes to `main`.
4.  **Deploy**: Vercel detects the push and redeploys the site.

### Implementation Steps

#### 1. Create the Update Script
Create `scripts/update-blog-data.ts`. This script should fetch data and write to the file system using `fs`.

#### 2. Create the Workflow
Create `.github/workflows/blog-automation.yml`:

```yaml
name: Update Blog Posts
on:
  schedule:
    - cron: '0 0 * * *' # Midnight daily
  workflow_dispatch: # Allow manual trigger

jobs:
  update-content:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm install ts-node
      - run: npx ts-node scripts/update-blog-data.ts
      
      - name: Commit and Push
        run: |
          git config --global user.name 'Blog Bot'
          git config --global user.email 'bot@noreply.github.com'
          git add apps/marketing/lib/blog-data.ts
          git commit -m "chore: automated blog update"
          git push
```

---

## Which one to choose?

| Feature | Strategy 1 (Database) | Strategy 2 (GitOps) |
| :--- | :--- | :--- |
| **Complexity** | Medium (Needs DB) | Low (Just script) |
| **Build Time** | Fast (Data fetch at runtime) | Slow (Rebuilds site) |
| **Freshness** | Instant | Delays until build finishes |
| **Cost** | DB Hosting costs | Free (GitHub Actions) |

**Recommendation**: Start with **Strategy 2 (GitHub Actions)** if you don't have a database set up yet. It keeps your current architecture but automates the manual work. Move to Strategy 1 when you have too many posts for a static file.
