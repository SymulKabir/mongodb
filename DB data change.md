Here is the version with just the steps and the necessary run commands:

## **For Linux**

### Step 1: Stop MongoDB Service 
net stop MongoDB 

### Step 2: Edit `mongod.cfg` File (C:\Program Files\MongoDB\Server\<your-version>\bin\mongod.cfg)
  replication:
    replSetName: "rs0" 

### Step 3: Start MongoDB Service 
net start MongoDB 

### Step 4: Initialize Replica Set 
mongosh 

### Step 5: Run this in mongo Shell
rs.initiate() 

## **For Linux**

### Step 1: Stop MongoDB Service 
sudo systemctl stop mongod 

### Step 2: Edit `mongod.cfg` File (/etc/mongod.conf)
replication:
    replSetName: "rs0"

### Step 3: Start MongoDB Service 
sudo systemctl start mongod 

### Step 4: Initialize Replica Set 
mongosh 

### Step 5: Run this in mongo Shell
rs.initiate() 

## **For macOS**

### Step 1: Stop MongoDB Service 
brew services stop mongodb

### Step 2: Edit `mongod.cfg` File (/usr/local/etc/mongod.conf or /opt/homebrew/etc/mongod.conf)
replication:
  replSetName: "rs0"

### Step 3: Start MongoDB Service 
brew services start mongodb

### Step 4: Initialize Replica Set 
mongosh 

### Step 5: Run this in mongo Shell
rs.initiate() 

## **For Docker**

### Step 1: Install Docker In Your OS

### Step 2: Run Mongodb Container With This Command

```bash
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -v /var/lib/mongodb:/data/db \
  mongo \
  mongod --replSet rs0 --bind_ip_all
```

### Step 3: Enter Mongodb Docker Container

```bash
docker exec -it mongodb /bin/bash
```

### Step 4: Enter Mongo Shell

```bash
mongosh
```

### Step 5: Run This In Mongo Shell

```bash
rs.initiate()
```
 
