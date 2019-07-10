pipeline {
  agent any
  stages {
    stage('node') {
      steps {
        sh 'node -v'
      }
    }
  }
  stages {
    stage('git') {
      steps {
        sh 'git --version'
      }
    }
  }
}