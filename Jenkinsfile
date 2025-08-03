pipeline {
    agent any

    environment {
        CI = 'false'
    }
    
    tools {
        nodejs 'Node 22'  // Updated to use Node.js 22
    }

    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/Ishwar608/nextjs-crud-app.git', branch: 'master'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                withCredentials([string(credentialsId: 'vercel-token', variable: 'VERCEL_TOKEN')]) {
                    bat '''
                        npm install -g vercel
                        vercel --token=%VERCEL_TOKEN% --prod --confirm
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ React app deployed to Vercel!"
        }
        failure {
            echo "❌ Deployment failed."
        }
    }
}