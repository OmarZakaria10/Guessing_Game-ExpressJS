# Guess The Number

it's game to guess number from 1 to 20 with scoreboard globally for all players

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

- the server uses port 3000
- to use the app in same machine you have installed the app on click [local](http://localhost:3000/)
- if you are group and want to compete with each other open your browser and write `ip of machine with app installed on`:3000/
- click in scoreboad on navbar to see best 5 scores


## Docker 

If you have docker installed on your machine you can download image
1. **Pull the Image from docker hub**

    Open your terminal and run the following command to pull the image:

    ```bash
    docker pull omarzakaria10/guessing_game:V1.0.0
    ```
2. **Run the Docker Container**

    Open your terminal and run the following command to Run the Docker Container:

    ```bash
    docker run -it -p 3000:3000 omarzakaria10/guessing_game:V1.0.0
    ```
3. **Run the game**
    
    now open you browser and type 
    ```url
    http://localhost:3000/
    ```


