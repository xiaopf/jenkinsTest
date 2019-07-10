pipeline {
  agent any
  stages {
    stage('node') {
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