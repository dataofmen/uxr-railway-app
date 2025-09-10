#!/bin/bash

echo "🚀 Starting Railway deployment process..."

# Railway 배포를 위한 특별한 커밋 생성
echo "📝 Creating deployment commit..."

# Deploy 커밋 생성 (Railway가 감지하는 특별한 형식)
git add .
git commit -m "🚀 DEPLOY: UX Research Designer to Railway

Auto-deploy trigger for Railway platform
- Next.js 14 production ready
- All configurations optimized
- Health checks enabled

[railway-deploy]" || echo "No changes to commit"

# GitHub에 푸시하여 배포 트리거
echo "⬆️ Pushing to GitHub to trigger Railway deployment..."
git push origin main

echo ""
echo "✅ Deployment triggered!"
echo ""
echo "🌐 To complete deployment:"
echo "1. Visit: https://railway.app"
echo "2. Sign in with GitHub"
echo "3. Connect to repository: dataofmen/uxr-railway-app"
echo "4. Railway will auto-deploy from the latest commit"
echo ""
echo "📋 Repository: https://github.com/dataofmen/uxr-railway-app"
echo "🔧 Build will start automatically once connected"
echo ""