# Skeleton project for Swagger

- Install:
    `npm install`
    
- BD configuration:
    - file `config/config.json`
        - to change username, password and database name
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

