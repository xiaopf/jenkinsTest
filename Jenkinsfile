pipeline {
  agent {
    docker {
      image 'node:12.6.0-alpine'
      args '-p 3000:3000 -p 5000:5000'
    }

  }
  stages {
    stage('test') {
      steps {
        sh 'node -v'
      }
    }
    stage('git') {
      steps {
        sh 'git --version'
      }
    }
  }
}