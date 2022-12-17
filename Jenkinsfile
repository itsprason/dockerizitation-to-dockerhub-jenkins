pipeline{
    agent any

environment {     
    DOCKERHUB_CREDENTIALS= credentials('DockerHubCreds')     
    }
    stages{

        stage("GIT SCM"){
            steps{
                git branch: 'main', url: 'https://github.com/itsprason/dockerizitation-to-dockerhub-jenkins'
            }
        }

        stage("Test Code"){
            steps{
                echo "==============Executing Test Code==========="
            }
        }

        stage('Build image') {
            steps{
                sh " docker build -t itsprason/node-application:${BUILD_ID} ."
                sh "docker images"
            }
        }
        
        stage('Login to Docker Hub') {      	
            steps{                       	
        	    sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR -p '${DOCKERHUB_CREDENTIALS_PSW}'"                		
        	    echo 'Login Completed'      
            }           
        }   
        stage('Push Image to Docker Hub') {         
            steps{                            
                sh 'docker push itsprason/node-application:${BUILD_ID}'           
                echo 'Push Image Completed'       
            }            
        }  

    }

    post{
        always{
            sh 'docker logout'     
        }

        success{
            echo "==============Success==========="
        }

        failure{
            echo "==============Failed==========="
        }
    }
}
