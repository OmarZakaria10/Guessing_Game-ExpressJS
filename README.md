# Guess The Number

[![Dockerizing and Pushing App](https://github.com/OmarZakaria10/Guessing_Game-ExpressJS/actions/workflows/nodetest.yml/badge.svg)](https://github.com/OmarZakaria10/Guessing_Game-ExpressJS/actions/workflows/nodetest.yml)

#### This project is a number-guessing game built with Node.js, where players try to guess a number between 1 and 20. It includes a global scoreboard for all players, powered by a MongoDB database. The game is specifically designed to practice various DevOps tools and techniques, such as GitHub Actions for CI/CD, Terraform for infrastructure management, and Ansible for configuration automation.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. **Clone the repository:**

    Open your terminal and run the following command to clone the repository:

    ```bash
    git clone https://github.com/OmarZakaria10/Guessing_Game-ExpressJS.git
    ```


2. **Navigate to the project directory:**

    ```bash
    cd Guessing_Game-ExpressJS
    ```

3. **Install the dependencies:**

    Run the following command to install all the necessary dependencies:

    ```bash
    npm install
    ```

4. **Start the project:**

    After the dependencies are installed, start the project using:

    ```bash
    npm start
    ```

    This will start the project and you should see output indicating that the project is running.

## Usage

- the server uses port 8080
- to use the app in same machine you have installed the app on click [local](http://localhost:8080/)
- if you are group and want to compete with each other open your browser and write `ip of machine with app installed on`:8080/
- click in scoreboad on navbar to see best 5 scores


## Docker 

If you have docker installed on your machine you can download image
1. **Run the app using docker compose**

    Open your terminal and run the following command to pull the image:

    ```bash
    docker compose up
    ```
2. **Run the game**
    
    now open you browser and type 
    ```url
    http://localhost
    ```
## Deploying on AWS with Terraform and Ansible
Automate deployment on AWS, install Docker, and run the application using Terraform and Ansible.
### Step 1: Terraform 

Terraform configuration files are included to create three instances in the AWS us-east-1 region and a security group to allow SSH access.

To deploy with Terraform:

```bash
terraform init
terraform apply
```

### Step 2: Ansible
Use the provided Ansible playbook to connect to the instances, update the system, install Docker, and run the application.

To run Ansible against hosts:

#### 1. Prepare Ansible Inventory:

Add the public IPs of your AWS instances and the path to your private key in the hosts.ini file.
#### 2. Run the Ansible Playbook:

Navigate to the Ansible directory and execute the playbook:
```bash
cd ansible/
ansible-playbook -i hosts.ini main.yaml
```
#### 3. Access the Game:
Open your browser and go to `http://<instance-ip>` to play the game.

## Kubernetes Deployment with Minikube
Deploy the Guessing Game application using Kubernetes on Minikube.

#### Step 1: Start Minikube
Start the Minikube cluster:

```bash
minikube start
```
#### Step 2: Create a ConfigMap
Create a ConfigMap from an environment file to provide environment variables for the application:

```bash
kubectl create configmap myapp-env --from-env-file=../config.env -n myapp-namespace
```

#### Step 3: Create namespace and Deploy the Application
Create a Kubernetes namespace for the application and Apply the deployment configuration to create the application's deployment and Ingress:

```bash
cd kubernetes/
kubectl apply -f namespace.yaml 
kubectl apply -f deployment.yaml 
kubectl apply -f service.yaml 
kubectl apply -f ingress.yaml
```

#### Step 4: Enable the Ingress Controller in Minikube

```bash
minikube addons enable ingress
```

#### Step 5: Update Your `/etc/hosts` File
To access your app using the custom domain (myapp.local), you need to add an entry in your local /etc/hosts file to point myapp.local to your Minikube IP address.

##### 1. Find your Minikube IP address:
```bash
minikube ip
```
##### 2. Edit the `/etc/hosts` file with a text editor (requires sudo permissions):
```bash
sudo nano /etc/hosts
```
##### 3. Add the following line to the file, replacing <minikube-ip> with your Minikube IP address:

```bash
<minikube-ip> myapp.local
```

##### 4. Save and close the file.

### Step 6: Test the Ingress
Now you can access your application using the custom domain name:
##### Open your web browser and go to: http://myapp.local


## Kubernetes Deployment with Helm:
- Make sure You have Helm installed

- Navigate to the kubernetes/ directory where your Helm chart is located and install the chart:

```bash
cd /kubernetes
helm install myapp ./app-chart
```
#### Find your Minikube IP address:

```bash
minikube ip
```
##### Test application

`http://<minikube-ip>:30080`

