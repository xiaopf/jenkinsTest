pipeline {
  agent none
  stages {

    stage('dockerize') {
       agent {
            docker {
            image 'alpine/git'
            }
        }
      steps {
        sh '/usr/bin/git submodule init'
        sh '/usr/bin/git submodule update'
        sh 'cd dockerize'
        sh '/usr/bin/git pull origin master'
        sh 'cd ..'
      }
    }
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('docker image') {
      steps {
        sh 'docker build -t test -f ./dockerize/Dockerfile .'
      }
    }
  }
}