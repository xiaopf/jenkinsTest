pipeline {
  agent none
  stages {
    stage('install') {
        agent {
            docker {
            image 'node:12.6.0-alpine'
            }
        }
      steps {
        sh 'node -v'
        sh 'npm -v'
        // sh 'npm install'
      }
    }
    stage('dockerize') {
      steps {
        sh '/usr/bin/git submodule init'
        sh '/usr/bin/git submodule update'
        sh 'cd dockerize'
        sh '/usr/bin/git pull origin master'
        sh 'cd ..'
      }
    }
    // stage('build') {
    //   steps {
    //     sh 'npm run build'
    //   }
    // }
    // stage('docker image') {
    //   steps {
    //     sh 'docker build -t test -f ./dockerize/Dockerfile .'
    //   }
    // }
  }
}