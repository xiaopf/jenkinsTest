pipeline {
  agent none
  stages {

    stage('dockerize') {
       agent {
            docker {
            image 'alpine/git:latest'
            }
        }
      steps {
        sh 'git submodule init'
        sh 'git submodule update'
        sh 'cd dockerize'
        sh 'git pull origin master'
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