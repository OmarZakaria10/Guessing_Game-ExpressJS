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
1. **Pull the Image from docker hub**

    Open your terminal and run the following command to pull the image:

    ```bash
    docker pull omarzakaria10/guessing_game:latest
    ```
2. **Run the Docker Container**

    Open your terminal and run the following command to Run the Docker Container:

    ```bash
    docker run -it -p 8080:8080 omarzakaria10/guessing_game:latest
    ```
3. **Run the game**
    
    now open you browser and type 
    ```url
    http://localhost:8080/
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
