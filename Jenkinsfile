pipeline {
    tools {nodejs "nodejs"}
    agent {
        docker {
        args '-p 3000:3000'
        image 'node:6-alpine'
        }

    }
    stages {
        stage('build') {
        steps {
            sh 'node -v'
            sh 'npm -v'
            sh 'npm install'
        }
        }
    }
}