pipeline {
  agent {
    docker {
      image 'node:12.6.0-alpine'
      args '-p 3000:3000'
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
  tools {
    nodejs 'nodejs'
  }
}