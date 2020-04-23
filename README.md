# Skeleton project for Swagger

- Install:
    `npm install`
    
- BD configuration:
    - file `config/config.js`
        - to change username, password and database name
        - or use environment variables
            - DB_USERNAME
            - DB_PASSWORD
            - DB_NAME
            - DB_HOST
            - DB_PORT
            - DB_DIALECT
    - table name should be'Tests'
    - if the table doenst exists, it will be created when in
    - If the table does not exist, it will be created by inserting a record   

For testing: 

Start server:
    `npm run start`

Start swagger editor :
    `swagger project edit`


- endpoints:
    - GET /test/{testId}
        - Retrieves the record with id = testId
    - POST /tests
        - Creates a new record: {name: STRING, age: INTEGER}


- ec2 installation
    1  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    2  . ~/.nvm/nvm.sh
    3  nvm install node
    4  node -e "console.log('Running Node.js ' + process.version)"
    5  sudo yum update -y
    6  sudo yum install git -y
    7 git clone https://github.com/jmgarcia-softec/endpoint_tests.git

