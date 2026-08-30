# Quick Start: Publishing Polity to Vercel

## 🚀 5-Minute Quick Start

### 1. Install Dependencies
```bash
npm install
npm install mongodb  # For MongoDB support
```

### 2. Setup MongoDB Atlas (Free)
- Go to https://www.mongodb.com/cloud/atlas
- Create account → Create cluster (M0 free)
- Create database user
- Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/polity?retryWrites=true&w=majority`

### 3. Create `.env` file
```bash
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/polity
JWT_SECRET=your_super_secret_key_at_least_32_characters
NODE_ENV=production
PORT=5000
```

### 4. Test Locally
```bash
npm run build
npm run dev:full
```
Visit http://localhost:5173 and test the app

### 5. Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 6. Deploy on Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Add same environment variables from `.env`
5. Click Deploy ✅

**Your app will be live in 2-5 minutes!**

---

## 📋 Deployment Checklist

- [ ] MongoDB Atlas database created
- [ ] Connection string obtained
- [ ] `.env` file created locally
- [ ] `npm run build` succeeds
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] Deployment successful
- [ ] App tested at deployed URL
- [ ] Authentication (register/login) works

---

## 🔗 Important Links

- **Deployment Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Project Status**: Check Vercel deployments tab

---

## ⚠️ Troubleshooting

**Q: Build fails with "module not found"**
```bash
rm -rf node_modules && npm install
```

**Q: API calls fail in production**
- Check MongoDB URI in Vercel env vars
- Ensure MongoDB IP access is enabled (0.0.0.0/0)

**Q: Where to find deployment logs?**
- Vercel Dashboard → Your Project → Deployments → Select deployment → Logs

---

For detailed deployment guide, see [DEPLOYMENT.md](./DEPLOYMENT.md)
