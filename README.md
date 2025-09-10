# UX Research Designer - Railway Deployment

AI-powered research design tool that ensures methodological rigor and helps create bulletproof research plans that withstand stakeholder scrutiny.

## 🚀 Quick Deploy to Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https://github.com/dataofmen/uxr-railway-app)

**One-click deployment ready!** 👆 Click the button above to deploy instantly.

### Manual Deployment Steps

If you prefer manual deployment:

1. **Visit [Railway.app](https://railway.app)** and sign in with GitHub
2. **Click "New Project"** → **"Deploy from GitHub repo"**
3. **Select** `dataofmen/uxr-railway-app` repository
4. **Railway automatically detects** Next.js configuration
5. **Deploy completes** in ~2-3 minutes
6. **Custom domain** auto-generated as `*.railway.app`

### Repository Information
- **GitHub**: https://github.com/dataofmen/uxr-railway-app
- **Built with**: Next.js 14, TypeScript, Tailwind CSS
- **Deployment**: Railway-optimized with `railway.toml`

## ✨ Features

- 🧠 **AI-Powered Methodology Recommendations**: Smart algorithm recommends optimal research methods based on your project constraints
- 📊 **Academic Rigor**: Built on analysis of 100+ research papers from CHI, ACM ToCHI, and Journal of Usability Studies  
- 🛡️ **Stakeholder Defense**: Prepare solid justifications for your methodology choices
- 📝 **Instant Document Generation**: Export professional research design documents in Markdown format
- 🎯 **Step-by-Step Wizard**: Guided 5-step process from project understanding to final documentation
- 💡 **Contextual Guidance**: Dynamic questions and tips based on your inputs
- 🔬 **Method Selection Matrix**: Choose from 7 research methods with detailed pros/cons analysis

## 🚀 Live Demo

Visit the live application: [Your Railway URL will be here after deployment]

## 💡 How It Works

1. **프로젝트 이해 (Project Understanding)**: Define your project context, stakeholders, and constraints
2. **문제 정의 (Problem Definition)**: Clearly articulate business and user problems with research questions
3. **리서치 설계 (Research Design)**: Get AI recommendations and select optimal research methods
4. **실행 계획 (Execution Plan)**: Plan detailed implementation including timeline, tools, and deliverables
5. **문서 완성 (Document Completion)**: Generate and export professional research design document

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS 
- **Icons**: Lucide React
- **Deployment**: Railway
- **Performance**: Optimized for fast loading and smooth interactions

## 🏗️ Local Development

### Prerequisites

- Node.js 18+ and npm
- Git

### Setup

```bash
# Clone the repository
git clone <your-repository-url>
cd uxr-railway-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Production
npm run build        # Build optimized production bundle
npm start           # Start production server
npm run lint        # Run ESLint for code quality
```

## 📚 Research Methods Included

### 1. 사용자 심층 인터뷰 (User Interview)
- **Best For**: User needs exploration, motivation understanding, unmet requirements discovery
- **Participants**: 5-12 people
- **Timeline**: 2-4 weeks

### 2. 정량적 설문조사 (Quantitative Survey)
- **Best For**: Hypothesis validation, preference measurement, market sizing
- **Participants**: 100+ people  
- **Timeline**: 1-3 weeks

### 3. 사용성 테스트 (Usability Testing)
- **Best For**: UI/UX issue discovery, task completion measurement, improvement identification
- **Participants**: 5-8 people
- **Timeline**: 1-2 weeks

### 4. 현장 관찰조사 (Field Study)
- **Best For**: Real usage context, unconscious behavior, environmental factors
- **Participants**: 8-15 people
- **Timeline**: 3-6 weeks

### 5. 카드 소팅 (Card Sorting)
- **Best For**: Information architecture, menu structure, classification logic
- **Participants**: 15-30 people
- **Timeline**: 1-2 weeks

### 6. A/B 테스트 (A/B Testing)
- **Best For**: Design validation, conversion optimization, quantitative comparison
- **Participants**: Hundreds to thousands
- **Timeline**: 2-8 weeks

### 7. 일기 연구 (Diary Study)
- **Best For**: Long-term behavior patterns, temporal changes, daily usage
- **Participants**: 10-20 people
- **Timeline**: 4-12 weeks

## 🎯 AI Recommendation Algorithm

The tool uses a sophisticated scoring algorithm that considers:

- **Research Purpose**: Matches methods to stated objectives (user needs, usability, validation)
- **Project Phase**: Recommends appropriate methods for concept, design, or validation stages  
- **Resource Constraints**: Adjusts recommendations based on timeline, budget, and team size
- **Academic Evidence**: Prioritizes methods with strong academic validation

## 📊 Academic Foundation

This tool is built on extensive research analysis:

- **85 different evaluation metrics** identified across UX research literature
- **70.59% of methodologies used only once** - highlighting standardization needs
- **66% of top-cited papers** use empirical research as core methodology
- **Mixed methodology research** shows 2x higher impact than single-method approaches

## 🚀 Railway Deployment

This application is optimized for Railway deployment with:

- **Automatic deployments** from Git repository
- **Environment variable** configuration support
- **Health check** endpoint for monitoring
- **Production optimization** with Next.js standalone output

### Deploy to Railway

1. Connect your GitHub repository to Railway
2. Railway will automatically detect the Next.js application
3. Set any required environment variables
4. Deploy with one click!

## 🤝 Contributing

Contributions are welcome! This tool is part of the larger UXR Research Workflow Tools Suite.

### Development Guidelines

1. Follow TypeScript best practices
2. Maintain accessibility compliance (WCAG 2.1 AA)
3. Test methodology recommendations against academic sources
4. Ensure mobile responsiveness
5. Follow existing UI/UX patterns

### Future Enhancements

- [ ] Integration with Question Crafter tool
- [ ] Integration with Data Analyzer tool
- [ ] Team collaboration features
- [ ] More research method options
- [ ] Export to PDF format
- [ ] Multi-language support

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section below
2. Open an issue on GitHub
3. Contact the development team

### Common Issues

**Application won't start locally**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Build fails on Railway**
```bash
# Check Railway build logs
# Ensure all dependencies are in package.json
# Verify Node.js version compatibility
```

## 🏆 Credits

Built with ❤️ for the UX research community. Special thanks to the academic researchers whose work forms the foundation of this tool's methodology recommendations.

---

**Part of the UXR Research Workflow Tools Suite** - Helping UX researchers create bulletproof research plans since 2024.