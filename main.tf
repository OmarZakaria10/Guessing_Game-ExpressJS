terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-east-1"
}
resource "aws_security_group" "allow_ssh" {
  name_prefix = "allow_ssh"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Allowing all IPs for troubleshooting; restrict this to your IP in production
  }

  # Allow HTTP traffic on port 80 from anywhere
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow HTTP traffic on port 8080 from anywhere
  # ingress {
  #   from_port   = 8080
  #   to_port     = 8080
  #   protocol    = "tcp"
  #   cidr_blocks = ["0.0.0.0/0"]
  # }

  # # Allow HTTP traffic on port 3000 from anywhere
  # ingress {
  #   from_port   = 3000
  #   to_port     = 3000
  #   protocol    = "tcp"
  #   cidr_blocks = ["0.0.0.0/0"]
  # }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "deleteme" {
  count                  = 3
  ami                    = "ami-04a81a99f5ec58529" # Ubuntu 24.04 LTS (us-east-1)
  instance_type          = "t2.micro"
  key_name               = "vockey"
  vpc_security_group_ids = [aws_security_group.allow_ssh.id]
  tags = {
    Name = "machine-${count.index + 1}"
  }
  #   provisioner "local-exec" {
  #     command = "echo ${self.public_ip} >> ip_addresses.txt"
  #   }
}
output "instance_ips" {
  value = aws_instance.deleteme[*].public_ip
}

