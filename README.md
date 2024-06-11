# Deploying a Node.js Application on AWS EC2

This guide walks you through deploying a Node.js application on an AWS EC2 instance using the default free tier option.

## Steps

### 1. Launch an EC2 Instance

1. Log in to your AWS Management Console.
2. Navigate to the EC2 Dashboard.
3. Click on **Launch Instance**.
4. Select the **ubuntu or any other os**.
5. Choose the **t2.micro** instance type (free tier eligible).
6. Configure the instance details, leaving all options as default.
7. Add storage if needed (default is 8 GB).
8. Add tags (optional).
9. Configure the security group:
    - Allow SSH (port 22)
    - Allow HTTP (port 80)
    - Allow HTTPS (port 443)
10. Review and launch the instance.
11. Create a new key pair, download it, and keep it secure.

### 2. Connect to Your EC2 Instance

1. Go to the **Instances** section in the EC2 Dashboard.
2. Select your instance and click on **Connect**.
3. Follow the instructions to connect via SSH. Use the following command template:

    ```sh
    ssh -i "path/to/your-key-pair.pem" ec2-user@your-instance-public-dns
    ```

### 3. Set Up Your EC2 Instance

Update the system packages:

  ```sh
    sudo apt update && sudo apt upgrade -y
  ```

Install Node.js and npm:

  ```sh
     sudo apt install -y nodejs npm
  ```

Alternatively, for better version management, install Node.js via nvm:

  ```sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    source ~/.nvm/nvm.sh
    nvm install node
  ```

Install Git:

  ```sh
    sudo apt install -y git
  ```

### 4. Clone Your Repository and Start the Application

Clone your Git repository:

  ```sh
    git clone https://github.com/your-repo/nodejs_app_on_aws.git
  ```

Navigate to the project directory and install dependencies:

   ```sh
    cd nodejs_app_on_aws
    npm install
   ```

Start the server:

  ```sh
    npm run start
  ```

### 5. Configure Security Groups

1. Go to the EC2 Dashboard and select your instance.
2. Click on the **Security** tab.
3. Select the security group associated with your instance.
4. Edit the inbound rules to add a custom TCP rule for your application port (e.g., port 3000).
![image](https://github.com/VaibhavTalkhande/nodejs_app_on_aws/assets/49303222/09cc6269-04ad-47c8-8631-062307c086fb)
### 6. Access Your Application

1. Open a web browser.
2. Enter the public IP address or DNS of your instance followed by the application port:

    ```sh
    http://your-instance-public-dns:3000/
    ```

Example:

  ```sh
    http://54.158.160.52:3000/
  ```

Use http instead of https since this is not a secure connection for now.

## Output

Your application should now be deployed and accessible. The output should look similar to the following screenshot:

![Output](https://github.com/VaibhavTalkhande/nodejs_app_on_aws/assets/49303222/bcc79ef8-0678-4152-b402-372fd609c477)

Congratulations, your Node.js app is now live on AWS EC2!
