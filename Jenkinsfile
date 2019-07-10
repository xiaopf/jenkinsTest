pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm install'
      }
    }
    stage('docker file') {
      steps {
        sh "git submodule init"
        sh "git submodule update"
        sh "cd dockerize"
        sh "git pull origin master"
        sh "cd .."
      }
    }
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('docker') {
      steps {
        sh 'docker build -t jenkinstest -f ./dockerize/Dockerfile .'
      }
    }
  }
}