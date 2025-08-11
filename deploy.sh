#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Starting portfolio deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌍 Your portfolio should be available at: https://hrick-08.github.io/portfolio"
echo "⏰ It may take a few minutes for changes to appear."
