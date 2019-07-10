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
        sh "ls"
        sh "git pull origin master"
        sh "cd .."
        sh "ls"
      }
    }
    stage('build') {
      steps {
        sh 'npm run build'
        sh 'ls'
      }
    }
    stage('docker') {
      steps {
        sh 'cp -r build ./dockerize'
        sh 'docker build -t jenkinstest -f ./dockerize/Dockerfile .'
      }
    }
    stage('run docker') {
      steps {
        sh 'docker run -d -p 8001:80 jenkinstest'
      }
    }
  }
}