# Deployment Guide for Polity

## Prerequisites
- [ ] GitHub account
- [ ] Vercel account (free tier available at vercel.com)
- [ ] MongoDB Atlas account (free tier available at mongodb.com/cloud/atlas)

---

## Step 1: Prepare MongoDB Database

### Create MongoDB Atlas Database
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new project called "polity"
4. Create a new cluster (M0 free tier is sufficient)
5. Set up Database Access:
   - Click "Database Access" → "Add New Database User"
   - Create a username and strong password
   - Set permissions to "Read and write to any database"
6. Set up Network Access:
   - Click "Network Access" → "Add IP Address"
   - Add `0.0.0.0/0` (allows all IPs - for development only)
   - For production, use specific IP addresses
7. Get Connection String:
   - Click "Database" → "Connect"
   - Choose "Drivers"
   - Copy the MongoDB URI: `mongodb+srv://username:password@cluster.mongodb.net/polity?retryWrites=true&w=majority`

---

## Step 2: Update Database Connection

The project currently uses JSON file storage. Here's how to migrate to MongoDB:

### A. Install MongoDB Driver
```bash
npm install mongodb
npm install --save-dev @types/mongodb
```

### B. Update `server/db.cjs` to use MongoDB
(See example below in the code section)

---

## Step 3: Prepare for Vercel Deployment

### A. Create `.env` file locally (for testing)
```bash
cp .env.example .env
# Edit .env and add your MongoDB URI and JWT_SECRET
```

### B. Build the project
```bash
npm install
npm run build
```

Verify build succeeds without errors. You should see a `dist/` folder.

---

## Step 4: Deploy to Vercel

### A. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Polity educational platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/polity.git
git push -u origin main
```

### B. Connect to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Select your GitHub repository (polity)
4. Framework: Auto-detected as "Other" (that's fine)
5. Root Directory: `.`
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Environment Variables:
   - Add `MONGODB_URI` = your MongoDB connection string
   - Add `JWT_SECRET` = a strong random secret
   - Add `PORT` = 5000
   - Add `NODE_ENV` = production

### C. Deploy
- Click "Deploy"
- Wait for build to complete (2-5 minutes)
- Your app will be live at: `https://polity.vercel.app` (or your custom domain)

---

## Step 5: Configure Custom Domain (Optional)

1. In Vercel Project Settings → "Domains"
2. Add your custom domain
3. Follow DNS configuration steps provided

---

## Step 6: Monitor & Maintain

### View Logs
```bash
# In Vercel Dashboard: Deployments → Select deployment → Logs
```

### Local Testing Before Deployment
```bash
# Test locally with full stack
npm run dev:full

# Build production version
npm run build
npm run preview
```

---

## Troubleshooting

### Build fails with "module not found"
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### API calls fail in production
- Verify MongoDB URI is correct in Vercel env vars
- Check that MongoDB Network Access includes Vercel IPs (0.0.0.0/0 for now)
- Check Vercel logs for errors

### Static files not loading
- Ensure `dist/` folder is built correctly
- Verify Vite build in `package.json`

---

## Environment Variables Checklist

| Variable | Value | Required |
|----------|-------|----------|
| `MONGODB_URI` | MongoDB connection string | ✅ Yes |
| `JWT_SECRET` | Strong random string (min 32 chars) | ✅ Yes |
| `NODE_ENV` | `production` | ✅ Yes |
| `PORT` | `5000` | ✅ Yes |

---

## Post-Deployment

1. **Test your app** at the deployed URL
2. **Monitor logs** in Vercel dashboard
3. **Set up monitoring** - Enable Vercel Analytics (free)
4. **Backup data** - Configure MongoDB backups

---

## Next Steps

After deployment:
- [ ] Test authentication (register & login)
- [ ] Test all learning components
- [ ] Check network requests in browser dev tools
- [ ] Monitor MongoDB usage (free tier has limits)
- [ ] Set up automated backups
- [ ] Consider upgrading MongoDB if usage exceeds free tier

