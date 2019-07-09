pipeline {
  agent {
    docker {
      image 'node:12.6.0-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('test') {
      steps {
        sh 'node -v'
      }
    }
    stage('test') {
      steps {
        sh 'git --version'
      }
    }
  }
}