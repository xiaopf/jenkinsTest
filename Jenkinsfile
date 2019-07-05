pipeline {
  agent {
    node {
      label 'nodejs'
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