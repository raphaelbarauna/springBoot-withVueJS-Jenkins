pipeline {
    agent any
    stages {
        stage ('Build Backend') {
            steps { 
                sh 'mvn clean package -DskipTests=true'
            }
        }
        stage ('Unit Tests') {
            steps { 
                sh 'mvn test'
            }
        }
        stage ('Sonar Analysis') {
            environment {
                scannerHome = tool 'SONAR_SCANNER'
            }
            steps { 
                withSonarQubeEnv('SONAR_LOCAL') {
                    sh "${scannerHome}/bin/sonar-scanner -e -Dsonar.projectKey=demo -Dsonar.host.url=http://172.21.0.2:9000 -Dsonar.login=dd362fd30c624f009d76cdec5b9bdc3806fe6c59 -Dsonar.java.binaries=target"
                }
            }
        }
        stage ('Quality Gate') {
            steps { 
                timeout(time: 1, unit: 'MINUTES') {
                    waitForQualityGate abortPipeLine: true
                }
            }
        }                                             
    }
}

