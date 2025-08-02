pipeline {
  agent any

  tools {
    nodejs 'Node 22'  // Match your Jenkins NodeJS version name
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/Ishwar608/nextjs-crud-app.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint & Test') {
      steps {
        sh 'npm run lint'
        // Add test command if you have tests
        // sh 'npm run test'  
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy to Vercel') {
      environment {
        VERCEL_TOKEN = credentials('vercel-token')  // Jenkins secret
      }
      steps {
        sh 'npx vercel --prod --token=$VERCEL_TOKEN'
      }
    }
  }
}
