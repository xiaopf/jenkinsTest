pipeline {
  agent {
    docker {
      image 'node:12.6.0-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('install') {
        agent {
            docker {
            image 'alpine/git:latest'
            args '-p 3000:3000'
            }

        }
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'git --version'
        sh 'npm install'
      }
    }
    stage('dockerize') {
       agent {
            docker {
            image 'alpine/git:latest'
            args '-p 3000:3000'
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