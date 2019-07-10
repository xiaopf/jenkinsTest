pipeline {
  agent any
  tools {nodejs "nodejs"}
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