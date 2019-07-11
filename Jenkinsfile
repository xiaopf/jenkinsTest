pipeline {
  agent any
  stages {
    stage('npm install') {
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
        sh "cd ./dockerize"
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
    stage('build image') {
      steps {
        sh 'cp -r build ./dockerize'
        sh 'docker build -t jenkinstest -f ./dockerize/Dockerfile .'
      }
    }
    stage('push image') {
      steps {
        sh 'docker tag jenkinstest 47.93.234.165:5000/jenkinstest'
        sh 'docker push 47.93.234.165:5000/jenkinstest'

      }
    }
    stage('delete images') {
      steps {
        sh 'docker  rmi -f jenkinstest'
        sh 'docker  rmi -f 47.93.234.165:5000/jenkinstest'
      }
    }
  }
}